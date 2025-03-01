const sql = require("better-sqlite3");
const db = sql("users.db");

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS users (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       email TEXT UNIQUE NOT NULL,
       password TEXT NOT NULL,
       username TEXT NOT NULL,
       created_date TEXT NOT NULL
    )
  `
).run();
