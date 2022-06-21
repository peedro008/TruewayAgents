import React, { useEffect, useState } from "react";

import useGoogleCharts from "../Charts/useGoogleCharts";
import axios from "axios";

import { useSelector } from "react-redux";
import AdminDashboardComponent from "../Components/adminDashboard";

const AdminDashboard = () => {
  const [next, setNext] = useState(false);
  const [asd, setAsd] = useState(false);

  const [dataList, setDataList] = useState([]);
  const [sold, setSold] = useState([]);
  const [unSold, setUnSold] = useState([]);
  const [modifiedList, setModifiedList] = useState([]);
  const [NSD, setNSD] = useState(0);
  const google = useGoogleCharts();
  const producers = useSelector((state) => state.Producers);
  const UserId = useSelector((state) => state.UserId);
  const modify = useSelector((state) => state.QuoteStatuses);
  const quotes = useSelector((state) => state.Quotes);
  const payments = useSelector((state) => state.Payments);

  useEffect(() => {
    let temp = [];
    let pes = [];
    modify
      .sort(function (a, b) {
        return b.id - a.id;
      })
      .map((e) => {
        if (!pes.includes(e.Quote.id) && e.Status !== "-") {
          temp.push(e);
          pes.push(e.Quote.id);
        }
      });
    setModifiedList(temp);
  }, [modify]);

  useEffect(() => {
    let pes = [];
    let quo = quotes;

    let q = modify;
    producers.map((e) =>
      pes.push([
        e.name,
        q.filter((f) => f.User.name == e.name && f.Status == "Sold").length,
        quo.filter(
          (i) =>
            i.User.name == e.name 
        ).length,
        e,
      ])
    );
    pes
      .sort(function (a, b) {
        return a[1] / a[2] - b[1] / b[2];
      })
      .reverse();
    setDataList(pes);
  }, [modify, producers, quotes]);
  useEffect(() => {
    let pes = 0;
    let pas = 0;
    let q = quotes;
    quotes.map((e) => {
      if (
        e.QuoteStatuses.sort(function (a, b) {
          return a.id - b.id;
        }).reverse()[0].Status !== "Quoted" &&
        e.QuoteStatuses.sort(function (a, b) {
          return a.id - b.id;
        }).reverse()[0].Status !== "Cancelled"
      ) {
        pes = pes + 1;
      } else {
        pas = pas + 1;
      }
    });
    setSold(pes);
    setUnSold(pas);
  }, [quotes]);

  //NSD
  useEffect(() => {
    let temp = 0;
    payments.map((e) => {
      temp = +parseFloat(e.NSDvalue);
    });
    setNSD(temp);
  }, [payments]);

  const handleNext = (e) => {
    setNext(!next);
    e.preventDefault();
  };

  return (
    <AdminDashboardComponent
      next={next}
      setNext={setNext}
      asd={asd}
      setAsd={setAsd}
      dataList={dataList}
      setDataList={setDataList}
      sold={sold}
      setSold={setSold}
      unSold={unSold}
      setUnSold={setUnSold}
      modifiedList={modifiedList}
      setModifiedList={setModifiedList}
      NSD={NSD}
      setNSD={setNSD}
      producers={producers}
      google={google}
      UserId={UserId}
      modify={modify}
      quotes={quotes}
      payments={payments}
      handleNext={handleNext}
    />
  );
};

export default AdminDashboard;
