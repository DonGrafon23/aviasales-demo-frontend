import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

import logo from "./logo.svg";

import arrow from "./Arrow.svg";
import calendar from "./calendar.svg";
import shape from "./shape.svg";
import Rectangle from "./Rectangle-169.svg";

import kompass from "./kompass.svg";
import Planet from "./planet.svg";
import Palm from "./palm.svg";
import Basket from "./basket.svg";
import Theater from "./theater.svg";
import Glass from "./glass.svg";
import Buggy from "./buggy.svg";

function Main() {
  return (
    <div>
      <SearchPart>
        <div className="container">
          <MainScreen>
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
            <AviaSales>aviasales</AviaSales>
            <MainTitle>
              <HeaderTitle>Поиск дешевых авиабилетов</HeaderTitle>
              <HeaderTitleFrom>
                Лучший способ купить авиабилеты дешево
              </HeaderTitleFrom>
            </MainTitle>
          </MainScreen>

          <div className="row center-xl ">
            <SearchForm>
              <Cities>
                <FirstTown>
                  <Moscow placeholder="Moscow" />
                  <Arrow src={arrow} alt="Arrow" />
                </FirstTown>

                <SecondTown>
                  <SitiOfArrival placeholder="Город прибытия" />
                </SecondTown>
              </Cities>
              <Calendars>
                <CalendarThere>
                  <There placeholder="Туда" />
                  <CalendarImgThere src={calendar} alt="calendar" />
                </CalendarThere>

                <CalendarBack>
                  <Back placeholder="Обратно" />
                  <CalendarImgBack src={calendar} alt="calendar" />
                </CalendarBack>
              </Calendars>
              <TypeOfTickets>
                <TicketSelection placeholder="1 пассажир, эконом" />
                <Shape src={shape} alt="shape" />
              </TypeOfTickets>
            </SearchForm>
          </div>

          <div className="row center-xl">
            <div className="col-xl-3">
              <SearchButton>
                <FindTickets>Найти билеты</FindTickets>
                <PlaneImg src={Rectangle} alt="Rectangle" />
              </SearchButton>
            </div>
          </div>
        </div>
      </SearchPart>

      {/* _____________________ PART 2________________ */}

      <DirectionsOfFlights>
        <div className="container">
          <KompassLogoContainer>
            <KompassLogo src={kompass} alt="kompass" />
          </KompassLogoContainer>
          <DirectionsTitle>
            Популярные направления перелетов <br /> из города
            <TitleSityLink href="#"> Москва </TitleSityLink>
          </DirectionsTitle>
        </div>
      </DirectionsOfFlights>
    </div>
  );
}

// (CONSTS)_____________________________________PART 2

//(STYLED)__________________SEARCH PART

const SearchPart = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to bottom right,
    #00b0de 0%,
    #01aedc 3.7%,
    #02abdb 7.44%,
    #02abdb 11.16%,
    #02abdb 11.38%,
    #196ebd 100%
  );
`;

const MainScreen = styled.div``;

const Logo = styled.div`
  padding-top: 12px;
  float: left;
`;

const AviaSales = styled.p`
  padding: 14px 0px 0px 12px;
  display: block;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 20px;
  line-height: 25px;
  margin-top: 0px;
  color: #fff;
  float: left;
`;

const MainTitle = styled.div`
  padding: 213px 0px 0px 0px;
  text-align: center;
  color: #fff;
`;

const HeaderTitle = styled.h1`
  padding-bottom: 8px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 40px;
  line-height: 48px;
  margin: 0px;
`;

const HeaderTitleFrom = styled.p`
  font-size: 24px;
  line-height: 28px;
  margin: 0px 0px 40px 0px;
  font-family: Roboto;
  font-weight: Bold;
`;
//_________________________________________________________________SEARCH

const SearchForm = styled.div`
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
`;

const Cities = styled.div`
  width: 452px;
  display: flex;
`;

const FirstTown = styled.div`
  position: relative;
  margin: 0px 1px;
  display: flex;
  padding: 0px 0px 0px 0px;
  width: 50%;
`;
const Moscow = styled.input`
  padding: 18px 0px 18px 16px;
  border-color: transparent;
  border-radius: 2px 0px 0px 2px;
  width: 100%;
`;

const Arrow = styled.img`
  position: absolute;
  z-index: 2;
  top: 19px;
  right: 16px;
`;

const CalendarImgThere = styled.img`
  position: absolute;
  z-index: 2;
  top: 18px;
  right: 16px;
`;

const CalendarImgBack = styled.img`
  position: absolute;
  z-index: 3;
  top: 18px;
  right: 16px;
`;

const SecondTown = styled.div`
  padding: 0px 0px 0px 0px;
  width: 50%;
  display: flex;
  margin: 0px 1px;
  box-sizing: border-box;
`;
const SitiOfArrival = styled.input`
  font-family: Roboto;
  font-weight: Regular;
  color: #a0b0b9;
  border-color: transparent;
  padding: 18px 0px 18px 16px;
  width: 100%;
`;

const Calendars = styled.div`
  width: 364px;
  display: flex;
`;

const CalendarThere = styled.div`
  position: relative;
  z-index: 1;
  margin: 0px 1px;
  display: flex;
  width: 50%;
  box-sizing: border-box;
`;
const There = styled.input`
  color: #a0b0b9;
  padding: 18px 0px 18px 16px;
  border-color: transparent;
  width: 100%;
`;
const CalendarBack = styled.div`
  z-index: 1;
  position: relative;
  margin: 0px 1px;
  display: flex;
  width: 50%;
  box-sizing: border-box;
`;
const Back = styled.input`
  font-family: Roboto;
  font-weight: Regular;
  color: #a0b0b9;
  padding: 18px 0px 18px 16px;
  border-color: transparent;
  width: 100%;
`;
const TypeOfTickets = styled.div`
  position: relative;
  border: 0px solid #fff;
  display: flex;
  margin: 0px 1px;
  box-sizing: border-box;
`;

const TicketSelection = styled.input`
  border-radius: 0px 2px 2px 0px;
  font-family: Roboto;
  font-weight: Regular;
  padding: 18px 10px 18px 16px;
  border-color: transparent;
  width: 95%;
`;

const Shape = styled.img`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const SearchButton = styled.div`
  margin: 48px 0px 0px 0px;
  background-color: #ff9241;
  position: relative;
  z-index: 1;
  display: block;
  border-radius: 3px;
  border: 0px solid #fff;
  width: 100%;
  padding-right: 28px;
  right: 14px;
`;
const FindTickets = styled.p`
  margin: 0px;
  padding: 15px 0px 16px 0px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 28px;
  line-height: 33px;
  color: #fff;
`;
const PlaneImg = styled.img`
  position: absolute;
  z-index: 2;
  top: 20px;
  right: 20px;
`;
// (STYLED)______________________SECOND PART

const DirectionsOfFlights = styled.div`
  height: 900px;
  ${"" /* DELETE HEIGHT_________________________ */};
`;

const KompassLogoContainer = styled.div`
  text-align: center;
  padding: 56px 0px 20px 0px;
`;

const KompassLogo = styled.img``;

const DirectionsTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  line-height: 36px;
  margin: 0px;
`;
const TitleSityLink = styled.a`
  color: #00ace2;
  text-decoration: none;
  font-weight: 500;
`;

export default Main;
