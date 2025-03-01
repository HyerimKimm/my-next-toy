import sql from "better-sqlite3";

const db = sql("users.db");

type CreateUserType = {
  email: string;
  password: string;
  username: string;
  created_date: string;
};

export async function saveUser(user: CreateUserType) {
  db.prepare(
    `INSERT INTO users 
        (email, password, username, created_date) 
    VALUES (
        @email, 
        @password, 
        @username, 
        @created_date
    )`
  ).run(user);
}
