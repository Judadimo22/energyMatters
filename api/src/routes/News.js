const express = require("express");
const router = express.Router();
const {
  getIdNotice,
  postNotice,
  putNotice,
  deleteNotice,
  getNotices,
} = require('../controllers/newsController');


router.post("/", (req, res) => {
  postNotice(req, res);
});

router.get("/", (req, res) => {
  getNotices(req, res);
});

router.get("/:id", (req, res) => {
  getIdNotice(req, res);
});


router.put("/:id", (req, res) => {
  putNotice(req, res);
});

router.delete("/:id", (req, res) => {
  deleteNotice(req, res);
});

module.exports = router;