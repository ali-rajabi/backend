require("dotenv/config");

// module.exports = {
//   development: {
//     databases: {
//         database: process.env.MYSQL_DB,
//         username: process.env.MYSQL_USER,
//         password: process.env.MYSQL_PASS,
//         host: process.env.MYSQL_HOST,
//         port: process.env.MYSQL_PORT,
//         dialect: 'mysql',
//     },
//   },
//   production: {
//     databases: {
//         database: process.env.MYSQL_DB,
//         username: process.env.MYSQL_USER,
//         password: process.env.MYSQL_PASS,
//         host: process.env.MYSQL_HOST,
//         port: process.env.MYSQL_PORT,
//         dialect: 'mysql',
//       },
//   },
// };

module.exports = {
  development: {
    database: process.env.MYSQL_DB,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
    logging: console.log,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
  },
};
