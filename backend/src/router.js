const express = require("express")

const router = express.Router()

const usersController = require('./controller/UsuariosController')

router.get("/", (require, response) => {
    response.send("oopioio")
})

router.get("/users", usersController.getAllUsersController) 
router.get("/users/:id", usersController.getUserByIdController) 
router.post("/auth/user", usersController.authUserLoginController) 
router.post("/users/create", usersController.addUserController)
router.delete("/users/delete/:id", usersController.deleteUserController)
router.put("/users/put/:id", usersController.updatedUserController)
router.post("/users/search", usersController.getUsersForSearchController)

module.exports = router

