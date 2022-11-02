import React from "react";
import PFRestaunrt from "../projectimages/PFRestaurant.png";
import PICountries from "../projectimages/PICountriesHome.png";
import ExampleFreelancer from "../projectimages/ExampleFreelancerHome.png";
import ExampleFrontend from "../projectimages/ExampleFrontendStoreHome.png";
import Blogcafe from "../projectimages/Blogcafe.png";
import Festivalmusica from "../projectimages/Festivalmusica.png";

const ProjectsEnglish = () =>  {
    
return(
    <div id="projects">
        <div className="flex flex-col items-center">
            <h1 className="text-3xl text-yellow-400 text-center font-bold mb-5">Projects</h1>
            <div className="gap-x-6 gap-y-3 justify-items-center xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1">
                <div className="mb-3 rounded-lg border border-yellow-200 max-w-sm">
                    <div className="flex flex-col items-center m-3 space-y-2">
                        <h2 className="text-xl text-yellow-300">PF Restaurante - Group project</h2>
                        <img src={PFRestaunrt} alt="Not found" className="max-w-full max-h-56"/>
                        <p className="text-yellow-300 max-w-xs text-justify">
                            It is a web app for a restaurant, it can be used as a guest, user or administrator. You can register, view the menus and meals, leave your assessment and comment, make and pay reservations. The administrator can manage the menus and meals of each menu, being able to edit them, he can also see/delete products, tables, reservations and users
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
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Go to the page"><p className="text-yellow-200 group-hover:text-current">Deploy</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                            <a href="https://github.com/TonyP97/PF" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="View the code"><p className="text-yellow-200 group-hover:text-current">Code</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mb-3 rounded-lg border border-yellow-200 max-w-sm">
                    <div className="flex flex-col items-center m-3 space-y-2">
                        <h2 className="text-xl text-yellow-300">PI Countries</h2>
                        <img src={PICountries} alt="Not found" className="max-w-full max-h-56"/>
                        <p className="text-yellow-300 max-w-xs text-justify">
                            It is a web app that consumes data from the "REST Countries" API and adds new features.
                            You can search for countries and access their details, sort countries ascending and descending by alphabetical and population order. Tourist activities can be created that and assigned to one or more countries and can also be filtered by them.
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
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Go to the page"><p className="text-yellow-200 group-hover:text-current">Deploy</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                            <a href="https://github.com/TonyP97/pi-individual-countries" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="See the code"><p className="text-yellow-200 group-hover:text-current">Code</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mb-3 rounded-lg border border-yellow-200 max-w-sm">
                    <div className="flex flex-col items-center m-3 space-y-2">
                        <h2 className="text-xl text-yellow-300">Coffee Blog</h2>
                        <img src={Blogcafe} alt="Not found" className="max-w-full max-h-56"/>
                        <p className="text-yellow-300 max-w-xs text-justify">
                        It is a model of a Coffee Blog, it has a home where a preview of the entries is shown (with access to them) and of the courses (being able to enter a more detailed view). It includes sections of "About us", "Courses" and "Contact". It is fully responsive.
                        </p>
                        <div className="flex flex-wrap space-x-2">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain-wordmark.svg" title="HTML" alt="HTML" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" title="Javascript" alt="Javascript" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain-wordmark.svg" title="CSS" alt="CSS" width="24px" height="24px"/>
                        </div>
                        <div className="flex space-x-2">
                            <a href="https://blogdecafe-tonyp97.vercel.app/" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Go to the page"><p className="text-yellow-200 group-hover:text-current">Deploy</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                            <a href="https://github.com/TonyP97/Blog-de-cafe" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="See the code"><p className="text-yellow-200 group-hover:text-current">Código</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mb-3 rounded-lg border border-yellow-200 max-w-sm">
                    <div className="flex flex-col items-center m-3 space-y-2">
                        <h2 className="text-xl text-yellow-300">Music Festival</h2>
                        <img src={Festivalmusica} alt="Not found" className="max-w-full max-h-56"/>
                        <p className="text-yellow-300 max-w-xs text-justify">
                        It is a model of what a music festival page could be, with information about it, a background video, images, "Line Up", "Gallery" and "Tickets" sections. It is fully responsive.
                        </p>
                        <div className="flex flex-wrap space-x-2">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain-wordmark.svg" title="HTML" alt="HTML" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" title="Javascript" alt="Javascript" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/gulp/gulp-plain.svg" title="Gulp" alt="Gulp" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sass/sass-original.svg" title="SASS" alt="SASS" width="24px" height="24px"/>
                        </div>
                        <div className="flex space-x-2">
                            <a href="https://festival-de-musica-tonyp97.vercel.app/" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Go to the page"><p className="text-yellow-200 group-hover:text-current">Deploy</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                            <a href="https://github.com/TonyP97/Festival-de-musica" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="See the code"><p className="text-yellow-200 group-hover:text-current">Código</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mb-3 rounded-lg border border-yellow-200 max-w-sm">
                    <div className="flex flex-col items-center m-3 space-y-2">
                        <h2 className="text-xl text-yellow-300">Freelancer Example Page</h2>
                        <img src={ExampleFreelancer} alt="Not found" className="max-w-full max-h-56"/>
                        <p className="text-yellow-300 max-w-xs text-justify">
                            It is a simple web page. It has no functionalities, it is just a model of what the home page of a freelancer could be.
                        </p>
                        <div className="flex flex-wrap space-x-2">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain-wordmark.svg" title="HTML" alt="HTML" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain-wordmark.svg" title="CSS" alt="CSS" width="24px" height="24px"/>
                        </div>
                        <div className="flex space-x-2">
                            <a href="https://freelancermodelpage.netlify.app/" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Go to the page"><p className="text-yellow-200 group-hover:text-current">Deploy</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                            <a href="https://github.com/TonyP97/Example_FreelancerPage" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="See the code"><p className="text-yellow-200 group-hover:text-current">Code</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mb-3 rounded-lg border border-yellow-200 max-w-sm">
                    <div className="flex flex-col items-center m-3 space-y-2">
                        <h2 className="text-xl text-yellow-300">Example Frontend Store</h2>
                        <img src={ExampleFrontend} alt="Not found" className="max-w-full max-h-56"/>
                        <p className="text-yellow-300 max-w-xs text-justify">
                            It is a simple web page. It has no functionalities, it is only a model of what could be an E-commerce of clothing.
                        </p>
                        <div className="flex flex-wrap space-x-2">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain-wordmark.svg" title="HTML" alt="HTML" width="24px" height="24px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain-wordmark.svg" title="CSS" alt="CSS" width="24px" height="24px"/>
                        </div>
                        <div className="flex space-x-2">
                            <a href="https://frontend-store-page.netlify.app/" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="Go to the page"><p className="text-yellow-200 group-hover:text-current">Deploy</p>
                                    <svg className="stroke-yellow-200 group-hover:stroke-current" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </a>
                            <a href="https://github.com/TonyP97/FrontEndStore-HTMLyCSS-" target="_blank" rel="noreferrer">
                                <button className="flex items-center border pr-1.5 pl-1.5 bg-transparent border border-yellow-200 rounded-full hover:bg-yellow-300 space-x-2 group" title="See the code"><p className="text-yellow-200 group-hover:text-current">Code</p>
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

export default ProjectsEnglish;