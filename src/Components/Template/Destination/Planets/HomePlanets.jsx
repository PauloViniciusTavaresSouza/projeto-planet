import React from "react";
import "./style.css"
import {FundoPlanet, DivTituloPlanets, TituloPlanetas,
NavLinkMoon, PaginationNav, UlNavLink, LiNavLink} from "./styledPlanets"
import { Link } from "react-router-dom";
import Menu from "../../Menu/Menu";
import Moon from "../Planets/Moon/Moon"



function activeClass(clicado) { 
    const clicaveis = document.querySelectorAll(".Inativo");
    clicaveis.forEach(el => el.classList.toggle("ativo", el === clicado))
}


const HomePlanets = () => {
    return (

        <FundoPlanet className="fundoPlanets">
            <Menu  />
        <DivTituloPlanets>
            <TituloPlanetas>Pick your destination</TituloPlanetas>
            <NavLinkMoon>
                <UlNavLink>
                    <LiNavLink className="ativo" onclick="activeClass(this)"> <PaginationNav>MOON</PaginationNav> </LiNavLink>
                    <LiNavLink className="ativo" onclick="activeClass(this)"> <PaginationNav>MARS</PaginationNav> </LiNavLink>
                    <LiNavLink className="Inativo" onclick="activeClass(this)"> <PaginationNav>EUROPA</PaginationNav> </LiNavLink>
                    <LiNavLink className="Inativo" onclick="activeClass(this)"> <PaginationNav>TITAN</PaginationNav> </LiNavLink>
                </UlNavLink>
            </NavLinkMoon>
        </DivTituloPlanets>


        </FundoPlanet>

    );
}



export default HomePlanets;


