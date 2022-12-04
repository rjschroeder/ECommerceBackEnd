const router = require('express').Router();
const { response } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    Category.findAll({
      include: [Product]
    })
      .then((response) => {res.status(200).json(response)})
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })
      .then((response) => {res.status(200).json(response)})
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    Category.create(req.body)
      .then((response) => {res.status(200).json(response)})
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then((response) => {res.status(200).json(response)})
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
