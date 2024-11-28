import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem('token');
    history.push('/login'); /
  }, [history]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Logging out...</h2>
    </div>
  );
}

export default Logout;
