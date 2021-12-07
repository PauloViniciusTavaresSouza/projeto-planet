import React  from "react";
import "./Menu.css";
import {Pagination, ContainerMenu, NavLink, DivImg, Divisor} from "./styledMenu";
import {Link} from "react-router-dom";



const Menu = () => {
    return (

    <div>
      <ContainerMenu> 

      <DivImg>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
      </DivImg>
      <Divisor/>
      <NavLink className="navegation">
        <Link to="/"><Pagination> 00 HOME </Pagination> </Link>
        <Link to="HomePlanets"><Pagination>01 DESTINATION</Pagination></Link>
        <Link to="Crew"><Pagination>02 CREW</Pagination></Link>
        <Link to="Technology"><Pagination>03 TECHNOLOGY</Pagination></Link>
      </NavLink>

      </ContainerMenu>
    </div>
    );
}

export default Menu;