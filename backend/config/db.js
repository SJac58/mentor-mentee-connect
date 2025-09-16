const mysql = require("mysql2");

// ✅ Create a connection pool (recommended for production apps)
const pool = mysql.createPool({
  host: "localhost",        // your DB host
  user: "root",             // your MySQL username
  password: "mySQL@2005", // your MySQL password
  database: "mentor_mentee_db",// your DB name
  port: "3306",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ✅ Export promise-based pool for async/await usage
const db = pool.promise();

module.exports = db;
