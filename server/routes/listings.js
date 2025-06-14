const express = require('express');
const router = express.Router();
const {
  getAllListings,
  getListing,
  createListing,
  updateListing,
  deleteListing
} = require('../controllers/listingsController');

// GET all listings
router.get('/', getAllListings);

// GET single listing
router.get('/:id', getListing);

// POST new listing
router.post('/', createListing);

// PUT update listing
router.put('/:id', updateListing);

// DELETE listing
router.delete('/:id', deleteListing);

module.exports = router; 