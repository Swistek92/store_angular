import mysql from 'mysql2';
import 'dotenv/config';

const createpool = () => {
  const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'estore',
    port: Number(process.env.DB_PORT || '3306'),
    multipleStatements: true,
  });
  return pool;
};

export default createpool;
