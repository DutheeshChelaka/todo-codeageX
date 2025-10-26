import dotenv from 'dotenv';
dotenv.config();
export const env = {
  port: Number(process.env.PORT || 8080),
  databaseUrl: process.env.DATABASE_URL || 'postgres://todo:todo@localhost:5432/todo'
};
