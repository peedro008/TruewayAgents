import React, { useEffect, useState } from "react";
import useGoogleCharts from "../Charts/useGoogleCharts";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProducerDashboardComponent from "../Components/producerDashboard";

const ProducerDashboard = () => {
  const [NSD, setNSD] = useState(null);
  const [asd, setAsd] = useState([]);
  const [pquotes, setPquotes] = useState([]);
  const [uQuotes, setUQuotes] = useState(0);
  const [sQuotes, setSQuotes] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [status, setStatus] = useState([]);
  const [payments, setPayments] = useState([]);
  const dispatch = useDispatch();
  const google = useGoogleCharts();
  const producers = useSelector((state) => state.Producers);
  const UserId = useSelector((state) => state.UserId);
  const modify = useSelector((state) => state.QuoteStatuses);
  const quotes2 = useSelector((state) => state.Quotes);
  const userId = useSelector((state) => state.UserId);

  useEffect(() => {
    axios
      .get(` https://truewayagentbackend.com/producerQuotes?UserId=${userId}`)
      .then(function (response) {
        setPquotes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);
  useEffect(() => {
    axios
      .get(` https://truewayagentbackend.com/getUserPayment?UserId=${userId}`)
      .then(function (response) {
        setPayments(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [userId]);



  useEffect(() => {
    let pes = quotes2;
    let pas = pes.filter(
      (e) =>
        e.QuoteStatuses.sort(function (a, b) {
          return a.id - b.id;
        }).reverse()[0].Status == "Quoted" ||
        e.QuoteStatuses.sort(function (a, b) {
          return a.id - b.id;
        }).reverse()[0].Status == "Cancelled"
    );
    setStatus(pas);
  }, [quotes2]);
  useEffect(() => {
    let pes = [];
    pquotes.map((e) => {
      let a = e.QuoteStatuses.sort(function (a, b) {
        return a.id - b.id;
      }).reverse()[0].Status;
      pes.push(a);
    });
    setAsd(pes);
  }, [pquotes]);

  useEffect(() => {
    let temp = 0;
    payments.map((e) => {
      temp = +parseFloat(e.NSDvalue);
    });
    setNSD(temp);
  }, [payments]);

  useEffect(() => {
    let pes = 0;
    let pas = 0;
    asd.map((e) => {
      if (e == "Quoted" || e == "Cancelled") {
        pes = pes + 1;
      } else {
        pas = pas + 1;
      }
    });
    setSQuotes(pas);
    setUQuotes(pes);
  }, [asd]);

  
  useEffect(() => {
    let pes = [];
    let quo = quotes2;

    let q = modify;
    producers.map((e) =>
      pes.push([
        e.name,
        q.filter((f) => f.User.name == e.name && f.Status == "Sold").length,
        quo.filter(
          (i) =>
            i.User.name == e.name &&
            i.QuoteStatuses.sort(function (a, b) {
              return b.id - a.id;
            })[0].Status == "Quoted"
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
  }, [modify, producers, quotes2]);
  useEffect(() => {
    let pes = [];
    let quo = quotes2;

    let q = modify;
    producers.map((e) =>
      pes.push([
        e.name,
        q.filter(
          (f) =>
            f.User.name == e.name &&
            f.Status !== "Quoted" &&
            f.Status !== "Cancelled"
        ).length,
        quo.filter((i) => i.User.name == e.name).length,
        e,
      ])
    );
    pes
      .sort(function (a, b) {
        return a[1] / a[2] - b[1] / b[2];
      })
      .reverse();
    setDataList(pes);
  }, [modify, quotes2]);

  return (
    <ProducerDashboardComponent
      NSD={NSD}
      setNSD={setNSD}
      asd={asd}
      setAsd={setAsd}
      pquotes={pquotes}
      setPquotes={setPquotes}
      uQuotes={uQuotes}
      setUQuotes={setUQuotes}
      sQuotes={sQuotes}
      setSQuotes={setSQuotes}
      dataList={dataList}
      setDataList={setDataList}
      status={status}
      setStatus={setStatus}
      payments={payments}
      setPayments={setPayments}
      dispatch={dispatch}
      google={google}
      producers={producers}
      UserId={UserId}
      modify={modify}
      quotes2={quotes2}
      userId={userId}
    />
  );
};

export default ProducerDashboard;
