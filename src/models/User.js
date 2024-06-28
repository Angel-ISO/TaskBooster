const pool = require('../db/db');

async function createUser(username, email, password) {
  const query = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  const values = [username, email, password];
  const res = await pool.query(query, values);
  return res.rows[0];
}

async function getUserById(id) {
  const query = 'SELECT * FROM users WHERE id = $1';
  const values = [id];
  const res = await pool.query(query, values);
  return res.rows[0];
}


module.exports = {
  createUser,
  getUserById,
};
