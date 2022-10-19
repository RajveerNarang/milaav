const express = require("express");
const router = express.Routes();

const controller = require("./controller");

router.post("/api/save-call-id", controller.saveCallId);
router.post("api/get-call-id/;id", controller.getCallId);

module.exports = router;
