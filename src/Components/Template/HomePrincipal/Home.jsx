import React  from "react";
import "./style.css";
import {FundoHome, ContainerHome, ColunaContainerHomeLeft, ColunaContainerHomeRight, SubTitle, Title, Descrition, ExploreBnt} from "./styleHome";
import Menu from "../Menu/Menu";

const Home = () => {
    return (
        <FundoHome className="fundohome">
            <Menu  />
            <ContainerHome>

                <ColunaContainerHomeLeft>
                    <SubTitle>SO, YOU WANT TO TRAVEL TO</SubTitle>
                    <Title>SPACE</Title>
                    <Descrition>
                        Let’s face it; if you want to go to space, you might as well genuinely go
                        to outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!
                    </Descrition>
                </ColunaContainerHomeLeft>

                <ColunaContainerHomeRight>
                    <ExploreBnt href="/">EXPLORE</ExploreBnt>
                </ColunaContainerHomeRight>

            </ContainerHome>
        </FundoHome>
    );
}

export default Home;