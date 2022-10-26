import React from "react";

const ExperienceEnglish = () =>  {
    
return(
    <div id="experience">
        <div>
            <h1 className="text-3xl text-yellow-400 font-bold mb-3">Experience</h1>
            <div>
                <h2 className="text-2xl text-blue-400 font-bold">● [Academic] Full Stack Developer - PF Restaurante</h2>
                <p className="ml-6 text-sm text-blue-200">Sep 2022 - Oct 2022</p>
                <p className="ml-10 text-xl text-blue-300">
                Group project developed within Henry Bootcamp. <br />
                We develop a web application using React for the Front End and Redux for state management. All components were developed with Tailwind CSS <br />
                The web application consumes its own data through a Back End developed in Node.JS using Express. Being able to add new data. <br />
                I highlighted the components of the profile and its edition, registration and the payment gateway using Stripe.
                </p>
            </div>
            <div>
                <h2 className="text-2xl text-blue-400 font-bold">● [Academic] Full Stack Developer - PI Countries</h2>
                <p className="ml-6 text-sm text-blue-200">Aug. 2022</p>
                <p className="ml-10 text-xl text-blue-300">
                Individual Project developed within Henry Bootcamp. <br />
                I developed a SPA (Single Page Application) using React for the Front End and Redux as state management. All components were developed with CSS without the use of external libraries. <br />
                The SPA consumes data from "REST Countries" API through a Back End developed in Node.JS using Express, adding new features to the original API. <br />
                The SPA can sort ascending and descending the countries by alphabetical and population order. Tourist activities can be created that and assigned to one or more countries and can also be filtered by them.
                </p>
            </div>
        </div>
    </div>
)
}

export default ExperienceEnglish;