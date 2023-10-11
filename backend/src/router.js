const express = require("express")
const { storage } = require('./config/multer')
const router = express.Router()

const multer = require('multer')
const upload = multer({ storage: storage})
const path = require('path')


const usersController = require('./controller/UsuariosController')
const friendsController = require('./controller/AmigosController')

router.get("/", (require, response) => {
    response.send("oopioio")
})


// Rotas de Usuario
router.get("/users", usersController.getAllUsersController) 
router.get("/users/:id", usersController.getUserByIdController) 
router.post("/auth/user", usersController.authUserLoginController) 
router.post("/users/create", upload.single('avatar'),  usersController.addUserController)
router.delete("/users/delete/:id", usersController.deleteUserController)
router.put("/users/put/:id", usersController.updatedUserController)
router.post("/users/search/:id", usersController.getUsersForSearchController)
router.use("/uploads", express.static(path.resolve('uploads')))


// Rotas de Amigos
router.post("/friends/create", friendsController.addAmigoController)
router.post("/friends/verify", friendsController.verifyAmigosController)

module.exports = router

