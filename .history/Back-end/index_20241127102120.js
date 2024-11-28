const express = require('express');
const cors = require('cors');
const client = require('./db'); // Import client from db.js
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Endpoint to fetch products
app.get('/api/products', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.post('/api/products', async (req, res) => {
  const { name, price } = req.body;

  // Validate that both name and price are provided
  if (!name || !price) {
    return res.status(400).json({ message: 'Product name and price are required' });
  }

  try {
    const queryText = 'INSERT INTO products(name, price) VALUES($1, $2) RETURNING *';
    const result = await client.query(queryText, [name, price]);

    res.json({
      message: 'Product added successfully',
      product: result.rows[0], // Return the added product with its id
    });
  } catch (err) {
    console.error(err);
    res.status(500).send(`Server Error ${err}`);
  }
});

// Endpoint to place an order
app.post('/api/orders', async (req, res) => {
  const { buyer_name, contact_info, delivery_address, items } = req.body;
  const queryText = 'INSERT INTO orders(buyer_name, contact_info, delivery_address) VALUES($1, $2, $3) RETURNING id';
  try {
    const result = await client.query(queryText, [buyer_name, contact_info, delivery_address]);
    const orderId = result.rows[0].id;

    // Insert order items
    for (let item of items) {
      const { product_id, quantity } = item;
      await client.query('INSERT INTO order_items(order_id, product_id, quantity) VALUES($1, $2, $3)', [orderId, product_id, quantity]);
    }

    res.json({ orderId, message: 'Order placed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Endpoint to update order status
app.put('/api/orders/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await client.query('UPDATE orders SET order_status = $1 WHERE id = $2', [status, id]);
    res.json({ message: 'Order status updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
