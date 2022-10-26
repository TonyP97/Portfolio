import React from "react";

const About = () =>  {
    
return(
    <div id="about">
        <div>
            <h1 className="text-3xl text-yellow-400 font-bold mb-3">Sobre mi</h1>
            <p className="text-2xl text-blue-300 text-justify">Soy Full Stack Developer, vivo en Argentina. <br />
            Estudié desarrollo web completo en el bootcamp de Henry <a className="text-blue-500 hover:text-blue-600 hover:underline" href="https://certificates.soyhenry.com/cert?id=b0538cb8-3c6c-47c1-b0d8-e77a0a4672c4" target="_blank">(ver certificado)</a>, allí realicé dos proyectos que pueden encontrar más abajo, y gané experiencia trabajando con la metodología ágil de SCRUM. <br />
            Soy una persona organizada, proactiva y con muchas ganas de seguir formandome. <br />
            Actualmente estoy buscando trabajo en donde pueda aportar mis conocimientos y a su vez seguir aprendiendo.
            </p>
        </div>
    </div>
)
}

export default About;