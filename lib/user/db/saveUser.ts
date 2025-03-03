import sql from "better-sqlite3";

const db = sql("users.db");

type CreateUserType = {
  email: string;
  password: string;
  passwordCheck: string;
  username: string;
  createdDate: string;
};

export async function saveUser(user: CreateUserType) {
  const dbUser = {
    email: user.email,
    password: user.password,
    username: user.username,
    created_date: user.createdDate,
  };

  db.prepare(
    `INSERT INTO users 
        (email, password, username, created_date) 
    VALUES (
        @email, 
        @password, 
        @username, 
        @created_date
    )`
  ).run(dbUser);
}
