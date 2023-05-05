const { Router } = require("express");
const router = Router();

const noticeRouter = require("./News");


router.use("/news", noticeRouter);


module.exports = router;
