const express = require("express")

const router = express.Router()

router.get("/", (require, response) => {
    response.send("oopioio")
})


module.exports = router

