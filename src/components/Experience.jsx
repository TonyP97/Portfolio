import React from "react";

const Experience = () =>  {
    
return(
    <div id="experience">
        <div>
            <h1 className="text-3xl text-yellow-400 text-center font-bold mb-3">Experiencia</h1>
            <div>
                <h2 className="text-2xl text-blue-400 font-bold">● [Académico] Full Stack Developer - PF Restaurante</h2>
                <p className="ml-6 text-sm text-blue-200">Sep 2022 - Oct 2022</p>
                <p className="ml-10 text-xl text-blue-300 text-justify">
                Proyecto Grupal desarrollado dentro de Henry Bootcamp. <br />
                Desarrollamos una web app utilizando React para el Front End y Redux como state management. Todos los componentes fueron desarrollados con CSS utilizando la librería Tailwind. <br />
                La web app consume sus propios datos a través de un Back End desarrollado en Node.JS utilizando Express. Pudiéndose agregar nuevos datos. <br />
                Me destaqué en los componentes del perfil y edición del mismo, registro y en la pasarela de pagos utilizando Stripe.
                </p>
            </div>
            <div>
                <h2 className="text-2xl text-blue-400 font-bold">● [Académico] Full Stack Developer - PI Countries</h2>
                <p className="ml-6 text-sm text-blue-200">Ago. 2022</p>
                <p className="ml-10 text-xl text-blue-300 text-justify">
                Proyecto Individual desarrollado dentro de Henry Bootcamp. <br />
                Desarrollé una SPA (Single Page Application) utilizando React para el Front End y Redux como state management. Todos los componentes fueron desarrollados con CSS sin uso de librerías externas. <br />
                La SPA consume datos de la API "REST Countries" a través de un Back End desarrollado en Node.JS utilizando Express, agregando nuevas funcionalidades a la API original. <br />
                La SPA puede ordenar ascendente y descendentemente los países por orden alfabético y poblacional. A su vez se pueden crear actividades turísticas que pueden ser asignadas a uno o varios países y también se pueden filtrar por las mismas.
                </p>
            </div>
        </div>
    </div>
)
}

export default Experience;