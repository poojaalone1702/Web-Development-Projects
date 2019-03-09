const fs = require('fs');

  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/blog-database'; // Databse URI and database name
  process.env.databaseName = 'development database: blog-database'; // Database name

