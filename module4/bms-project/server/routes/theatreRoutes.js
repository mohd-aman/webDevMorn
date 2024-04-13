const router = require("express").Router();
const Theatre = require("../models/theatreModel");
const authMiddleware = require("../middlewares/authMiddleware");
const Show = require("../models/showModel");

// Create
router.post("/add-theatre", authMiddleware, async (request, response) => {
  try {
    const newTheatre = new Theatre(request.body);
    await newTheatre.save();

    response.status(200).send({
      success: true,
      message: "Theatre added successfully!",
    });
  } catch (err) {
    console.log(err);
    response.status(500).send({
      success: false,
      message: "Something went wrong. Please, try again in sometime.",
    });
  }
});

// Read
router.get(
  "/get-all-theatres-by-owner",
  authMiddleware,
  async (request, response) => {
    try {
      const theatres = await Theatre.find({ owner: request.body.userId });
      console.log(theatres);
      response.status(200).send({
        success: true,
        message: "Theatres fetched successfully!",
        data: theatres,
      });
    } catch (err) {
      response.status(500).send({
        success: false,
        message: "Something went wrong. Please, try again in sometime.",
      });
    }
  }
);

router.get("/get-all-theatres", authMiddleware, async (_, response) => {
  try {
    const theatres = await Theatre.find().populate("owner").select("-password");
    response.status(200).send({
      success: true,
      message: "Theatres fetched successfully!",
      data: theatres,
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: "Something went wrong. Please, try again in sometime.",
    });
  }
});

// Update
router.put("/update-theatre", authMiddleware, async (request, response) => {
  try {
    await Theatre.findByIdAndUpdate(request.body.theatreId, request.body);
    response.send({
      success: true,
      message: "Theatre Updated Successfully",
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message,
    });
  }
});

// Delete
router.delete("/delete-theatre", authMiddleware, async (request, response) => {
  try {
    await Theatre.findByIdAndDelete(request.query.theatreId);
    response.send({
      success: true,
      message: "Theatre Deleted Successfully",
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message,
    });
  }
});

// Show APIs
router.post("/add-show", authMiddleware, async (request, response) => {
  try {
    const newShow = new Show(request.body);
    await newShow.save();
    response.status(200).send({
      success: true,
      message: "Show added successfully!",
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message,
    });
  }
});

router.post(
  "/get-all-shows-by-theatre",
  authMiddleware,
  async (request, response) => {
    try {
      const shows = await Show.find({
        theatre: request.body.theatreId,
      }).populate("movie");
      response.send({
        success: true,
        message: "Shows fetched successfully",
        data: shows,
      });
    } catch (err) {
      response.status(500).send({
        success: false,
        message: err.message,
      });
    }
  }
);

router.delete("/delete-show", authMiddleware, async (request, response) => {
  try {
    await Show.findByIdAndDelete(request.query.showId);
    response.send({
      success: true,
      message: "Show Deleted Successfully",
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message,
    });
  }
});

router.post(
  "/get-all-theatres-by-movie",
  authMiddleware,
  async (request, response) => {
    try {
      const { movieId, date } = request.body;

      // get all shows for the movie
      const shows = await Show.find({ movie: movieId, date })
        .populate("theatre")
        .sort({ createdAt: -1 });

      // get all unique theatres from the shows
      let uniqueTheatres = [];
      shows.forEach((show) => {
        const theatre = uniqueTheatres.find(
          (theatre) => theatre._id === show.theatre._id
        );

        if (!theatre) {
          const showsForThisTheatre = shows.filter(
            (showObj) => showObj.theatre._id == show.theatre._id
          );
          uniqueTheatres.push({
            ...show.theatre._doc,
            shows: showsForThisTheatre,
          });
        }
      });

      response.send({
        success: true,
        message: "Theatres fetched successfully",
        data: uniqueTheatres,
      });
    } catch (err) {
      response.status(500).send({
        success: false,
        message: err.message,
      });
    }
  }
);

module.exports = router;
