import React from "react";
import {HashLink as Link, NavHashLink} from 'react-router-hash-link';
import About from "./About";
import AboutEnglish from "./AboutEnglish";
import Experience from "./Experience";
import ExperienceEnglish from "./ExperienceEnglish";
import Projects from "./Projects";
import ProjectsEnglish from "./ProjectsEnglish";
import Contact from "./Contact";
import ContactEnglish from "./ContactEnglish";
import Pdf from "../CV/CVAPspanish.pdf";
import PdfEnglish from "../CV/CVAPenglish.pdf";
import logo from "../logo/LogoAP2.png";

// #FEF08A
// #08081F
const Home = () =>  {

    const [charge, setCharge] = React.useState(false);
    const [language, setLanguage] = React.useState(false);
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const charging = () => {
        setTimeout(() => {
            setCharge(true);
        }, 1200);
    }

    const scrollWithOffsetAbout = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -150; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const scrollWithOffsetExperience = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const scrollWithOffsetContact = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const scrollWithOffsetProjects = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

return (
    <div>
        {charging()}
        {!charge ? 
        <div>
            <div className="flex justify-center mt-72 sm:mt-60 md:mt-60 lg:mt-60 xl:mt-60">
                <img src={logo} class="mx-2 h-40 sm:h-40 animate-[spin_1s]" alt="LogoAP"/>
            </div>
        </div> 
    :
    <div>
        { !language ?
        <div>
        {/* Navbar */}
        <nav class="bg-[#08081f] xl:bg-transparent xl:backdrop-blur-sm xl:border-b xl:border-yellow-200 xl:px-2 lg:bg-transparent lg:backdrop-blur-sm lg:border-b lg:border-yellow-200 lg:px-2 md:bg-transparent md:backdrop-blur-sm md:border-b md:border-yellow-200 md:px-2 sm:bg-transparent sm:backdrop-blur-sm sm:border-b sm:border-yellow-200 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <div class="">
                    <a href="/" class="">
                        <img src={logo} class="mx-2 h-10 sm:h-14 animate-[spin_1s]" alt="LogoAP" title="Agustín Pincheira"/>
                    </a>
                </div>
                <div className="flex items-center">
                    <div className="sm:hidden md:hidden lg:hidden xl:hidden">
                        <button disabled title="Español" className="bg-yellow-200 border-yellow-200 border rounded-tl-md rounded-bl-md border-r-0"><span className="text-[#08081f] px-0.5">ES</span></button>
                        <button title="English" onClick={() => setLanguage(!language)} className="bg-[#08081f] hover:bg-yellow-400 border-yellow-200 border rounded-tr-md rounded-br-md border-l-0"><span className="text-yellow-200 hover:text-[#08081f] px-0.5">EN</span></button>
                    </div>
                    <button type="button" onClick={() => setNavbarOpen(!navbarOpen)} class="inline-flex items-center p-2 mx-2 text-sm text-yellow-200 rounded-lg md:hidden hover:bg-[#08081f] focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class={"justify-between items-center w-full md:flex md:w-auto md:order-1" + (navbarOpen ? " flex" : " hidden")} id="navbar-sticky">
                    <ul class="flex items-center flex-row flex-wrap p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                        <NavHashLink to='#about' scroll={el => scrollWithOffsetAbout(el)}>
                            <a href="#" title="Sobre mi" onClick={() => setNavbarOpen(!navbarOpen)} class="block py-2 pr-4 pl-3 text-yellow-200 rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 md:animate-[spin_1s]">Sobre mi</a>
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink to='#experience' scroll={el => scrollWithOffsetExperience(el)}>
                            <a href="#" title="Experiencia" onClick={() => setNavbarOpen(!navbarOpen)} class="block py-2 pr-4 pl-3 text-yellow-200 rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 md:animate-[spin_1s]">Experiencia</a>
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink to='#projects' scroll={el => scrollWithOffsetProjects(el)}>
                            <a href="#" title="Proyectos" onClick={() => setNavbarOpen(!navbarOpen)} class="block py-2 pr-4 pl-3 text-yellow-200 rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 md:animate-[spin_1s]">Proyectos</a>
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink to='#contact' scroll={el => scrollWithOffsetContact(el)}>
                            <a href="#" title="Contacto" onClick={() => setNavbarOpen(!navbarOpen)} class="block py-2 pr-4 pl-3 text-yellow-200 rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 md:animate-[spin_1s]">Contacto</a>
                        </NavHashLink>
                    </li>
                    <li>
                        <a href={Pdf} target="_blank" title="Curriculum vitae" class="block py-2 pr-4 pl-3 bg-transparent border border-yellow-200 text-yellow-200 rounded hover:text-current md:hover:bg-yellow-400 md:hover:text-current md:py-1 pr-4 pl-4 md:animate-[spin_1s]">CV</a>
                    </li>
                    <li>
                        <div className="hidden sm:block md:block lg:block xl:block md:animate-[spin_1s]">
                            <button disabled title="Español" className="bg-yellow-200 border-yellow-200 border rounded-tl-md rounded-bl-md border-r-0"><span className="text-[#08081f] px-0.5">ES</span></button>
                            <button title="English" onClick={() => setLanguage(!language)} className="bg-[#08081f] hover:bg-yellow-400 border-yellow-200 border rounded-tr-md rounded-br-md border-l-0"><span className="text-yellow-200 hover:text-[#08081f] px-0.5">EN</span></button>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* SidebarLeft */}
        <aside className="hidden h-screen bg-transparent xl:inline-flex xl:items-end xl:w-44 xl:fixed xl:left-0 xl:top-0 lg:inline-flex lg:items-end lg:w-44 lg:fixed lg:left-0 lg:top-0 md:inline-flex md:items-end md:w-44 md:fixed md:left-0 md:top-0 sm:hidden">
            <div className="">
                <ul className="flex flex-col items-center">
                    <li>
                        <a href="https://github.com/TonyP97" target="_blank" title="Github" className="block py-2 pr-4 pl-3 text-yellow-200 rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0">
                            <svg width="26px" height="26px" viewBox="0 0 64 64" id="i-github" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-yellow-200 hover:fill-yellow-400" stroke-width="0" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/agust%C3%ADn-pincheira-0549031b6/" target="_blank" title="Linkedin" className="block py-2 pr-4 pl-3 mt-10 text-yellow-200 rounded hover:fill-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path className="fill-yellow-200 hover:fill-yellow-400" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <div className="mt-28 text-yellow-200 -rotate-90 cursor-default rounded flex md:p-0">_____________________________</div>
                    </li>
                </ul>
            </div>
        </aside>
        {/* SidebarRight */}
        <aside className="hidden h-screen bg-transparent xl:inline-flex xl:items-end xl:w-44 xl:fixed xl:right-0 xl:top-0 lg:inline-flex lg:items-end lg:w-44 lg:fixed lg:right-0 lg:top-0 md:inline-flex md:items-end md:w-44 md:fixed md:right-0 md:top-0 sm:inline-flex sm:hidden">
            <div className="">
                <ul className="flex flex-col items-center">
                    <li>
                        <button onClick={() => window.location = 'mailto:agustinpincheira97@gmail.com'} className="block py-2 pr-4 pl-3 mt-48 text-yellow-200 rotate-90 rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0" title="Enviar email">agustinpincheira97@gmail.com</button>
                    </li>
                    <li>
                        <div className="mt-52 text-yellow-200 rotate-90 cursor-default rounded flex md:p-0">_____________________________</div>
                    </li>
                </ul>             
            </div>
        </aside>
        {/* Content */}
        <main>
            <div className="my-24 mx-4 xl:mx-72 xl:max-w-full lg:mx-48 lg:max-w-6xl md:mx-44 md:max-w-6xl sm:mx-20 sm:max-w-6xl">
                <div className="xl:mt-40 xl:mb-96 lg:mt-40 lg:mb-96 md:mt-40 md:mb-96 sm:mt-40 sm:mb-96">
                    <div className="">
                        <h1 className="text-6xl text-blue-500">Hola, soy</h1>
                        <h1 className="text-7xl text-blue-500 my-4 animate-[pulse_0.5s_2]">Agustín Pincheira</h1>
                        <h1 className="text-5xl text-blue-700 mb-2">Full Stack Web Developer</h1>
                        <div className="flex flex-wrap justify-evenly mt-20">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" title="Javascript" alt="Javascript" width="60px" height="60px" className="animate-[spin_1s]"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" title="React" alt="React" width="60px" height="60px" className="animate-[spin_1s]"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg" title="Redux" alt="Redux" width="60px" height="60px" className="animate-[spin_1s]"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" title="Node.js" alt="Node.js" width="60px" height="60px" className="animate-[spin_1s]"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg" title="Express" alt="Express" width="60px" height="60px" className="animate-[spin_1s] bg-gray-400"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original.svg" title="PostgreSQL" alt="PostgreSQL" width="60px" height="60px" className="animate-[spin_1s]"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sequelize/sequelize-original.svg" title="Sequelize" alt="Sequelize" width="60px" height="60px" className="animate-[spin_1s]"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain-wordmark.svg" title="HTML" alt="HTML" width="60px" height="60px" className="animate-[spin_1s]"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain-wordmark.svg" title="CSS" alt="CSS" width="60px" height="60px" className="animate-[spin_1s]"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/gulp/gulp-plain.svg" title="Gulp" alt="Gulp" width="60px" height="60px" className="animate-[spin_1s]"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg" title="Tailwind" alt="Tailwind" width="60px" height="60px" className="animate-[spin_1s]"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sass/sass-original.svg" title="SASS" alt="SASS" width="60px" height="60px" className="animate-[spin_1s]"/>
                        </div>
                    </div>
                </div>
                <div className="my-24 xl:mt-80 xl:mb-96 lg:mt-80 lg:mb-96 md:mt-80 md:mb-96 sm:mt-80 sm:mb-96">
                    <About/>
                </div>
                <div className="my-24 xl:mt-80 xl:mb-96 lg:mt-80 lg:mb-96 md:mt-80 md:mb-96 sm:mt-80 sm:mb-96">
                    <Experience/>
                </div>
                <div className="my-24 xl:mt-80 xl:mb-96 lg:mt-80 lg:mb-96 md:mt-80 md:mb-96 sm:mt-80 sm:mb-96">
                    <Projects/>
                </div>
                <div className="my-24 xl:mt-80 xl:mb-40 lg:mt-80 lg:mb-40 md:mt-80 md:mb-40 sm:mt-80 sm:mb-40">
                    <Contact/>
                </div>
            </div>
        </main>
        <footer className="text-yellow-200 text-sm flex justify-center">
            © 2022 Agustín Pincheira. Todos los derechos reservados.
        </footer>
    </div> 
    :
    // CAMBIA 
    // DE 
    // COMPONENTE
    // POR
    // EL
    // IDIOMA
    <div>
    {/* INGLES */}
        {/* Navbar */}
        <nav class="bg-[#08081f] xl:bg-transparent xl:backdrop-blur-sm xl:border-b xl:border-yellow-200 xl:px-2 lg:bg-transparent lg:backdrop-blur-sm lg:border-b lg:border-yellow-200 lg:px-2 md:bg-transparent md:backdrop-blur-sm md:border-b md:border-yellow-200 md:px-2 sm:bg-transparent sm:backdrop-blur-sm sm:border-b sm:border-yellow-200 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <div class="">
                    <a href="/" class="">
                        <img src={logo} class="mx-2 h-10 sm:h-14 animate-[spin_1s]" alt="LogoAP" title="Agustín Pincheira"/>
                    </a>
                </div>
                <div className="flex items-center">
                    <div className="sm:hidden md:hidden lg:hidden xl:hidden">
                        <button title="Español" onClick={() => setLanguage(!language)}className="bg-[#08081f] hover:bg-yellow-400 border rounded-tl-md rounded-bl-md border-r-0"><span className="text-yellow-200 hover:text-[#08081f] px-0.5">ES</span></button>
                        <button disabled title="English"  className="bg-yellow-200 border-yellow-200 border-yellow-200 border rounded-tr-md rounded-br-md border-l-0"><span className="text-[#08081f] px-0.5">EN</span></button>
                    </div>
                    <button type="button" onClick={() => setNavbarOpen(!navbarOpen)} class="inline-flex items-center p-2 mx-2 text-sm text-yellow-200 rounded-lg md:hidden hover:bg-[#08081f] focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class={"justify-between items-center w-full md:flex md:w-auto md:order-1" + (navbarOpen ? " flex" : " hidden")} id="navbar-sticky">
                    <ul class="flex items-center flex-row flex-wrap p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                        <NavHashLink to='#about' scroll={el => scrollWithOffsetAbout(el)}>
                            <a href="#" title="About me" onClick={() => setNavbarOpen(!navbarOpen)} class="block py-2 pr-4 pl-3 text-yellow-200 rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 md:animate-[spin_1s]">About me</a>
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink to='#experience' scroll={el => scrollWithOffsetExperience(el)}>
                            <a href="#" title="Experience" onClick={() => setNavbarOpen(!navbarOpen)} class="block py-2 pr-4 pl-3 text-yellow-200 rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 md:animate-[spin_1s]">Experience</a>
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink to='#projects' scroll={el => scrollWithOffsetProjects(el)}>
                            <a href="#" title="Projects" onClick={() => setNavbarOpen(!navbarOpen)} class="block py-2 pr-4 pl-3 text-yellow-200 rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 md:animate-[spin_1s]">Projects</a>
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink to='#contact' scroll={el => scrollWithOffsetContact(el)}>
                            <a href="#" title="Contact" onClick={() => setNavbarOpen(!navbarOpen)} class="block py-2 pr-4 pl-3 text-yellow-200 rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 md:animate-[spin_1s]">Contact</a>
                        </NavHashLink>
                    </li>
                    <li>
                        <a href={PdfEnglish} target="_blank" title="Resume" class="block py-2 pr-4 pl-3 bg-transparent border border-yellow-200 text-yellow-200 rounded hover:text-current md:hover:bg-yellow-400 md:hover:text-current md:py-1 pr-4 pl-4 md:animate-[spin_1s]">Resume</a>
                    </li>
                    <li>
                        <div className="hidden sm:block md:block lg:block xl:block md:animate-[spin_1s]">
                            <button title="Español" onClick={() => setLanguage(!language)}className="bg-[#08081f] hover:bg-yellow-400 border rounded-tl-md rounded-bl-md border-r-0"><span className="text-yellow-200 hover:text-[#08081f] px-0.5">ES</span></button>
                            <button disabled title="English"  className="bg-yellow-200 border-yellow-200 border-yellow-200 border rounded-tr-md rounded-br-md border-l-0"><span className="text-[#08081f] px-0.5">EN</span></button>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* SidebarLeft */}
        <aside className="hidden h-screen bg-transparent xl:inline-flex xl:items-end xl:w-44 xl:fixed xl:left-0 xl:top-0 lg:inline-flex lg:items-end lg:w-44 lg:fixed lg:left-0 lg:top-0 md:inline-flex md:items-end md:w-44 md:fixed md:left-0 md:top-0 sm:hidden">
            <div className="">
                <ul className="flex flex-col items-center">
                    <li>
                        <a href="https://github.com/TonyP97" target="_blank" title="Github" className="block py-2 pr-4 pl-3 text-yellow-200 rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0">
                            <svg width="26px" height="26px" viewBox="0 0 64 64" id="i-github" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-yellow-200 hover:fill-yellow-400" stroke-width="0" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/agust%C3%ADn-pincheira-0549031b6/" target="_blank" title="Linkedin" className="block py-2 pr-4 pl-3 mt-10 text-yellow-200 rounded hover:fill-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path className="fill-yellow-200 hover:fill-yellow-400" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <div className="mt-28 text-yellow-200 -rotate-90 cursor-default rounded flex md:p-0">_____________________________</div>
                    </li>
                </ul>
            </div>
        </aside>
        {/* SidebarRight */}
        <aside className="hidden h-screen bg-transparent xl:inline-flex xl:items-end xl:w-44 xl:fixed xl:right-0 xl:top-0 lg:inline-flex lg:items-end lg:w-44 lg:fixed lg:right-0 lg:top-0 md:inline-flex md:items-end md:w-44 md:fixed md:right-0 md:top-0 sm:inline-flex sm:hidden">
            <div className="">
                <ul className="flex flex-col items-center">
                    <li>
                        <button onClick={() => window.location = 'mailto:agustinpincheira97@gmail.com'} className="block py-2 pr-4 pl-3 mt-48 text-yellow-200 rotate-90 rounded hover:text-yellow-400 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0" title="Send email">agustinpincheira97@gmail.com</button>
                    </li>
                    <li>
                        <div className="mt-52 text-yellow-200 rotate-90 cursor-default rounded flex md:p-0">_____________________________</div>
                    </li>
                </ul>             
            </div>
        </aside>
        {/* Content */}
        <main>
            <div className="my-24 mx-4 xl:mx-72 xl:max-w-full lg:mx-48 lg:max-w-6xl md:mx-44 md:max-w-6xl sm:mx-20 sm:max-w-6xl">
                <div className="xl:mt-40 xl:mb-96 lg:mt-40 lg:mb-96 md:mt-40 md:mb-96 sm:mt-40 sm:mb-96">
                    <div className="">
                        <h1 className="text-6xl text-blue-500">Hi, I'm</h1>
                        <h1 className="text-7xl text-blue-500 my-4 animate-[pulse_0.5s_2]">Agustín Pincheira</h1>
                        <h1 className="text-5xl text-blue-700 mb-2">Full Stack Web Developer</h1>
                        <div className="flex flex-wrap justify-evenly mt-20">
                            <img className="animate-[spin_1s]" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" title="Javascript" alt="Javascript" width="60px" height="60px"/>
                            <img className="animate-[spin_1s]" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" title="React" alt="React" width="60px" height="60px"/>
                            <img className="animate-[spin_1s]" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg" title="Redux" alt="Redux" width="60px" height="60px"/>
                            <img className="animate-[spin_1s]" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" title="Node.js" alt="Node.js" width="60px" height="60px"/>
                            <img className="bg-gray-400 animate-[spin_1s]" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg" title="Express" alt="Express" width="60px" height="60px"/>
                            <img className="animate-[spin_1s]" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original.svg" title="PostgreSQL" alt="PostgreSQL" width="60px" height="60px"/>
                            <img className="animate-[spin_1s]" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sequelize/sequelize-original.svg" title="Sequelize" alt="Sequelize" width="60px" height="60px"/>
                            <img className="animate-[spin_1s]" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain-wordmark.svg" title="HTML" alt="HTML" width="60px" height="60px"/>
                            <img className="animate-[spin_1s]" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain-wordmark.svg" title="CSS" alt="CSS" width="60px" height="60px"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/gulp/gulp-plain.svg" title="Gulp" alt="Gulp" width="60px" height="60px" className="animate-[spin_1s]"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg" title="Tailwind" alt="Tailwind" width="60px" height="60px" className="animate-[spin_1s]"/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sass/sass-original.svg" title="SASS" alt="SASS" width="60px" height="60px" className="animate-[spin_1s]"/>
                        </div>
                    </div>
                </div>
                <div className="my-24 xl:mt-80 xl:mb-96 lg:mt-80 lg:mb-96 md:mt-80 md:mb-96 sm:mt-80 sm:mb-96">
                    <AboutEnglish/>
                </div>
                <div className="my-24 xl:mt-80 xl:mb-96 lg:mt-80 lg:mb-96 md:mt-80 md:mb-96 sm:mt-80 sm:mb-96">
                    <ExperienceEnglish/>
                </div>
                <div className="my-24 xl:mt-80 xl:mb-96 lg:mt-80 lg:mb-96 md:mt-80 md:mb-96 sm:mt-80 sm:mb-96">
                    <ProjectsEnglish/>
                </div>
                <div className="my-24 xl:mt-80 xl:mb-40 lg:mt-80 lg:mb-40 md:mt-80 md:mb-40 sm:mt-80 sm:mb-40">
                    <ContactEnglish/>
                </div>
            </div>
        </main>
        <footer className="text-yellow-200 text-sm flex justify-center">
            © 2022 Agustín Pincheira. All rights reserved.
        </footer>
        </div>
        }
    </div>
    }
    </div>
    
)

}
export default Home;