import mysql from 'mysql2';
import 'dotenv/config';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'estore',
  port: Number(process.env.DB_PORT || '3306'),
  connectionLimit: 10,
  queueLimit: 0,
  waitForConnections: true,
  multipleStatements: true,
});

const queryExecutor = <T>(sql: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    pool.query(sql, (error: any, results: T) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

export default queryExecutor;
