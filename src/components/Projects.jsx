import React from "react";
import PFRestaunrt from "../projectimages/PFRestaurant.png";
import PICountries from "../projectimages/PICountriesHome.png";
import ExampleFreelancer from "../projectimages/ExampleFreelancerHome.png";
import ExampleFrontend from "../projectimages/ExampleFrontendStoreHome.png";

const Projects = () =>  {
    
return(
    <div id="projects">
        <div>
            <h1 className="text-3xl text-yellow-400 font-bold mb-3">Proyectos</h1>
            <div className="gap-y-4 justify-items-center xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1">
                <div className="rounded-lg border border-yellow-200 max-w-sm">
                    <div className="flex flex-col items-center m-3 space-y-2">
                        <h2 className="text-xl text-yellow-300">PF Restaurante - Grupal</h2>
                        <img src={PFRestaunrt} alt="Not found" className="max-w-full max-h-56"/>
                        <p className="text-yellow-300 max-w-xs text-justify">
                            Es una web app para un restaurante, puede ser utilizada como invitado, usuario o administrador. Se puede registrar un usuario, visualizar los menús y comidas, dejar su valoración y comentario, realizar y pagar reservas. El administrador puede administrar los menús y las comidas de cada menú, pudiendo editar las mismas, también puede ver/eliminar productos, mesas, reservas y usuarios.
                        </p>
                        <div className="flex flex-wrap space-x-2">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" title="Javascript" alt="Javascript" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" title="React" alt="React" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg" title="Redux" alt="Redux" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" title="Node.js" alt="Node.js" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg" title="Express" alt="Express" width="24px" height="24px" className="bg-gray-400"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original.svg" title="PostgreSQL" alt="PostgreSQL" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sequelize/sequelize-original.svg" title="Sequelize" alt="Sequelize" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg" title="Tailwind" alt="Tailwind" width="24px" height="24px"/>
                        </div>
                        <div className="flex space-x-2">
                            <a href="https://pf-kiliss.vercel.app/" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Visita la página"><p className="text-yellow-200 group-hover:text-current">Deploy</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                            <a href="https://github.com/TonyP97/PF" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Mira el código"><p className="text-yellow-200 group-hover:text-current">Código</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border border-yellow-200 max-w-sm">
                    <div className="flex flex-col items-center m-3 space-y-2">
                        <h2 className="text-xl text-yellow-300">PI Countries</h2>
                        <img src={PICountries} alt="Not found" className="max-w-full max-h-56"/>
                        <p className="text-yellow-300 max-w-xs text-justify">
                        Es una web app que consume datos de la API "REST Countries" y agrega nuevas funcionalidades.
                        En ella se puede buscar países y acceder a los detalles de los mismos, ordenar ascendente y descendentemente los países por orden alfabético y poblacional. A su vez se pueden crear actividades turísticas que pueden ser asignadas a uno o varios países y también se pueden filtrar por las mismas.
                        </p>
                        <div className="flex flex-wrap space-x-2">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" title="Javascript" alt="Javascript" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" title="React" alt="React" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg" title="Redux" alt="Redux" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" title="Node.js" alt="Node.js" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg" title="Express" alt="Express" width="24px" height="24px" className="bg-gray-400"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original.svg" title="PostgreSQL" alt="PostgreSQL" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sequelize/sequelize-original.svg" title="Sequelize" alt="Sequelize" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain-wordmark.svg" title="CSS" alt="CSS" width="24px" height="24px"/>
                        </div>
                        <div className="flex space-x-2">
                            <a href="https://pi-individual-countries.vercel.app/" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Visita la página"><p className="text-yellow-200 group-hover:text-current">Deploy</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                            <a href="https://github.com/TonyP97/pi-individual-countries" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Mira el código"><p className="text-yellow-200 group-hover:text-current">Código</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border border-yellow-200 max-w-sm">
                    <div className="flex flex-col items-center m-3 space-y-2">
                        <h2 className="text-xl text-yellow-300">Freelancer Example Page</h2>
                        <img src={ExampleFreelancer} alt="Not found" className="max-w-full max-h-56"/>
                        <p className="text-yellow-300 max-w-xs text-justify">
                        Es una página web sencilla. No tiene funcionalidades solo es un modelo de lo que podría ser el home de la página de un freelancer.
                        </p>
                        <div className="flex flex-wrap space-x-2">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain-wordmark.svg" title="HTML" alt="HTML" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain-wordmark.svg" title="CSS" alt="CSS" width="24px" height="24px"/>
                        </div>
                        <div className="flex space-x-2">
                            <a href="https://freelancermodelpage.netlify.app/" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Visita la página"><p className="text-yellow-200 group-hover:text-current">Deploy</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                            <a href="https://github.com/TonyP97/Example_FreelancerPage" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Mira el código"><p className="text-yellow-200 group-hover:text-current">Código</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border border-yellow-200 max-w-sm">
                    <div className="flex flex-col items-center m-3 space-y-2">
                        <h2 className="text-xl text-yellow-300">Example Frontend Store</h2>
                        <img src={ExampleFrontend} alt="Not found" className="max-w-full max-h-56"/>
                        <p className="text-yellow-300 max-w-xs text-justify">
                        Es una página web sencilla. No tiene funcionalidades solo es un modelo de lo que podría ser de un E-commerce de ropa.
                        </p>
                        <div className="flex flex-wrap space-x-2">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain-wordmark.svg" title="HTML" alt="HTML" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain-wordmark.svg" title="CSS" alt="CSS" width="24px" height="24px"/>
                        </div>
                        <div className="flex space-x-2">
                            <a href="https://frontend-store-page.netlify.app/" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Visita la página"><p className="text-yellow-200 group-hover:text-current">Deploy</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                            <a href="https://github.com/TonyP97/FrontEndStore-HTMLyCSS-" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Mira el código"><p className="text-yellow-200 group-hover:text-current">Código</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Projects;