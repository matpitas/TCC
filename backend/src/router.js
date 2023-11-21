const express = require("express")
const { storage } = require('./config/multer')
const router = express.Router()

const multer = require('multer')
const upload = multer({ storage: storage})
const path = require('path')


const usersController = require('./controller/UsuariosController')
const friendsController = require('./controller/AmigosController')
const gamesController = require('./controller/JogosController')
const schedulingController = require('./controller/AgendamentoController')
const participantController = require('./controller/ParticipantesController')
const emailSender = require('./email/sendingEmail')

router.get("/", (require, response) => {
    response.send("Root Application.")
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
router.post("/friends/list", friendsController.listAmigosController)
router.post("/friends/request", friendsController.listRequestController)
router.post("/friends/request/response/:id", friendsController.AcceptRequestController)

// Rota de Jogos
router.get("/game", gamesController.getAllJogosController)
router.post("/game/create", upload.single('imagemJogo'), gamesController.addJogoController)

// Rota de Agendamento
router.post("/scheduling/create", schedulingController.addAgendamentoController)
router.get("/scheduling/:id", schedulingController.getAgendamentoByIdController)
router.get("/scheduling/finished/:id", schedulingController.getFinishedAgendamentoByIdController)
router.get("/scheduling/next/:id", schedulingController.getNearAgendamentoByIdController)
router.get("/scheduling/last/:id", schedulingController.getLastAgendamentoByIdController)
router.get("/scheduling/verify/:id", schedulingController.verifyStatusAgendamentoController)
router.post("/scheduling/delete/:id", schedulingController.deleteAgendamentoController)

// Rota de Participante
router.post("/participant/create", participantController.addParticipantesController)
router.post("/participant", participantController.getParticipantesController)
router.get("/participant/schedule/:id", participantController.getSchedulingByParticipantsController)
router.get("/participant/schedule/pending/:id", participantController.getPendingSchedulingByParticipantsController)
router.put("/participant/schedule/response/:id", participantController.putPendingSchedulingController)

// Rota de Envio de E-mail
router.post("/sending/email", emailSender.sendingEmails)


module.exports = router

