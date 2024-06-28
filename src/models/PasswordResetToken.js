const pool = require('../db/db');

async function createPasswordResetToken(token, expirationDate, userId) {
  const query = `
    INSERT INTO password_reset_tokens (token, expiration_date, user_id)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  const values = [token, expirationDate, userId];
  const res = await pool.query(query, values);
  return res.rows[0];
}

async function getPasswordResetTokenById(id) {
  const query = 'SELECT * FROM password_reset_tokens WHERE id = $1';
  const values = [id];
  const res = await pool.query(query, values);
  return res.rows[0];
}


module.exports = {
  createPasswordResetToken,
  getPasswordResetTokenById,
};
