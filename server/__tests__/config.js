const request = require('supertest');
process.env.NODE_ENV = 'test';
// app imports
const app = require('../app.js');
const db = require('../db');

// Database DDL (for tests)
const DB_TABLE = {
  strings: `CREATE TABLE strings
  (
    id SERIAL PRIMARY KEY,
    string TEXT NOT NULL,
  )`
};

// global auth variable to store things for all the tests
const TEST_DATA = {};

async function beforeAllHook() {
  try {
    await db.query(DB_TABLE['strings']);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Hooks to insert a user, company, and job, and to authenticate
 *  the user and the company for respective tokens that are stored
 *  in the input `testData` parameter.
 * @param {Object} TEST_DATA - build the TEST_DATA object
 */
async function beforeEachHook(TEST_DATA) {
  try {
    await db.query(
      `INSERT INTO strings (string)
                  VALUES ('string-a-ling'), ('I love strings'), ('lil string')`
    );

    const string = await request(app).get('/strings');

    TEST_DATA.stringName = string.rows[0].string;
  } catch (error) {
    console.error(error);
  }
}

async function afterEachHook() {
  try {
    await db.query('DELETE FROM strings');
  } catch (error) {
    console.error(error);
  }
}

async function afterAllHook() {
  try {
    await db.query('DROP TABLE IF EXISTS strings');
    await db.end();
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  afterAllHook,
  afterEachHook,
  TEST_DATA,
  beforeAllHook,
  beforeEachHook,
  DB_TABLE
};
