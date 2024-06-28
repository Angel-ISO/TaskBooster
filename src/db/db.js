const { Pool } = require('pg');


// cadena de conexion para conectarme con postgress sql en clever cloud

const pool = new Pool({
  user: 'uicshr7mxg6wqawj1fct', 
  host: 'byk6p9fly2oww6m8gxht-postgresql.services.clever-cloud.com', 
  database: 'byk6p9fly2oww6m8gxht', 
  password: 'sl9alQ8z2TdPAIo0jWn5FnMChBuHGZ', 
  port: 50013, 
});

module.exports = pool;
