// import
const express = require('express');
const Pool = require('pg').Pool;

// express router
const router = express.Router();
// database connection
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'Store',
  user: 'postgres',
  password: '0227',
});

// get all products
/**
 * @openapi
 * /api:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: Successfully retrieved the products
 *       500:
 *         description: Internal server error occurred
 */
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

// get product by id
/**
 * @openapi
 * /api/{id}:
 *   get:
 *     summary: Get a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product
 *     responses:
 *       200:
 *         description: Successfully retrieved the product
 *       500:
 *         description: Internal server error occurred
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  pool.query('SELECT json_agg(store.product.*) FROM store.product WHERE id = $1', [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error!');
    } else {
      res.json(result.rows[0].json_agg);
    }
  });
});

// delete product by id
/**
 * @openapi
 * /api/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product
 *     responses:
 *       200:
 *         description: Successfully deleted the product
 *       500:
 *         description: Internal server error occurred
 */
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

// post product feedback
/**
 * @openapi
 * /api/feedback:
 *   post:
 *     summary: Create a new product feedback
 *     requestBody:
 *       description: Information about the feedback to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name:
 *                 type: string
 *                 description: Title of the feedback
 *               detail:
 *                 type: string
 *                 description: Image of the feedback
 *               price:
 *                 type: integer
 *                 description: Price of the feedback
 *               type:
 *                 type: string
 *                 description: Category of the feedback
 *               image:
 *                 type: string
 *                 description: Image of the feedback
 *     responses:
 *       200:
 *         description: Successfully added the feedback
 *       500:
 *         description: Internal server error occurred
 */
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
