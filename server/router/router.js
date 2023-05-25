//import
const express = require('express');
const Pool = require('pg').Pool;

//express router
const router = express.Router();
//database connection
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'Store',
  user: 'postgres',
  password: '0227',
});

//get all products
router.get('/', (req, res) => {
  pool.query('SELECT json_agg(store.product.*) FROM store.product', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error!');
    } else {
      res.json(result.rows[0].json_agg);
    }
  });
});

//get product by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  pool.query('SELECT json_agg(store.product.*) FROM store.product WHERE id = $1',[id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error!');
    } else {
      res.json(result.rows[0].json_agg);
    }
  });
});

//delete product by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  pool.query('DELETE FROM store.product WHERE id = $1', [id], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error!');
    } else {
      res.send(`${id} deleted`);
    }
  });
});

//post product feedback
router.post('/feedback', (req, res) => {
  const { name, detail, price, type, image } = req.body;
  pool.query(
    'INSERT INTO store.product (name, detail, price, type, image) VALUES ($1, $2, $3, $4, $5)',
    [name, detail, price, type, image],
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error!');
      } else {
        res.send('Successfully added feedback');
      }
    }
  );
});

module.exports = router;
