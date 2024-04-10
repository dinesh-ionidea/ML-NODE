import { Dialect } from 'sequelize';

interface Config {
    [key: string]: {
      dialect: Dialect;
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
    };
  }
  
  const config: Config = {
    development: {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ml_record',
    },
    production: {
      dialect: 'mysql',
      host: 'production_host',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ml_record',
    },
  };
  
  export default config;
  