const pool = require('../db/db');

async function createTask(title, description, dueDate, status, userId) {
  const query = `
    INSERT INTO tasks (title, description, due_date, status, user_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;
  const values = [title, description, dueDate, status, userId];
  const res = await pool.query(query, values);
  return res.rows[0];
}

async function getTasksByUserId(userId) {
  const query = 'SELECT * FROM tasks WHERE user_id = $1';
  const values = [userId];
  const res = await pool.query(query, values);
  return res.rows;
}


module.exports = {
  createTask,
  getTasksByUserId,
};
