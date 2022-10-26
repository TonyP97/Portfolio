import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {

return (
    <div className="">
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl text-yellow-200 mb-2 mt-40">Bienvenidos</h1>
            <Link to = '/home'>
                <button className="font-bold bg-yellow-200 py-1 px-2 rounded hover:bg-yellow-300">Inicio</button>
            </Link>
        </div>
    </div>
)

}