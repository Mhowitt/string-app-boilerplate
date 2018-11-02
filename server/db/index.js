const { Client } = require('pg');
const db = process.env.NODE_ENV === 'test' ? 'dmi-db-test' : 'dmi-db';

const client = new Client({
  connectionString: `postgresql://localhost/${db}`
});

client.connect();

module.exports = client;
