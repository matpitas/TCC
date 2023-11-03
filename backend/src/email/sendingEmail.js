const nodemailer = require('nodemailer')

const sendingEmails = (request, response) => {
    const { horarioInicio, horarioTermino, selectedFriends, nomeDoJogo, nomeSession, emailSession} = request.body

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      };
    
    const dataInicio = new Date(horarioInicio).toLocaleDateString('pt-BR', options)
    const dataTermino = new Date(horarioTermino).toLocaleDateString('pt-BR', options)
    

    const emails = selectedFriends.map(item => item.email).join(',');


    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "82f983cb69b5b8",
          pass: "b7a97c361a9e2a"
        }
    });

    const message = {
        from: `"${nomeSession}" <${emailSession}>`, // sender address
        to: '"'+emails+'"', // list of receivers
        subject: "Há um agendamento te esperando!! 🥰", // Subject line
        text: `Seu amigo ${nomeSession} te marcou em um agendamento e está esperando sua resposta \nUm agendamento para jogar ${nomeDoJogo} às ${dataInicio} até ${dataTermino} \nNão o deixe esperado e responda em nosso site!!`, // plain text body
        html: ` 
                <div style="display:flex;flex-direction:column;align-items:center;justify-content:center; width: 100%; background-color: #323232; color: #f6f6f6; height: 100vh;" >
                <img src="http://localhost:5173/src/assets/LogoText.png" style="width: 100%" />
                <div style="font-family: 'Segoe UI', sans-serif; font-size:1rem; padding:10px;text-align:center;">
                        Seu amigo <strong style="color: #E58D3B; text-align:center;">${nomeSession}</strong> te marcou em um agendamento e está esperando sua resposta <br />
                        <h3 style="color: #E58D3B;text-align:center;">Jogo</h3> <strong style="text-transform: capitalize;color: #9F92F1;text-align:center;">${nomeDoJogo}</strong> <br />
                        <h3 style="color: #E58D3B;text-align:center;">Horário</h3> <strong style="color: #9F92F1;text-align:center;">${dataInicio} até ${dataTermino}</strong> <br />
                        <h4 style="text-align:center;">Não o deixe esperado e responda em nosso site!!</h4>
                </div>
            </div>`, // html body
    }

    // transport.sendMail(message, (err) => {
    //     console.log(err)
    // });

    return response.status(200)
}

module.exports = {
    sendingEmails
}