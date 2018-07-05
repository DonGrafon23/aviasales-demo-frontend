import React, { Component } from "react";
import "./App.css";
import styled, { css } from "styled-components";
import { Range } from "rc-slider";
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import "rc-slider/assets/index.css";
import "./Range.css";

import logo from "./logo.svg";

import arrow from "./Arrow.svg";
import calendar from "./calendar.svg";
import shape from "./shape.svg";
import ShapeDown from "./ShapeDown.svg";
import Rectangle from "./Rectangle-169.svg";
import BlackPlane from "./BlackPlane.svg";

import ImgBag1 from "./ImgBag1.svg";
import ImgBag2 from "./ImgBag2.svg";
import ImgBag2Red from "./ImgBag2Red.svg";
import ImgCross from "./ImgCross.svg";
import CircleCross from "./CircleCross.svg";
import ImgCrossRed from "./ImgCrossRed.svg";

import ImgTakeoff from "./ImgTakeoff.svg";
import ImgLanding from "./ImgLanding.svg";
import ButtonBackImg from "./ButtonBack.svg";
import PinButton from "./FixButton.svg";
import ImgCircle from "./ImgCircle.svg";
import ImgRoutLine from "./ImgRoutLine.svg";
import imgRus from "./imgRus.svg";
import ImgNorwind from "./imgNorwind.svg";
import ImgNorwindAir from "./imgNorwindAir.svg";
import ImgRed from "./imgRed.svg";
import RedMin from "./red.min.svg";
import RusMin from "./rus.min.svg";
import ImgFly from "./imgFly.svg";
import AirLineMin from "./airLine.min.svg";
import DottedLineImg from "./dotted.svg";

function Main() {
  return (
    <div>
      <SearchPart>
        <div className="container">
          <div className="row ">
            <MainScreen>
              <Logo>
                <AviaLogo src={logo} alt="logo" />
              </Logo>
              <AviaSales>aviasales</AviaSales>
              <Currency> RUB </Currency>
            </MainScreen>
            <SearchBox>
              <div className="col-xl-10">
                <SearchForm>
                  <Cities>
                    <FirstTown>
                      <SitiOfDeparture placeholder="Москва" />
                      <CurrencySpanFirst>KUF</CurrencySpanFirst>
                      <Arrow src={arrow} alt="Arrow" />
                    </FirstTown>

                    <SecondTown>
                      <SitiOfArrival placeholder="Барселона" />
                      <CurrencySpanSecond>BCN</CurrencySpanSecond>
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
              <div className="col-xl-2">
                <SearchButton>
                  <FindTickets>Найти билеты</FindTickets>
                </SearchButton>
              </div>
            </SearchBox>
          </div>
        </div>
      </SearchPart>
      <TicketsPart>
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <Filters />
            </div>
            <div className="col-xl-7">
              <TicketsBox>
                <Tickets />
                <ButtonAllTickets>ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!</ButtonAllTickets>
              </TicketsBox>
            </div>
          </div>
        </div>
      </TicketsPart>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <FooterBox>
              <FooterCol />
            </FooterBox>
          </div>
        </div>
      </div>
    </div>
  );
}

//(FUNCTIONS)_____________________Filter PART

function Filters(props) {
  return (
    <FilterBox>
      <BlockWithCheckBox>
        <FilterTitleBox>
          <FilterTitle>
            <ShapeFilter src={ShapeDown} />
            ПЕРЕСАДКИ
          </FilterTitle>
          <DeleteFilter>
            <CrossFilter src={CircleCross} />
          </DeleteFilter>
        </FilterTitleBox>
        <Checkboxes>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check1">
              <InputCheck type="checkbox" id="check1" />
              <CheckContent>Все</CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check2">
              <InputCheck checked type="checkbox" id="check2" />
              <CheckContent>
                Без пересадок
                <CheckPrice> 7 712 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check3">
              <InputCheck type="checkbox" id="check3" />
              <CheckContent>
                1 пересадка
                <CheckPrice> 11 150 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check4">
              <InputCheck type="checkbox" id="check4" />
              <CheckContent>
                2 пересадки
                <CheckPrice> 16 821 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check5">
              <InputCheck type="checkbox" id="check5" />
              <CheckContent>
                3 пересадки
                <CheckPrice> 23 986 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
        </Checkboxes>
      </BlockWithCheckBox>
      <BlockWithSwipe>
        <FilterTitleBox>
          <FilterTitle>
            <ShapeFilter src={ShapeDown} />
            ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ
          </FilterTitle>
        </FilterTitleBox>
        <NameOfFlights>
          Москва
          <BlackPlaneBoxImg src={BlackPlane} />
          Барселона
        </NameOfFlights>
        <SliderBox>
          <DepartureArrival>Вылет из Москвы:</DepartureArrival>
          <TimeBox>
            <TimeStart>c 00:05, 24 фев</TimeStart>
            <TimeFinish>до 23:45, 24 фев</TimeFinish>
          </TimeBox>
          <Range />
          <DepartureArrival>Прибытие в Барселону:</DepartureArrival>
          <TimeBox>
            <TimeStart>c 03:05, 24 фев</TimeStart>
            <TimeFinish>до 13:50, 26 фев</TimeFinish>
          </TimeBox>
          <Range />
        </SliderBox>
        <NameOfFlights>
          Барселона
          <BlackPlaneBoxImg src={BlackPlane} />
          Москва
        </NameOfFlights>
        <SliderBox>
          <DepartureArrival>Вылет из Барселоны:</DepartureArrival>
          <TimeBox>
            <TimeStart>c 06:00, 3 мар</TimeStart>
            <TimeFinish>до 23:45, 3 мар</TimeFinish>
          </TimeBox>
          <Range />
          <DepartureArrival>Прибытие в Москву:</DepartureArrival>
          <TimeBox>
            <TimeStart>c 15:00, 3 мар</TimeStart>
            <TimeFinish>до 09:55, 5 мар</TimeFinish>
          </TimeBox>
          <Range />
        </SliderBox>
      </BlockWithSwipe>
      <EmptyBlock>
        <FilterTitleBox>
          <FilterTitle>
            <ShapeFilter src={ShapeDown} />
            Багаж
          </FilterTitle>
        </FilterTitleBox>
      </EmptyBlock>
      <EmptyBlock>
        <FilterTitleBox>
          <FilterTitle>
            <ShapeFilter src={ShapeDown} />
            Длительность пересадки
          </FilterTitle>
        </FilterTitleBox>
      </EmptyBlock>
      <BlockWithSwipe>
        <FilterTitleBox>
          <FilterTitle>
            <ShapeFilter src={ShapeDown} />
            Время в пути
          </FilterTitle>
        </FilterTitleBox>
        <NameOfFlights>
          Москва
          <BlackPlaneBoxImg src={BlackPlane} />
          Барселона
        </NameOfFlights>
        <SliderBox>
          <TimeBox>
            <TimeStart>от 04ч 20м</TimeStart>
            <TimeFinish>до 48ч 50м</TimeFinish>
          </TimeBox>
          <Range />
        </SliderBox>
        <NameOfFlights>
          Барселона
          <BlackPlaneBoxImg src={BlackPlane} />
          Москва
        </NameOfFlights>
        <SliderBox>
          <TimeBox>
            <TimeStart>от 04ч 10м</TimeStart>
            <TimeFinish>до 41ч 20м</TimeFinish>
          </TimeBox>
          <Range />
        </SliderBox>
      </BlockWithSwipe>
      <BlockWithCheckBox>
        <FilterTitleBox>
          <FilterTitle>
            <ShapeFilter src={ShapeDown} />
            Авиакомпании
            <FilterQuantity>43</FilterQuantity>
          </FilterTitle>
        </FilterTitleBox>
        <Checkboxes>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check1">
              <InputCheck type="checkbox" id="check1" />
              <CheckContent>Несколько авиакомпаний</CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxInfo>
            Показывать билеты с перелетами, выполняемыми несколькими
            авиакомпаниями, включая выбранную
          </CheckboxInfo>
          <CheckboxCategory>Альянсы</CheckboxCategory>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check2">
              <InputCheck checked type="checkbox" id="check2" />
              <CheckContent>Все</CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check3">
              <InputCheck checked type="checkbox" id="check3" />
              <CheckContent>
                Star Alliance
                <CheckPrice> 11 150 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check4">
              <InputCheck checked type="checkbox" id="check4" />
              <CheckContent>
                OneWorld
                <CheckPrice> 12 370 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check5">
              <InputCheck checked type="checkbox" id="check5" />
              <CheckContent>
                SkyTeam
                <CheckPrice> 16 290 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxCategory>Авиакомпании</CheckboxCategory>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check6">
              <InputCheck checked type="checkbox" id="check6" />
              <CheckContent>Все</CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check7">
              <InputCheck checked type="checkbox" id="check7" />
              <CheckContent>
                Aegean Airlines
                <CheckPrice> 20 357 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check8">
              <InputCheck checked type="checkbox" id="check8" />
              <CheckContent>
                Air Algerie
                <CheckPrice> 29 105 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent type="checkbox" value="None" name="check" id="check9">
              <InputCheck checked type="checkbox" id="check9" />
              <CheckContent>
                Air Europa
                <CheckPrice> 22 202 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent
              type="checkbox"
              value="None"
              name="check"
              id="check10"
            >
              <InputCheck checked type="checkbox" id="check10" />
              <CheckContent>
                Air France
                <CheckPrice> 17 050 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent
              type="checkbox"
              value="None"
              name="check"
              id="check11"
            >
              <InputCheck checked type="checkbox" id="check11" />
              <CheckContent>
                Air Moldova
                <CheckPrice> 22 613 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent
              type="checkbox"
              value="None"
              name="check"
              id="check12"
            >
              <InputCheck checked type="checkbox" id="check12" />
              <CheckContent>
                Alitalia
                <CheckPrice> 22 717 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent
              type="checkbox"
              value="None"
              name="check"
              id="check13"
            >
              <InputCheck checked type="checkbox" id="check13" />
              <CheckContent>
                Alitalia CityLiner
                <CheckPrice> 20 271 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent
              type="checkbox"
              value="None"
              name="check"
              id="check14"
            >
              <InputCheck checked type="checkbox" id="check14" />
              <CheckContent>
                Belle Air
                <CheckPrice> 18 371 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent
              type="checkbox"
              value="None"
              name="check"
              id="check15"
            >
              <InputCheck checked type="checkbox" id="check15" />
              <CheckContent>
                British Airways
                <CheckPrice> 23 839 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent
              type="checkbox"
              value="None"
              name="check"
              id="check16"
            >
              <InputCheck checked type="checkbox" id="check16" />
              <CheckContent>
                Brussels Airlines
                <CheckPrice> 11 150 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
          <CheckboxContainer>
            <LabelContent
              type="checkbox"
              value="None"
              name="check"
              id="check17"
            >
              <InputCheck checked type="checkbox" id="check17" />
              <CheckContent>
                Bulgaria Air
                <CheckPrice> 20 114 ₽</CheckPrice>
              </CheckContent>
              <CheckSpan />
            </LabelContent>
          </CheckboxContainer>
        </Checkboxes>
      </BlockWithCheckBox>
      <EmptyBlock>
        <FilterTitleBox>
          <FilterTitle>
            <ShapeFilter src={ShapeDown} />
            аэропорты
          </FilterTitle>
        </FilterTitleBox>
      </EmptyBlock>
      <EmptyBlock>
        <FilterTitleBox>
          <FilterTitle>
            <ShapeFilter src={ShapeDown} />
            аэропорт пересадки
            <FilterQuantity>71</FilterQuantity>
          </FilterTitle>
        </FilterTitleBox>
      </EmptyBlock>
      <EmptyBlock>
        <FilterTitleBox>
          <FilterTitle>
            <ShapeFilter src={ShapeDown} />
            агенства
            <FilterQuantity>26</FilterQuantity>
          </FilterTitle>
        </FilterTitleBox>
      </EmptyBlock>
      <ResetBlock>
        <ResetTitle>СБРОСИТЬ ВСЕ ФИЛЬТРЫ</ResetTitle>
        <DeleteFilter>
          <CrossFilter src={CircleCross} />
        </DeleteFilter>
      </ResetBlock>
    </FilterBox>
  );
}

//(FUNCTIONS)_____________________TICKETS PART

function Tickets(props) {
  const Ticket = TicketContent.map(TicketСomposition => (
    <TicketContainer TicketId={TicketСomposition.id}>
      <TicketBuyCol>
        <BagsInfo>
          <BigBag bigBags={TicketСomposition.bigBags}>
            <BagBoxBig1>
              <BagImg1 src={ImgBag1} />
              <BagWeightBig1>{TicketСomposition.Weight1}</BagWeightBig1>
            </BagBoxBig1>
            <BagBoxBig2>
              <BagImg2Big noBag={TicketСomposition.noBag} src={ImgBag2} />
              <BagImg2Red noBag={TicketСomposition.noBag} src={ImgBag2Red} />
              <BagWeightBig2 noBag={TicketСomposition.noBag}>
                {TicketСomposition.Weight2}
              </BagWeightBig2>
              <CrossRed noBag={TicketСomposition.noBag} src={ImgCrossRed} />
            </BagBoxBig2>
            <BagText1> {TicketСomposition.BagTextInfo1}</BagText1>
          </BigBag>
          <BagBoxMin>
            <FirstBag bigBags={TicketСomposition.bigBags}>
              <BagBox>
                <BagBox1>
                  <BagImg1 src={ImgBag1} />
                  <BagWeight1>{TicketСomposition.Weight1}</BagWeight1>
                </BagBox1>
                <BagBox2>
                  <BagImg2 src={ImgBag2} />
                  <BagWeight2 noBag={TicketСomposition.noBag}>
                    {TicketСomposition.Weight2}
                  </BagWeight2>
                  <Cross noBag={TicketСomposition.noBag} src={ImgCross} />
                </BagBox2>
              </BagBox>
              <BagText1> {TicketСomposition.BagTextInfo1}</BagText1>
            </FirstBag>
            <SecondBag bigBags={TicketСomposition.bigBags}>
              <BagBox>
                <BagBox1>
                  <BagImg1 src={ImgBag1} />
                  <BagWeight1>{TicketСomposition.Weight3}</BagWeight1>
                </BagBox1>
                <BagBox2>
                  <BagImg2 src={ImgBag2} />
                  <BagWeight2 noBag={TicketСomposition.noBag}>
                    {TicketСomposition.Weight4}
                  </BagWeight2>
                  <Cross noBag={TicketСomposition.noBag} src={ImgCross} />
                </BagBox2>
              </BagBox>
              <BagText2> {TicketСomposition.BagTextInfo2}</BagText2>
            </SecondBag>
          </BagBoxMin>
          <LeftTickets>{TicketСomposition.TicketLeft}</LeftTickets>
        </BagsInfo>

        <BuyButton>
          <Buy>
            Купить <br />
          </Buy>
          <PriceButtonSearch>
            за {TicketСomposition.PriceButtonInfo} ₽
          </PriceButtonSearch>
        </BuyButton>
        <Company>{TicketСomposition.CompanyName}</Company>
        <Offers offer={TicketСomposition.offer}>
          <OfferBox>
            <FirstOffer>{TicketСomposition.Offer1} </FirstOffer>
            <FirstOfferPrice>{TicketСomposition.OfferPrice1}</FirstOfferPrice>
          </OfferBox>
          <OfferBox>
            <SecondOffer>{TicketСomposition.Offer2}</SecondOffer>
            <SecondOfferPrice>{TicketСomposition.OfferPrice2}</SecondOfferPrice>
          </OfferBox>
          <OtherOffers>{TicketСomposition.AmountOffers}</OtherOffers>
        </Offers>
      </TicketBuyCol>
      <TicketBox>
        <CompanyName>
          <CompanyLogoBox>
            <BigLogoBox>
              <CompanyLogo
                biglogo={TicketСomposition.biglogo}
                src={TicketСomposition.CompanyImg}
              />
            </BigLogoBox>
            <MinLogoBox>
              <CompanyLogoMin1
                biglogo={TicketСomposition.biglogo}
                src={TicketСomposition.CompanyImgMin1}
              />
              <CompanyLogoMin2
                biglogo={TicketСomposition.biglogo}
                src={TicketСomposition.CompanyImgMin2}
              />
            </MinLogoBox>
          </CompanyLogoBox>
          <CharterAndBack>
            <Charter charter={TicketСomposition.charter}> ЧАРТЕР</Charter>
            <ButtonBack src={ButtonBackImg} />
          </CharterAndBack>
        </CompanyName>
        <WayThere>
          <DateBox>
            <Time>
              <ButtonToPin src={PinButton} />
              {TicketСomposition.TimeInfo1}
            </Time>
            <City>{TicketСomposition.CityInfo1}</City>
            <DateText>{TicketСomposition.DateInfo1} </DateText>
          </DateBox>
          <RouteConnector>
            <PlaneBox>
              <TakeoffImg src={ImgTakeoff} />
              <FlightTime>Всего:{TicketСomposition.FlightTimeInfo1}</FlightTime>
              <LandingImg src={ImgLanding} />
            </PlaneBox>
            <RoutLineBox>
              <CircleImg src={ImgCircle} />
              <RoutLine src={ImgRoutLine} />
              <CircleImg src={ImgCircle} />
            </RoutLineBox>
            <CurrencyBox>
              <div>{TicketСomposition.CurrencyThereInfo1}</div>
              <div>{TicketСomposition.CurrencyBackInfo1}</div>
            </CurrencyBox>
          </RouteConnector>
          <DateBox>
            <Time end>{TicketСomposition.TimeInfo2} </Time>
            <City end> {TicketСomposition.CityInfo2}</City>
            <DateText end>{TicketСomposition.DateInfo2} </DateText>
          </DateBox>
        </WayThere>
        <DottedLine src={DottedLineImg} />
        <WayBack>
          <DateBox>
            <Time>
              <ButtonToPin src={PinButton} />
              {TicketСomposition.TimeInfo3}
            </Time>
            <City>{TicketСomposition.CityInfo3}</City>
            <DateText>{TicketСomposition.DateInfo3} </DateText>
          </DateBox>
          <RouteConnector>
            <PlaneBox>
              <TakeOffImg src={ImgTakeoff} />
              <FlightTime>Всего:{TicketСomposition.FlightTimeInfo2}</FlightTime>
              <LandingImg src={ImgLanding} />
            </PlaneBox>
            <RoutLineBox>
              <CircleImg src={ImgCircle} />
              <RoutLine src={ImgRoutLine} />
              <CircleImg src={ImgCircle} />
            </RoutLineBox>
            <CurrencyBox>
              <div>{TicketСomposition.CurrencyThereInfo2}</div>
              <div>{TicketСomposition.CurrencyBackInfo2}</div>
            </CurrencyBox>
          </RouteConnector>
          <DateBox>
            <Time end>{TicketСomposition.TimeInfo4}</Time>
            <City end>{TicketСomposition.CityInfo4}</City>
            <DateText end>{TicketСomposition.DateInfo4}</DateText>
          </DateBox>
        </WayBack>
      </TicketBox>
      <TicketOpener>
        <SwipeDown src={shape} alt="shape" />
      </TicketOpener>
    </TicketContainer>
  ));
  return <div>{Ticket} </div>;
}

//(FUNCTIONS)_____________________Footer PART

function FooterCol(props) {
  const FooterCols = FooterContent.map(Footer => (
    <div>
      <FootTitle>{Footer.FTitle}</FootTitle>
      <FootInfo>{Footer.FInfo1}</FootInfo>
      <FootInfo>{Footer.FInfo2}</FootInfo>
      <FootInfo>{Footer.FInfo3}</FootInfo>
      <FootInfo>{Footer.FInfo4}</FootInfo>
      <FootInfo>{Footer.FInfo5}</FootInfo>
      <FootInfo>{Footer.FInfo6}</FootInfo>
      <FootInfo>{Footer.FInfo7}</FootInfo>
      <FootInfoAll>{Footer.FInfoAll}</FootInfoAll>
    </div>
  ));

  return <AllInfo> {FooterCols} </AllInfo>;
}

//(CONSTS)_____________________________________TICKETS PART

const TicketContent = [
  {
    id: "1",
    Weight1: "5",
    Weight2: "15",
    Weight3: null,
    Weight4: null,
    BagTextInfo1: null,
    BagTextInfo2: null,
    PriceButtonInfo: "7 712",
    TicketLeft: null,
    CompanyName: "на Clickavia",
    Offer1: null,
    OfferPrice1: null,
    Offer2: null,
    OfferPrice2: null,
    AmountOffers: null,
    CompanyImg: imgRus,
    TimeInfo1: "00:05",
    CityInfo1: "Москва",
    DateInfo1: "24 фев 2018, Сб",
    FlightTimeInfo1: "5ч",
    CurrencyThereInfo1: "VKO",
    CurrencyBackInfo1: "BCN",
    CurrencyThereInfo2: "BCN",
    CurrencyBackInfo2: "SVO",
    TimeInfo2: "03:05",
    CityInfo2: "Барселона",
    DateInfo2: "24 фев 2018, Сб",
    TimeInfo3: "10:35",
    CityInfo3: "Барселона",
    DateInfo3: "3 мар 2018, Сб",
    FlightTimeInfo2: " 4ч 35 м",
    TimeInfo4: "17:10",
    CityInfo4: "Москва",
    DateInfo4: "3 мар 2018, Сб",
    //_______________________________(conditions)
    bigBags: true,
    charter: true,
    offer: false,
    biglogo: true,
    noBag: false
  },
  {
    id: "2",
    Weight1: "5",
    Weight2: null,
    Weight3: null,
    Weight4: null,
    BagTextInfo1: null,
    BagTextInfo2: null,
    PriceButtonInfo: "8 029",
    TicketLeft: null,
    CompanyName: "на Билетик Аэро",
    Offer1: null,
    OfferPrice1: null,
    Offer2: null,
    OfferPrice2: null,
    AmountOffers: null,
    CompanyImg: ImgNorwind,
    TimeInfo1: "00:15",
    CityInfo1: "Москва",
    DateInfo1: "24 фев 2018, Сб",
    FlightTimeInfo1: " 4ч 55м",
    CurrencyThereInfo1: "VKO",
    CurrencyBackInfo1: "BCN",
    CurrencyThereInfo2: "BCN",
    CurrencyBackInfo2: "SVO",
    TimeInfo2: "03:10",
    CityInfo2: "Барселона",
    DateInfo2: "24 фев 2018, Сб",
    TimeInfo3: "10:45",
    CityInfo3: "Барселона",
    DateInfo3: "3 мар 2018, Сб",
    FlightTimeInfo2: "4ч 30 м",
    TimeInfo4: "17:15",
    CityInfo4: "Москва",
    DateInfo4: "3 мар 2018, Сб",
    //_______________________________(conditions)
    bigBags: true,
    charter: false,
    offer: true,
    biglogo: true,
    noBag: true
  },
  {
    id: "3",
    Weight1: "5",
    Weight2: null,
    Weight3: "5",
    Weight4: "12",
    BagTextInfo1: "Нет богажа",
    BagTextInfo2: "- 136 ₽",
    PriceButtonInfo: "8 164",
    TicketLeft: null,
    CompanyName: "на Aviakassa",
    Offer1: null,
    OfferPrice1: null,
    Offer2: null,
    OfferPrice2: null,
    AmountOffers: null,
    CompanyImg: ImgNorwindAir,
    TimeInfo1: "00:15",
    CityInfo1: "Москва",
    DateInfo1: "24 фев 2018, Сб",
    FlightTimeInfo1: " 4ч 55м",
    CurrencyThereInfo1: "VKO",
    CurrencyBackInfo1: "BCN",
    CurrencyThereInfo2: "BCN",
    CurrencyBackInfo2: "SVO",
    TimeInfo2: "03:10",
    CityInfo2: "Барселона",
    DateInfo2: "24 фев 2018, Сб",
    TimeInfo3: "10:45",
    CityInfo3: "Барселона",
    DateInfo3: "3 мар 2018, Сб",
    FlightTimeInfo2: " 4ч 30 м",
    TimeInfo4: "17:15",
    CityInfo4: "Москва",
    DateInfo4: "3 мар 2018, Сб",
    //_______________________________(conditions)
    bigBags: false,
    charter: true,
    offer: false,
    biglogo: true,
    noBag: true
  },
  {
    id: "4",
    Weight1: "5",
    Weight2: null,
    Weight3: "5",
    Weight4: "12",
    BagTextInfo1: "Нет богажа",
    BagTextInfo2: "- 267 ₽",
    PriceButtonInfo: "8 240",
    CompanyName: "на Билетик Аэро",
    TicketLeft: null,
    Offer1: "Clickavia",
    OfferPrice1: "8 302 ₽",
    Offer2: "Aviakassa",
    OfferPrice2: "8 376 ₽",
    AmountOffers: "+ Еще 3 предложения",
    CompanyImg: ImgRed,
    CompanyImgMin1: null,
    CompanyImgMin2: null,
    TimeInfo1: "07:00",
    CityInfo1: "Москва",
    DateInfo1: "24 фев 2018, Сб",
    FlightTimeInfo1: "4ч 30м",
    CurrencyThereInfo1: "VKO",
    CurrencyBackInfo1: "BCN",
    CurrencyThereInfo2: "BCN",
    CurrencyBackInfo2: "SVO",
    TimeInfo2: "09:30",
    CityInfo2: "Барселона",
    DateInfo2: "24 фев 2018, Сб",
    TimeInfo3: "11:00",
    CityInfo3: "Барселона",
    DateInfo3: "3 мар 2018, Сб",
    FlightTimeInfo2: " 4ч 10 м",
    TimeInfo4: "17:10",
    CityInfo4: "Москва",
    DateInfo4: "3 мар 2018, Сб",
    //_______________________________(conditions)
    bigBags: false,
    charter: true,
    offer: false,
    biglogo: true,
    noBag: true
  },
  {
    id: "5",
    Weight1: "10",
    Weight2: "15",
    Weight3: null,
    Weight4: null,
    BagTextInfo1: null,
    BagTextInfo2: null,
    PriceButtonInfo: "9 108",
    TicketLeft: null,
    CompanyName: "на Clickavia",
    Offer1: null,
    OfferPrice1: null,
    Offer2: null,
    OfferPrice2: null,
    AmountOffers: null,
    CompanyImg: null,
    CompanyImgMin1: RedMin,
    CompanyImgMin2: RusMin,
    TimeInfo1: "00:05",
    CityInfo1: "Москва",
    DateInfo1: "24 фев 2018, Сб",
    FlightTimeInfo1: " 5ч",
    CurrencyThereInfo1: "VKO",
    CurrencyBackInfo1: "BCN",
    CurrencyThereInfo2: "BCN",
    CurrencyBackInfo2: "SVO",
    TimeInfo2: "03:05",
    CityInfo2: "Барселона",
    DateInfo2: "24 фев 2018, Сб",
    TimeInfo3: "11:00",
    CityInfo3: "Барселона",
    DateInfo3: "3 мар 2018, Сб",
    FlightTimeInfo2: " 4ч 10 м",
    TimeInfo4: "17:10",
    CityInfo4: "Москва",
    DateInfo4: "3 мар 2018, Сб",
    //_______________________________(conditions)
    bigBags: true,
    charter: true,
    offer: false,
    biglogo: false,
    noBag: false
  },
  {
    id: "6",
    Weight1: "?",
    Weight2: "2",
    Weight3: null,
    Weight4: null,
    BagTextInfo1: null,
    BagTextInfo2: null,
    PriceButtonInfo: "9 269",
    TicketLeft: "Осталось 4 билета",
    CompanyName: "на Biletix",
    Offer1: "Svyaznoy Travel",
    OfferPrice1: "9 275 ₽",
    Offer2: "Билетик Аэро",
    OfferPrice2: "9 587 ₽",
    AmountOffers: "+ Еще 4 предложения",
    CompanyImg: ImgFly,
    CompanyImgMin1: null,
    CompanyImgMin2: null,
    TimeInfo1: "07:30",
    CityInfo1: "Москва",
    DateInfo1: "24 фев 2018, Сб",
    FlightTimeInfo1: "4ч 20м",
    CurrencyThereInfo1: "VKO",
    CurrencyBackInfo1: "BCN",
    CurrencyThereInfo2: "BCN",
    CurrencyBackInfo2: "SVO",
    TimeInfo2: "09:50",
    CityInfo2: "Барселона",
    DateInfo2: "24 фев 2018, Сб",
    TimeInfo3: "11:20",
    CityInfo3: "Барселона",
    DateInfo3: "3 мар 2018, Сб",
    FlightTimeInfo2: "4ч 15 м",
    TimeInfo4: "17:35",
    CityInfo4: "Москва",
    DateInfo4: "3 мар 2018, Сб",
    //_______________________________(conditions)
    bigBags: true,
    charter: true,
    offer: true,
    biglogo: true,
    noBag: false
  },
  {
    id: "7",
    Weight1: "?",
    Weight2: "15",
    Weight3: null,
    Weight4: null,
    BagTextInfo1: null,
    BagTextInfo2: null,
    PriceButtonInfo: "9 485 ",
    TicketLeft: null,
    CompanyName: "на Clickavia",
    Offer1: null,
    OfferPrice1: null,
    Offer2: null,
    OfferPrice2: null,
    AmountOffers: null,
    CompanyImg: null,
    CompanyImgMin1: RusMin,
    CompanyImgMin2: AirLineMin,
    TimeInfo1: "00:05",
    CityInfo1: "Москва",
    DateInfo1: "24 фев 2018, Сб",
    FlightTimeInfo1: " 5ч",
    CurrencyThereInfo1: "VKO",
    CurrencyBackInfo1: "BCN",
    CurrencyThereInfo2: "BCN",
    CurrencyBackInfo2: "SVO",
    TimeInfo2: "03:05",
    CityInfo2: "Барселона",
    DateInfo2: "24 фев 2018, Сб",
    TimeInfo3: "10:20",
    CityInfo3: "Барселона",
    DateInfo3: "3 мар 2018, Сб",
    FlightTimeInfo2: " 4ч 15 м",
    TimeInfo4: "17:35",
    CityInfo4: "Москва",
    DateInfo4: "3 мар 2018, Сб",
    //_______________________________(conditions)
    bigBags: true,
    charter: true,
    offer: false,
    biglogo: true,
    noBag: false
  }
];

//(CONSTS)_____________________________________FOOTER PART

const FooterContent = [
  {
    FTitle: "Страны",
    FInfo1: "Россия",
    FInfo2: "Таиланд",
    FInfo3: "Черногория",
    FInfo4: "Кипр",
    FInfo5: "Болгария",
    FInfo6: "Грузия",
    FInfo7: null,
    FInfoAll: "Все страны →"
  },
  {
    FTitle: "Города",
    FInfo1: "Москва",
    FInfo2: "Санкт-Петербург",
    FInfo3: "Симферополь",
    FInfo4: "Адлер",
    FInfo5: "Екатеринбург",
    FInfo6: "Лондон",
    FInfo7: null,
    FInfoAll: "Все города →"
  },

  {
    FTitle: "Авиакомпании",
    FInfo1: "Air Berlin",
    FInfo2: "Air France",
    FInfo3: "Air Baltic",
    FInfo4: "Emirates",
    FInfo5: "Alitalia",
    FInfo6: "KLM",
    FInfo7: null,
    FInfoAll: "Все авиакомпании →"
  },
  {
    FTitle: "Аэропорты",
    FInfo1: "Шереметьево",
    FInfo2: "Курумоч",
    FInfo3: "Домодедово",
    FInfo4: "Толмачево",
    FInfo5: "Владивосток",
    FInfo6: "Гамбург",
    FInfo7: null,
    FInfoAll: "Все аэропорты →"
  },
  {
    FTitle: "Направления",
    FInfo1: "MOW – SIP",
    FInfo2: "MOW – AER",
    FInfo3: "MOW – TIV",
    FInfo4: "MOW – MRV",
    FInfo5: "LED – MOW",
    FInfo6: "MOW – BKK",
    FInfo7: null,
    FInfoAll: null
  },
  {
    FTitle: "Сервисы",
    FInfo1: "Горящие авиабилеты",
    FInfo2: "Календарь низких цен",
    FInfo3: "Карта низких цен",
    FInfo4: "Спецпредложения",
    FInfo5: "Таблица цен",
    FInfo6: "Блог",
    FInfo7: "Помощь",
    FInfoAll: null
  }
];

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
  padding-left: 8px;
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
  margin-right: 8px;
  padding: 8px 20px 9px 20px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

//_________________________________________________________________SEARCH

const SearchBox = styled.div`
  display: flex;

  margin-bottom: 32px;
  width: 100%;
`;

const SearchForm = styled.form`
  flex-wrap: nowrap;
  display: flex;
`;

const Cities = styled.div`
  display: flex;
  width: 87%;
`;

const FirstTown = styled.div`
  position: relative;
  margin: 0px 1px;
  display: flex;
  padding: 0px;
  width: 50%;
`;
const SitiOfDeparture = styled.input`
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
  top: 21px;
  color: #a0b0b9;
`;

const Calendars = styled.div`
  width: 63%;
  display: flex;
`;

const CalendarThere = styled.div`
  position: relative;
  z-index: 1;
  margin: 0px 1px;
  display: flex;
  width: 50%;
`;
const There = styled.input`
  color: #a0b0b9;
  padding: 18px 0px 18px 16px;
  border-color: transparent;
  width: 100%;
  box-sizing: border-box;
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
  box-sizing: border-box;
`;

const TypeOfTickets = styled.div`
  position: relative;
  border: 0px solid #fff;
  display: flex;
  margin: 0px 1px;
  box-sizing: border-box;
  width: 39%;
`;

const TicketSelection = styled.input`
  border-radius: 0px 2px 2px 0px;
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
  width: 100%;
  height: 100%;
`;
const FindTickets = styled.button`
  background: #ff9241;
  border-radius: 4px;
  font-weight: 900;
  line-height: normal;
  font-size: 28px;
  color: #ffffff;
  padding: 17px 0px;
  border-color: transparent;
  cursor: pointer;
  margin: auto;
  width: 100%;
  font-size: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
`;

//____________________________________Filter PART

const FilterBox = styled.div`
  padding-top: 56px;
`;
const BlockWithCheckBox = styled.div`
  margin-bottom: 1px;
  background: #ffffff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
const BlockWithSwipe = styled.div`
  margin-bottom: 1px;
  background: #ffffff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-radius: 0px;
  margin-bottom: 1px;
  padding-bottom: 24px;
`;
const EmptyBlock = styled.div`
  margin-bottom: 1px;
  background: #ffffff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-radius: 0px;
  padding-bottom: 16px;
`;
const FilterTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;
  color: #5b5b5c;
  padding-left: 16px;
  text-transform: uppercase;
`;
const FilterTitle = styled.div`
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-size: 12px;
  text-transform: uppercase;
  color: #5b5b5c;
  padding-top: 16px;
  text-transform: uppercase;
`;
const ShapeFilter = styled.img`
  padding-right: 6px;
  transform: rotate(-90deg);
  margin-bottom: 2px;
  padding-right: 0px;
  margin-right: 6px;
`;
const ResetBlock = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;
  padding-left: 16px;

  background: #fff;
  padding-bottom: 16px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #00bde4;
`;

const ResetTitle = styled.div`
  padding-top: 18px;
`;

const DeleteFilter = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;
  color: #5b5b5c;
  /* padding-left: 16px; */
  padding-top: 16px;
  text-transform: uppercase;
`;
const CrossFilter = styled.img`
  padding-right: 16px;
  padding-top: 2px;
`;

const Checkboxes = styled.div`
  padding: 26px 0px 6px 26px;
`;

const CheckboxContainer = styled.div`
  padding-bottom: 15px;
  padding-left: 16px;
  padding-right: 16px;
`;

const CheckboxInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: -10px;
  margin-top: -6px;
  margin-right: 60px;
  padding-bottom: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-size: 11px;
  color: #5b5b5c;
`;

const CheckboxCategory = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;
  padding-left: 16px;
  color: #323333;
  margin-left: -23px;
  padding-bottom: 17px;
`;

const LabelContent = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: #4a4a4a;
  user-select: none;
`;
const InputCheck = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked ~ span:after {
    display: block;
  }
  &:checked ~ span {
    background: #e1f8ff;
    border: 1px solid #00ace2;
  }
`;
const CheckContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CheckPrice = styled.div`
  color: #a0b0b9;
`;
const CheckSpan = styled.span`
  margin-left: 16px;
  position: absolute;
  top: 0;
  left: -40px;
  width: 18px;
  height: 18px;
  background: #fff;
  border: 1px solid #a0b0b9;
  box-sizing: border-box;
  border-radius: 4px;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 3px;
    width: 3px;
    height: 6px;
    border-bottom: 2px solid #00ace2;
    border-right: 2px solid #00ace2;
    transform: rotate(45deg);
  }
  &:checked ~ span {
    background-color: #e1f8ff;
    border: 1px solid #00ace2;
  }
`;

const NameOfFlights = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  padding-top: 26px;
  margin-left: 16px;
  margin-right: 16px;
`;
const BlackPlaneBoxImg = styled.img`
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: -3px;
`;
const SliderBox = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`;
const TimeBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
`;

const DepartureArrival = styled.div`
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  margin-top: 15px;
`;
const TimeStart = styled.div``;
const TimeFinish = styled.div``;
const FilterQuantity = styled.span`
  color: #a0b0b9;
  padding-left: 8px;
`;

//_____________________________________TICKETS PART

const TicketsPart = styled.div`
  background-color: #eaeaea;
`;

const TicketsBox = styled.div`
  padding-top: 56px;
`;

const TicketContainer = styled.div`
  display: flex;
  color: #9ca5a8;
  padding-bottom: 20px;
`;
const TicketBuyCol = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  border-radius: 4px 0px 0px 4px;
`;
const BagsInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const BigBag = styled.div`
  padding: 10px 0px 0px 0px;
  display: flex;
  display: none;
  ${props =>
    props.bigBags === true &&
    css`
      display: flex;
      justify-content: center;
    `};
`;

const BagBoxMin = styled.div`
  display: flex;
  width: 100%;
`;

const FirstBag = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-top-left-radius: 4px;
  background: #f8fbfb;
  border-right: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  padding-top: 5px;
  justify-content: center;

  ${props =>
    props.bigBags === true &&
    css`
      display: none;
    `};
`;
const SecondBag = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-top: 7px;
  border-top-left-radius: 4px;
  background: #f8fbfb;
  border-right: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  background: #fff;
  border: 0px;

  ${props =>
    props.bigBags === true &&
    css`
      display: none;
    `};
`;

const BagBoxBig1 = styled.div`
  flex-direction: row;
  position: relative;
  margin-right: 4px;
  display: flex;

  flex-wrap: nowrap;
`;
const BagBoxBig2 = styled.div`
  position: relative;
  display: flex;
`;

const BagBox = styled.div`
  display: flex;
  justify-content: center;
`;

const BagBox1 = styled.div`
  justify-content: center;
  position: relative;
  margin-right: 4px;
  display: flex;
`;
const BagBox2 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const BagWeightBig1 = styled.div`
  letter-spacing: -0.4px;
  position: absolute;
  top: 9px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  right: 0px;
  left: 0px;
  font-weight: Bold;
`;
const BagWeightBig2 = styled.div`
  position: absolute;
  font-size: 10px;
  line-height: 12px;
  top: 7px;
  right: 0px;
  left: 0px;
  text-align: center;
  font-weight: Bold;
  display: block;
  ${props =>
    props.noBag === true &&
    css`
      display: none;
    `};
`;

const BagWeight1 = styled.div`
  letter-spacing: -0.4px;
  position: absolute;
  top: 8px;
  right: 0px;
  left: 0px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  font-weight: Bold;
`;
const BagWeight2 = styled.div`
  position: absolute;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  top: 7px;
  font-weight: Bold;
  right: 0px;
  left: 0px;
  ${props =>
    props.noBag === true &&
    css`
      display: none;
    `};
`;
const Cross = styled.img`
  position: absolute;
  left: auto;
  top: 9px;
  right: 5px;
  display: none;
  ${props =>
    props.noBag === true &&
    css`
      display: block;
    `};
`;

const CrossRed = styled.img`
  position: absolute;
  left: auto;
  top: 9px;
  right: 5px;
  display: none;
  ${props =>
    props.noBag === true &&
    css`
      display: block;
    `};
`;

const BagImg1 = styled.img``;

const BagImg2Red = styled.img`
  display: none;
  ${props =>
    props.noBag === true &&
    css`
      display: block;
    `};
`;

const BagImg2 = styled.img``;
const BagImg2Big = styled.img`
  display: block;
  ${props =>
    props.noBag === true &&
    css`
      display: none;
    `};
`;

const BagText1 = styled.span`
  padding-bottom: 7px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  padding-top: 6px;
`;
const BagText2 = styled.span`
  color: #66d295;
  position: static;
  padding-bottom: 7px;
  font-weight: normal;
  line-height: 15px;
  font-size: 10px;
  text-align: center;
  padding-top: 6px;
`;

const LeftTickets = styled.div`
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  font-size: 10px;
  text-align: center;
  color: #66d295;
  display: block;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #ff654e;
  margin-top: 8px;
  margin-bottom: -9px;
`;

const BuyButton = styled.div`
  color: #fff;
  background-color: #ff6d00;
  font-size: 16px;
  line-height: 18px;
  border-radius: 3px;
  border: 1px solid #fff;
  margin-left: 22px;
  margin-right: 24px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  padding: 6px 43px;
`;
const Buy = styled.span``;
const PriceButtonSearch = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  text-align: center;
  margin-top: 3px;
`;

const Company = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin-top: 8px;
  margin-bottom: 0px;
  text-align: center;
`;
const Offers = styled.div`
  ${props =>
    props.offer === true &&
    css`
      display: flex;
    `};
  display: none;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #59bce5;
`;
const OfferBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 22px;
  margin-right: 22px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
`;
const FirstOffer = styled.p`
  margin: 2px;
`;
const FirstOfferPrice = styled.p`
  margin: 2px;
`;
const SecondOffer = styled.p`
  margin: 2px;
`;
const SecondOfferPrice = styled.p`
  margin: 2px;
`;
const OtherOffers = styled.p`
  font-weight: 500;
  margin-top: 9px;
  line-height: 18px;
  font-size: 12px;
`;
const TicketBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-left: 1px;
  padding: 0px 10px 25px 10px;
`;
const CompanyName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CompanyLogoBox = styled.div`
  display: flex;
`;
const CompanyLogo = styled.img`
  padding: 16px 0px 12px 0px;
  display: flex;
`;
const BigLogoBox = styled.div``;
const MinLogoBox = styled.div`
  display: flex;
  padding-top: 16px;
`;
const CompanyLogoMin1 = styled.img`
  padding-right: 6px;
`;
const CompanyLogoMin2 = styled.img`
  padding-left: 6px;
`;
const CharterAndBack = styled.div`
  display: flex;
  margin-top: 4px;
`;
const Charter = styled.div`
  padding: 4px 11px;
  border: 1px solid #23a9f6;
  border-radius: 15px;
  color: #23a9f6;
  background-color: #fff;
  font-size: 10px;
  line-height: 18px;
  display: none;
  ${props =>
    props.charter === true &&
    css`
      display: block;
    `};
`;
const ButtonBack = styled.img`
  padding: 0px 16px 0px 13px;
`;
const WayThere = styled.div`
  display: flex;
`;
const DateBox = styled.div``;
const RouteConnector = styled.div`
  padding: 0px 13px 0px 8px;
`;
const PlaneBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 18px;
  margin-top: 7px;
  paddin-bottom: 7px;
`;
const TakeOffImg = styled.img``;
const FlightTime = styled.div``;
const LandingImg = styled.img``;
const RoutLineBox = styled.div`
  padding-bottom: 15px;
  display: flex;
`;
const CurrencyBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  line-height: 18px;
  color: #000;
  font-weight: 500;
`;

const DottedLine = styled.img`
  padding: 12px 0px 14px 0px;
`;

const WayBack = styled.div`
  display: flex;
`;
const TicketOpener = styled.div`
  display: flex;
  align-items: center;
  background-color: #edf5f7;
  padding: 0px 5px 0px 5px;
  border-radius: 0px 4px 4px 0px;
`;
const SwipeDown = styled.img``;
const Time = styled.div`
  font-size: 28px;
  line-height: 40px;
  color: #000;
  display: flex;
`;
const ButtonToPin = styled.img`
  padding-right: 8px;
`;
const DateText = styled.span`
  font-size: 12px;
  line-height: 18px;
`;
const CircleImg = styled.img`
  margin: 2px;
`;
const RoutLine = styled.img``;
const City = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin: 0px;
  font-weight: Bold;
`;
const TakeoffImg = styled.img``;

const ButtonAllTickets = styled.div`
  background: #00acde;
  border-radius: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 14px;
  text-align: center;
  border: 0px;
  color: #ffffff;
  width: 100%;
  padding-top: 18px;
  padding-bottom: 18px;
  margin-bottom: 40px;
  padding-left: 3px;
  padding-right: 3px;
  margin-bottom: 40px;
`;

//(STYLED)__________________FOOTER PART
const FooterBox = styled.div`
  padding-top: 45px;
`;
const AllInfo = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 16px;
  font-size: 12px;
`;
const FootTitle = styled.p`
  color: #4a4a4a;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 20px;
`;
const FootInfo = styled.p`
  font-weight: Regular;
  color: #5b5b5;
`;
const FootInfoAll = styled.p`
  font-weight: 600;
  margin-top: 16px;
`;

export default Main;
