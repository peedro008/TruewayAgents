import React  from "react";
import error from "../assets/error.png";
import wbill from "../assets/wbill.png";
import bbill from "../assets/bbill.png";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import mask from "../assets/mask.png";
import PizzaChart from "../Charts/ProducersChart";
import PozzaChart from "../Charts/ColumnChar";
import { NavLink } from "react-router-dom";
import { duration } from "moment/moment";


const AdminDashboardComponent = ({
    next,
setNext,
DATE,
mquotes,
quotex,
userRole,
setAsd,
status,
setStatus,
dataList,
setDataList,
sold,
setSold,
unSold,
mModify,
modifiedList,
setModifiedList,
NSD,
setNSD,
producers,
google,
UserId,
Payment,
modify,
quotes,
payments,
handleNext,
mpayments
}) => {
  
  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">Dashboard</p>
      </div>
      {!next ? (
        <div className="DashContainer">
          <div className="DashSubCont">
            <div style={{ marginLeft: "-100px" }}>
              {google&&quotex && quotex.length  &&<PizzaChart google={google} quotex={quotex}  producers={producers}/>}
            </div> 
            <div className="DashPList1" >
              <div className="DashPListHeader">
                <p className="DashPListTitle">Producers average sale</p>
                <p className="DashPListSTitle">Descending</p>
              </div>
              <div className="DashPListDivider" />
              {quotex?.sort(function (a, b) {
        return Number(b.avg) - Number(a.avg);
      }).map((e) => {
                return (
                  <div
                    className="DashPListRow1"
                    style={{ marginBottom: "7px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div className="DashPListCircle">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#000",
                            color: "black",
                          }}
                          to={{
                            pathname: "/users/producers/details",
                            aboutProps: e.id,
                          }}
                        >
                          <img src={mask} />
                        </NavLink>
                      </div>

                      <p className="DashPListItemText">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#000",
                            color: "black",
                          }}
                          to={{
                            pathname: "/users/producers/details",
                            aboutProps: e.id,
                          }}
                        >
                          {e.name}
                        </NavLink>
                      </p>
                    </div>
                    <div className="DashNumberDiv">
                      <p className="DashNumber">
                        {e.avg}%
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="dashContCard">
      
            <div className="dashCard">
              <div
                className="dashCircle"
                style={{ backgroundColor: " rgba(255, 184, 0, 0.07)" }}
              >
                <img src={error} />
              </div>
              <div className="dashText">
                <p className="dashCardTitle">
                  {
                    unSold
                  }
                </p>
                <p className="dashCardText">Unsold quotes</p>
              </div>
            </div>
            <div className="dashCard" style={{ marginLeft: "50px" }}>
              <div
                className="dashCircle"
                style={{ backgroundColor: " rgba(76, 184, 255, 0.07)" }}
              >
                <img src={wbill} />
              </div>
              <div className="dashText">
                <p className="dashCardTitle">
                  {sold}
                </p>
                <p className="dashCardText">Total quotes sold per month</p>
              </div>
            </div>
            <NavLink
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/report/genericReport",
                  aboutProps: {
                    type: "P",
                    title: `NSD Sold`,
                    items: userRole=="Manager"? mpayments: Payment?.filter(e=>e.date.substring(0, 7) == DATE.substring(0, 7)&&parseFloat(e.NSDvalue))
                    
                  },
                }}>
            <div className="dashCard" style={{ marginLeft: "50px" }}>
              <div
                className="dashCircle"
                style={{ backgroundColor: " rgba(76, 184, 255, 0.07)" }}
              >
                <img src={wbill} />
              </div>
              <div className="dashText">
                <p className="dashCardTitle">
                  ${NSD}
                </p>
                <p className="dashCardText">Total NSD sales</p>
              </div>
            </div></NavLink>
            <NavLink
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/report/genericReport",
                  aboutProps: {
                    type: "P",
                    title: `Payments this Month`,
                    items: userRole=="Manager"? mpayments: Payment?.filter(e=>e.date.substring(0, 7) == DATE.substring(0, 7))
                    
                  },
                }}>
            <div className="dashCard" style={{ marginLeft: "50px" }}>
              <div
                className="dashCircle"
                style={{ backgroundColor: " rgba(8, 76, 97, 0.07)" }}
              >
                <img src={bbill} />
              </div>
              <div className="dashText">
                <p className="dashCardTitle">{Payment?.filter(e=>e.date.substring(0, 7) == DATE.substring(0, 7)).length}</p>
                <p className="dashCardText">Total payments per month</p>
              </div>
            </div>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="DashContainer">
          <div
            className="DashSubCont"
            style={{ justifyContent: "space-between", paddingRight: "40px" }}
          >
            {google && <PozzaChart google={google}  quotex={quotex}  producers={producers} />}
            <div className="DashStatusCont">
              <div className="DashStatusHeader">
                <p className="DashPListTitle">
                  Notification of modified policies
                </p>
              </div>
              <div className="DashStatusColumns">
                <p className="dashListColumnT1">QUOTE ID</p>
                <p className="dashListColumnT2">CLIENT NAME</p>
                <p className="dashListColumnT">CUSTOMER</p>
                <p className="dashListColumnT">DATE</p>
                <p className="dashListColumnT">STATUS</p>
              </div>
              <div className="DastStatusBody">
                {modifiedList.length ? (
                  modifiedList.map((e) => {
                    return (
                      <div className="DashStatusRow">
                        <p className="DashStatusItem1">
                          <NavLink
                            style={{ textDecoration: "none", color: "#000" }}
                            to={{
                              pathname: "/report/quote",
                              aboutProps: { ID: e.Quote.id },
                            }}
                          >
                            {e.Quote.id}
                          </NavLink>
                        </p>
                        <p className="DashStatusItem2">
                          <NavLink
                            style={{ textDecoration: "none", color: "#000" }}
                            to={{
                              pathname: "/report/quote",
                              aboutProps: { ID: e.Quote.id },
                            }}
                          >
                            {e.Quote.Client.name}
                          </NavLink>
                        </p>
                        <p className="DashStatusItem">
                          <NavLink
                            style={{ textDecoration: "none", color: "#000" }}
                            to={{
                              pathname: "/report/quote",
                              aboutProps: { ID: e.Quote.id },
                            }}
                          >
                            {e.User.name}
                          </NavLink>
                        </p>
                        <p className="DashStatusItem">
                          <NavLink
                            style={{ textDecoration: "none", color: "#000" }}
                            to={{
                              pathname: "/report/quote",
                              aboutProps: { ID: e.Quote.id },
                            }}
                          >
                            {e.date}
                          </NavLink>
                        </p>
                        <div className="DashStatusItem" style={{maxHeight:"40px"}}>
                          <div
                            className="DashStatusColor"
                            style={{
                              backgroundColor:
                                e.Status == "Cancelled"
                                  ? "#D14343"
                                  : e.Status == "Sold"
                                  ? "#14B8A6"
                                  : e.Status == "Renew down"
                                  ? "#FFB020"
                                  : "#777DA7",
                            }}
                          >
                            <p className="DashStatusItemC">
                              <NavLink
                                style={{
                                  textDecoration: "none",
                                  color: "#000",
                                }}
                                to={{
                                  pathname: "/report/quote",
                                  aboutProps: { ID: e.Quote.id },
                                }}
                              >
                                {e.Status}
                              </NavLink>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {!next ? (
        <BsChevronRight
          color="grey"
          style={{
            minWidth: "40px",
            minHeight: "40px",
            position: "absolute",
            right: "1%",
            top: "50%",
            alignSelf: "flex-start",
          }}
          onClick={handleNext}
        />
      ) : (
        <BsChevronLeft
          color="grey"
          style={{
            minWidth: "40px",
            minHeight: "40px",
            position: "absolute",
            right: "1%",
            top: "50%",
            alignSelf: "flex-start",
          }}
          onClick={handleNext}
        />
      )}
    </div>
  );
};

export default AdminDashboardComponent;
