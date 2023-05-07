const { Router } = require("express");
const router = Router();

const noticeRouter = require("./News");
const userRoutes = require('./Users')


router.use("/news", noticeRouter);
router.use("/users", userRoutes);


module.exports = router;
