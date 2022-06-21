import React from "react";
import { NavLink } from "react-router-dom";

import { BsChevronLeft } from "react-icons/bs";
import { BiPencil, BiDotsHorizontalRounded } from "react-icons/bi";

import ProducerSales from "../Charts/ProducerSales";

import ProducerPie from "../Charts/ProducerPie";
const ProducerDetailsComponent = ({
  quotes,
  setQuotes,
  payments,
  setPayments,
  mquotes,
  setMquotes,
  modify,
  setModify,
  mstat,
  setMstat,
  yquotes,
  setYquotes,
  mpay,
  setMpay,
  ypay,
  setYpay,
  ystat,
  setYstat,
  dots1,
  setDots1,
  dots2,
  setDots2,
  dots3,
  setDots3,
  dots1V,
  setDots1V,
  dots2V,
  setDots2V,
  dots3V,
  setDots3V,
  NSD,
  setNSD,
  yNSD,
  setYNSD,
  Producer,
  google,
}) => {
  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">{Producer.name}</p>
      </div>
      <div className="PRODcont1">
        <div className="PRODrect">
          <div className="PRODrectH">
            <p className="PRODrectT">Sold Quotes</p>
            <BiDotsHorizontalRounded
              style={{ cursor: "pointer" }}
              size={30}
              color={"#979797"}
              onClick={() => setDots1(!dots1)}
            />
          </div>
          <div className="PRODrectB">
            <div style={{ display: "flex", flexDirection: "row" }}>
              {dots1V == 1 ? (
                <p className="PRODrectQ">
                  {mstat.filter((e) => e.Status == "Sold").length
                    ? mstat.filter((e) => e.Status == "Sold").length
                    : 0}
                  &nbsp;{" "}
                </p>
              ) : (
                <p className="PRODrectQ">
                  {ystat.filter((e) => e.Status == "Sold").length
                    ? mstat.filter((e) => e.Status == "Sold").length
                    : 0}
                  &nbsp;
                </p>
              )}
              <p className="PRODrectQ">Sold</p>
            </div>
            <div className="PRODrectP"></div>
          </div>
        </div>
        {dots1 && (
          <div className="PRODdotsCont1">
            <p
              className="PRODdotT"
              onClick={() => {
                setDots1V(0);
                setDots1(!dots1);
              }}
            >
              Per year
            </p>
            <p
              className="PRODdotT"
              onClick={() => {
                setDots1V(1);
                setDots1(!dots1);
              }}
            >
              Per month
            </p>
          </div>
        )}
        <div className="PRODrect">
          <div className="PRODrectH">
            <p className="PRODrectT">Unsold Quotes</p>
            <BiDotsHorizontalRounded
              style={{ cursor: "pointer" }}
              size={30}
              color={"#979797"}
              onClick={() => setDots2(!dots2)}
            />
          </div>
          <div className="PRODrectB">
            <div style={{ display: "flex", flexDirection: "row" }}>
              {dots2V == 1 ? (
                <p className="PRODrectQ">
                  {mquotes.filter(
                    (e) =>
                      e.QuoteStatuses.sort(function (a, b) {
                        return b.id - a.id;
                      })[0].Status == "Quoted"
                  ).length
                    ? mquotes.filter(
                        (e) =>
                          e.QuoteStatuses.sort(function (a, b) {
                            return b.id - a.id;
                          })[0].Status == "Quoted"
                      ).length
                    : 0}
                  &nbsp;
                </p>
              ) : (
                <p className="PRODrectQ">
                  {yquotes.filter(
                    (e) =>
                      e.QuoteStatuses.sort(function (a, b) {
                        return b.id - a.id;
                      })[0].Status == "Quoted"
                  ).length
                    ? yquotes.filter(
                        (e) =>
                          e.QuoteStatuses.sort(function (a, b) {
                            return b.id - a.id;
                          })[0].Status == "Quoted"
                      ).length
                    : 0}
                  &nbsp;
                </p>
              )}
              <p className="PRODrectQ">Quotes</p>
            </div>

            <div className="PRODrectP"></div>
          </div>
        </div>
        {dots2 && (
          <div className="PRODdotsCont2">
            <p
              className="PRODdotT"
              onClick={() => {
                setDots2V(0);
                setDots2(!dots2);
              }}
            >
              Per year
            </p>
            <p
              className="PRODdotT"
              onClick={() => {
                setDots2V(1);
                setDots2(!dots2);
              }}
            >
              Per month
            </p>
          </div>
        )}
        <div className="PRODrect">
          <div className="PRODrectH">
            <p className="PRODrectT">NSD Sales</p>
            <BiDotsHorizontalRounded
              style={{ cursor: "pointer" }}
              size={30}
              color={"#979797"}
              onClick={() => setDots3(!dots3)}
            />
          </div>
          <div className="PRODrectB">
            <div style={{ display: "flex", flexDirection: "row" }}>
              {dots3V == 1 ? (
                <p className="PRODrectQ">$&nbsp;{NSD ? NSD : 0} </p>
              ) : (
                <p className="PRODrectQ">$&nbsp;{yNSD} </p>
              )}
            </div>
            <div className="PRODrectP"></div>
          </div>
        </div>
        {dots3 && (
          <div className="PRODdotsCont3">
            <p
              className="PRODdotT"
              style={{ color: dots3V == 1 ? "black" : "#979797" }}
              onClick={() => {
                setDots3V(0);
                setDots3(!dots3);
              }}
            >
              this year
            </p>
            <p
              className="PRODdotT"
              style={{ color: dots3V == 0 ? "black" : "#979797" }}
              onClick={() => {
                setDots3V(1);
                setDots3(!dots3);
              }}
            >
              this month
            </p>
          </div>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {google && (
          <>
            {" "}
            <ProducerSales aboutProps={Producer.UserId} google={google} />
            <ProducerPie aboutProps={Producer.UserId} google={google} />
          </>
        )}
      </div>

      <NavLink
        to={{
          pathname: "/users/producers/edit",
          props: Producer,
        }}
      >
        <button className="FITbutton">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <BiPencil
              size="20px"
              style={{
                display: "flex",
                color: "#2B4162",
                marginLeft: "8px",
                marginTop: "1px",
              }}
            />
            <p className="FITbuttonText">Edit</p>
          </div>
        </button>
      </NavLink>
      <BsChevronLeft
        color="grey"
        style={{
          minWidth: "30px",
          minHeight: "30px",
          position: "fixed",
          zIndex: 9,
          left: "80px",
          top: "17px",
          alignSelf: "flex-start",
        }}
        onClick={() => window.history.go(-1)}
      />
    </div>
  );
};
export default ProducerDetailsComponent;
