const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));
// Callback for express route requires a request & response as arguments

module.exports = router;