const router = require("express").Router();
const Movie = require('../models/movieModel');
const authMiddleware = require('../middlewares/authMiddleware');

// Create
router.post('/add-movie', authMiddleware, async (req, res) => {
  try {
    const movie = req.body;
    const newMovie = new Movie(movie);
    await newMovie.save();
    res.status(200).send({
      success: true,
      message: 'Movie added successfully',
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

// Read
router.get('/get-all-movies', async (_, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).send({
      success: true,
      message: "Movies fetched successfully",
      data: movies,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

// Update
router.put("/update-movie", authMiddleware, async (request, response) => {
  try {
    await Movie.findByIdAndUpdate(request.body.movieId, request.body);
    response.send({
      success: true,
      message: "Movie Updated Successfully",
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

// Delete
router.delete("/delete-movie", authMiddleware, async (request, response) => {
  try {
    await Movie.findByIdAndDelete(request.query.movieId);
    response.send({
      success: true,
      message: "Movie Deleted Successfully",
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

router.get("/get-movie-by-id/:movieId", authMiddleware, async (request, response) => {
  try {
    const movie = await Movie.findById(request.params.movieId);
    if (movie) {
      response.status(200).send({
        success: true,
        message: "Movie Fetched Successfully",
        data: movie
      });
    } else {
      response.status(404).send({
        success: false,
        message: "Movie Not found"
      });
    }
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;