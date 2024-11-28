import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useHistory();

  useEffect(() => {
    localStorage.removeItem('token');
    history.push('/login'); 
  }, [history]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Logging out...</h2>
    </div>
  );
}

export default Logout;