const pool = require('../config/db');  
async function testDB() {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT 1 as test');
    console.log('Résultat test DB :', rows);
  } catch (err) {
    console.error('Erreur DB :', err);
  } 
}

testDB();