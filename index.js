
import { validateEmail } from './validacao.js'


//seleção de elementos
let email = document.getElementById('email')
let form = document.querySelector('form')
let mensagem = document.getElementById('mensagem')
const serviceID = "service_1ca8c8s"
const templateID = "template_7vbzjja"




//eventos

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let teste = validateEmail(email.value, mensagem.value)
    if (teste === true) {
        var templateParams = {
            name: document.getElementById("name").value,
            from_name: document.getElementById("email").value,
            message: mensagem.value,
        };
        console.log(templateParams)

        emailjs
            .send(serviceID, templateID, templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

    } else {
        console.log("Não enviado!")

    }


})

