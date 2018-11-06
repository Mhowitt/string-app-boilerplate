const express = require('express');
const router = express.Router();
const db = require('../db');

router
  .route('')
  .get(async (req, res, next) => {
    try {
      const strings = await db.query('SELECT * FROM strings');
      if (strings.rows.length < 1) {
        return res.json('No strings :(');
      } else {
        return res.json(strings.rows);
      }
    } catch (err) {
      return next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const newStrings = await db.query(
        'INSERT INTO strings (string) VALUES ($1) RETURNING *',
        [req.body.string]
      );

      //returning all
      return res.json(newStrings.rows[0]);
    } catch (err) {
      return next(err);
    }
  });

module.exports = router;
