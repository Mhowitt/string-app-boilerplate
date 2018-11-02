process.env.NODE_ENV = 'test';
const db = require('../db');

const request = require('supertest');
const app = require('../app');

beforeAll(async () => {
  await db.query('CREATE TABLE strings (id SERIAL PRIMARY KEY, string TEXT');
});

beforeEach(async () => {
  await db.query("INSERT INTO strings (string) VALUES ('Hello'), ('World')");
});

afterEach(async () => {
  await db.query('DELETE FROM strings');
});

afterAll(async () => {
  await db.query('DROP TABLE strings');
  db.end();
});

describe('GET /strings', () => {
  test('It should respond with an array of strings', async () => {
    const response = await request(app).get('/strings');
    expect(response.body).toEqual(['Hello', 'World']);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('string');
    expect(response.statusCode).toBe(200);
  });
});
