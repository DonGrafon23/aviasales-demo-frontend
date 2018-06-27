import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

import logo from "./logo.svg";

import arrow from "./Arrow.svg";
import calendar from "./calendar.svg";
import shape from "./shape.svg";
import Rectangle from "./Rectangle-169.svg";

function Main() {
  return (
    <div>
      <SearchPart>
        <div className="container">
          <div className="row center-xl">
            <MainScreen>
              <Logo>
                <AviaLogo src={logo} alt="logo" />
              </Logo>
              <AviaSales>aviasales</AviaSales>
              <Currency> RUB </Currency>
            </MainScreen>
            <SearchForm>
              <Cities>
                <FirstTown>
                  <Moscow placeholder="Moscow" />
                  <CurrencySpanFirst>KUF</CurrencySpanFirst>
                  <Arrow src={arrow} alt="Arrow" />
                </FirstTown>

                <SecondTown>
                  <SitiOfArrival placeholder="Город прибытия" />
                  <CurrencySpanSecond>KUF</CurrencySpanSecond>
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
              <TicketAndButton>
                <TypeOfTickets>
                  <TicketSelection placeholder="1 пассажир, эконом" />
                  <Shape src={shape} alt="shape" />
                </TypeOfTickets>
                <SearchButton>
                  <FindTickets>Найти билеты</FindTickets>
                </SearchButton>
              </TicketAndButton>
            </SearchForm>
          </div>
        </div>
      </SearchPart>
      {/* <TicketsPart>
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <Filter />
            </div>
            <div className="col-xl-7">
              <Tickets />
            </div>
          </div>
        </div>
      </TicketsPart> */}
    </div>
  );
}

//(FUNCTIONS)_____________________TICKETS PART

// function Tickets(props) {
//   const Ticket = TicketContent.map(TicketСomposition => (
//     <TicketBuyCol>
//       <BagsInfo>#</BagsInfo>
//       <BuyButton>#<BuyButton>
//       <Company>{TicketСomposition.CompanyName}</Company>

//     <TicketBuyCol>
//  ));
//  return <TicketContainer>{Ticket}</TicketContainer>

// }

//(STYLED)__________________SEARCH PART

const SearchPart = styled.div`
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

const MainScreen = styled.div`
  padding-bottom: 33px;
  width: 100%;
`;

const Logo = styled.div`
  padding-top: 10px;
`;

const AviaLogo = styled.img`
  float: left;
  padding-top: 2px;
`;

const AviaSales = styled.p`
  padding: 4px 0px 0px 12px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 20px;
  line-height: 25px;
  margin: 0px;
  color: #fff;
  float: left;
`;

const Currency = styled.div`
  color: #fff;
  float: right;
  padding: 8px 20px 9px 20px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

//_________________________________________________________________SEARCH

const SearchForm = styled.div`
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  padding-bottom: 32px;

  margin: auto;
`;

const Cities = styled.div`
  display: flex;
`;

const FirstTown = styled.div`
  position: relative;
  margin: 0px 1px;
  display: flex;
  padding: 0px;
  width: 50%;
`;
const Moscow = styled.input`
  padding: 18px 0px 18px 16px;
  border-color: transparent;
  border-radius: 2px 0px 0px 2px;
  width: 100%;
`;

const CurrencySpanFirst = styled.span`
  position: absolute;
  z-index: 2;
  right: 43px;
  top: 21px;
  color: #a0b0b9;
`;

const Arrow = styled.img`
  position: absolute;
  z-index: 2;
  top: 21px;
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
  position: relative;
`;

const SitiOfArrival = styled.input`
  font-family: Roboto;
  font-weight: Regular;
  color: #a0b0b9;
  border-color: transparent;
  padding: 18px 0px 18px 16px;
  width: 100%;
`;

const CurrencySpanSecond = styled.span`
  position: absolute;
  z-index: 2;
  right: 16px;
  top: 19px;
  color: #a0b0b9;
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

const TicketAndButton = styled.div`
  display: flex;
`;

const TypeOfTickets = styled.div`
  position: relative;
  border: 0px solid #fff;
  display: flex;
  margin: 0px 1px;
  box-sizing: border-box;
  width: 60%;
`;

const TicketSelection = styled.input`
  border-radius: 0px 2px 2px 0px;
  font-family: Roboto;
  font-weight: Regular;
  padding: 18px 0px 18px 16px;
  border-color: transparent;
  width: 95%;
`;

const Shape = styled.img`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const SearchButton = styled.div`
  margin: 0px 0px 0px 15px;
  background-color: #ff9241;
  position: relative;
  z-index: 1;
  display: block;
  border-radius: 3px;
  border: 0px solid #fff;
  width: 40%;
  padding: 17px 29px 17px 29px;
`;
const FindTickets = styled.p`
  margin: 0px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 20px;
  line-height: 23px;
  color: #fff;
`;
//_____________________________________TICKETS PART

const TicketsPart = styled.div`
  background-color: #eaeaea;
  height: 1400px;
  ${"" /* ; DELET AFTER!!!!!!!!________________________ */};
`;

export default Main;
