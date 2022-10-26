import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import swal from 'sweetalert';

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

function validate(toSend){
    const errors = {};
    if(!toSend.from_name){
        errors.from_name = "Se requiere nombre";
    }
    if(!toSend.from_lastname){
        errors.from_lastname = "Se requiere apellido";
    }
    if(!toSend.reply_to){
        errors.reply_to = "Se requiere email";
    }else if(!regexEmail.test(toSend.reply_to)){
        errors.reply_to = "Email no válido";
    }
    if(!toSend.message){
        errors.message = "Se requiere mensaje";
    }else if(toSend.message.length < 10){
        errors.message = "El mensaje debe tener al menos 10 caracteres";
    }
    return errors;
}

const ContactEnglish = () =>  {

    const [errors, setError] = useState();

    const [toSend, setToSend] = useState({
        from_name: '',
        from_lastname: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
    e.preventDefault();
    const aux = validate(toSend);
    setError(aux);
    console.log(aux);
    if(Object.keys(aux).length === 0){
    send(
        'service_yh5la7v',
        'template_7jf09ek',
        toSend,
        'qXsW4vTKSfgQhuQHZ'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            swal("Mensaje enviado correctamente", {
                icon: "success",
                buttons: false,
                timer: 1500,
              })
            setToSend({
            from_name: '',
            from_lastname: '',
            message: '',
            reply_to: '',
        })
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    }else {
        swal("Error al enviar mensaje, revisa los campos", {
            icon: "error",
            buttons: false,
            timer: 1500,
          })
    }
    };

    const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    
return(
    <div id="contact" className="flex justify-center">
        <div className="w-60 sm:w-96 md:w-max lg:w-max xl:w-max">
            <h1 className="text-3xl font-bold mb-6 text-yellow-400">Contact</h1>
        <form onSubmit={onSubmit} className="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label class="block uppercase tracking-wide text-yellow-200 text-xs font-bold mb-2" for="grid-first-name">
                    Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" name='from_name' value={toSend.from_name} onChange={handleChange}/>
                {errors && <p className="text-red-500 text-sm italic">{errors.from_name}</p>}
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-yellow-200 text-xs font-bold mb-2" for="grid-last-name">
                    Lastname
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Lastname" name='from_lastname' value={toSend.from_lastname} onChange={handleChange}/>
                {errors && <p className="text-red-500 text-sm italic">{errors.from_lastname}</p>}
                </div>
            </div>
            <div class="flex flex-wrap -mx-3">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-yellow-200 text-xs font-bold mb-2" for="grid-password">
                    E-mail
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Email" name='reply_to' value={toSend.reply_to} onChange={handleChange}/>
                {errors && <p className="text-red-500 text-sm italic">{errors.reply_to}</p>}
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-yellow-200 text-xs font-bold mb-2" for="grid-password">
                    Menssage
                </label>
                <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" type="textarea" name='message' placeholder='Message' value={toSend.message} onChange={handleChange}></textarea>
                {errors && <p className="text-red-500 text-sm italic">{errors.message}</p>}
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3">
                <button disabled={!toSend.from_name || !toSend.from_lastname || !toSend.reply_to || !toSend.message} class=" py-2 pr-4 pl-3 bg-transparent border border-yellow-200 text-yellow-200 rounded enabled:hover:text-current md:enabled:hover:bg-yellow-400 md:enabled:hover:text-current md:py-1 pr-4 pl-4" type="submit" title={!toSend.from_name || !toSend.from_lastname || !toSend.reply_to || !toSend.message ? "Fill all the fields to send the message" : "Send message"}>
                    Send
                </button>
                </div>
                <div class="md:w-2/3"></div>
            </div>
        </form>
            <div className="mt-10 xl:hidden lg:hidden md:hidden sm:mt-10">
                <ul className="flex flex-wrap justify-center space-x-4 items-center">
                    <li>
                        <a href="https://github.com/TonyP97" target="_blank" className="block py-2 pr-4 pl-3 text-yellow-200 rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0">
                            <svg width="26px" height="26px" viewBox="0 0 64 64" id="i-github" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-yellow-200 hover:fill-yellow-400" stroke-width="0" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/agust%C3%ADn-pincheira-0549031b6/" target="_blank" className="block py-2 pr-4 pl-3 text-yellow-200 rounded hover:fill-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path className="fill-yellow-200 hover:fill-yellow-400" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <div className="block py-2 pr-4 pl-3 text-yellow-200 cursor-default rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0">agustinpincheira97@gmail.com</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)
}

export default ContactEnglish;