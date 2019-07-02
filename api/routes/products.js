const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /products"
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "23") {
    res.status(200).json({
      message: "You discovered an id",
      id: id
    });
  } else {
    res.status(200).json({
      message: `You passed an ID ${id}`
    });
  }
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Handling POST requests to /products"
  });
});

router.put("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "23") {
    res.status(200).json({
      message: `You updated product with id ${id}`,
      id: id
    });
  } else {
    res.status(200).json({
      message: `You passed an ID ${id}`
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "23") {
    res.status(200).json({
      message: `You partially updated product with id ${id}`,
      id: id
    });
  } else {
    res.status(200).json({
      message: `You passed an ID ${id}`
    });
  }
});

router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "23") {
    res.status(200).json({
      message: `You deleted product with id ${id}`,
      id: id
    });
  } else {
    res.status(200).json({
      message: `You passed an ID ${id}`
    });
  }
});

module.exports = router;
