import React from "react";
import "./App.css";
import Home from "../Components/Template/HomePrincipal/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePlanets from "../Components/Template/Destination/Planets/HomePlanets";




const App = () => {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="HomePlanets" element={<HomePlanets />}/>
                </Routes>
            
            </BrowserRouter>
        </div>
    );
}

export default App;