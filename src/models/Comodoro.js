const pool = require('../db');

async function createComodoro(workDuration, breakDuration, longBreakDuration, cycles, userId) {
  const query = `
    INSERT INTO comodoros (work_duration, break_duration, long_break_duration, cycles, user_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;
  const values = [workDuration, breakDuration, longBreakDuration, cycles, userId];
  const res = await pool.query(query, values);
  return res.rows[0];
}

async function getComodorosByUserId(userId) {
  const query = 'SELECT * FROM comodoros WHERE user_id = $1';
  const values = [userId];
  const res = await pool.query(query, values);
  return res.rows;
}


module.exports = {
  createComodoro,
  getComodorosByUserId,
};
