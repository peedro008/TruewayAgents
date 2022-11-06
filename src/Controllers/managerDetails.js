import axios from "axios";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import useGoogleCharts from "../Charts/useGoogleCharts";
import ManagerDetailsComponent from "../Components/managerDetails";

const ManagerDetails = (props) => {
  let producer = props.location.aboutProps;

  const userId = useSelector((state) => state.UserId);
  const PRD = useSelector((state) => state.Producers);
  const [Producer, setProducer] = useState(null);
  const google = useGoogleCharts();

  const [mquotes, setMquotes] = useState("");
  const [yquotes, setYquotes] = useState("");
  const [lmquotes, setLmquotes] = useState("");
  const [mUquotes, setMUquotes] = useState("");
  const [yUquotes, setYUquotes] = useState("");
  const [lUmquotes, setLmUquotes] = useState("");



  const [dots1, setDots1] = useState(false);
  const [dots2, setDots2] = useState(false);
  const [dots3, setDots3] = useState(false);
  const [dots1V, setDots1V] = useState(1);
  const [dots2V, setDots2V] = useState(1);
  const [dots3V, setDots3V] = useState(1);
  const [NSD, setNSD] = useState(0);
  const [LmNSD, setLmNSD] = useState(0);
  const [yNSD, setYNSD] = useState(0);

  useEffect(() => {
    producer
      ? setProducer(producer)
      : setProducer(PRD?.filter((e) => e.UserId == userId)[0]);
  }, [userId]);

  useEffect(() => {
    const date = new Date();
    const DATE =
      date.getFullYear() +
      (date.getMonth() + 1 > 9 ? "-" : "-0") +
      (date.getMonth() + 1) +
      "-01";
    let MY =
      date.getFullYear() +
      (date.getMonth() + 1 > 9 ? "-" : "-0") +
      (date.getMonth() + 1) +
      "-01";
    let NMY =
      date.getFullYear() +
      (date.getMonth() + 2 > 9 ? "-" : "-0") +
      (date.getMonth() + 2) +
      "-01";
    let LMY =
      date.getFullYear() +
      (date.getMonth() > 9 ? "-" : "-0") +
      date.getMonth() +
      "-01";

    axios
      .get(
        `https://www.truewayagentbackend.com/getUserAverage?UserId=${producer.UserId}+&dateFrom=${MY}&dateTo=${NMY}`
      )
      .then(function (response) {
        let paz = response.data;

        setNSD(paz.NSDcomm);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        `https://www.truewayagentbackend.com/getUserAverage?UserId=${producer.UserId}+&dateFrom=${LMY}&dateTo=${MY}`
      )
      .then(function (response) {
        let paz = response.data;

        setLmNSD(paz.NSDcomm);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        `https://www.truewayagentbackend.com/getUserAverage?UserId=${producer.UserId}+&dateFrom=01-01-${
          date.getFullYear() - 1
        }&dateTo=01-01-${date.getFullYear()}`
      )
      .then(function (response) {
        let paz = response.data;

        setYNSD(paz.NSDcomm);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        `https://www.truewayagentbackend.com/getUsersAverage?&dateFrom=${MY}&dateTo=${NMY}`
      )
      .then(function (response) {
        let paz = response.data;

        setMUquotes(paz.filter(e=>e.id == producer.UserId)[0].unsold);
        setMquotes(paz.filter(e=>e.id == producer.UserId)[0].sold);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        `https://www.truewayagentbackend.com/getUsersAverage?&dateFrom=${LMY}&dateTo=${MY}`
      )
      .then(function (response) {
        let paz = response.data;

        setLmquotes(paz.filter(e=>e.id == producer.UserId)[0].sold);
        setLmUquotes(paz.filter(e=>e.id == producer.UserId)[0].unsold);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        `https://www.truewayagentbackend.com/getUsersAverage?&dateFrom=01-01-${
          date.getFullYear() - 1
        }&dateTo=01-01-${date.getFullYear()}`
      )
      .then(function (response) {
        let paz = response.data;
        setYquotes(paz.filter(e=>e.id == producer.UserId)[0].sold);
        setYUquotes(paz.filter(e=>e.id == producer.UserId)[0].unsold);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  return (
    <ManagerDetailsComponent
      mquotes={mquotes}
      yquotes={yquotes}
      lmquotes={lmquotes}
      mUquotes={mUquotes}
      yUquotes={yUquotes}
      lUmquotes={lUmquotes}
      NSD={NSD}
      LmNSD={LmNSD}
      yNSD={yNSD}
      dots1={dots1}
      setDots1={setDots1}
      dots2={dots2}
      setDots2={setDots2}
      dots3={dots3}
      setDots3={setDots3}
      dots1V={dots1V}
      setDots1V={setDots1V}
      dots2V={dots2V}
      setDots2V={setDots2V}
      dots3V={dots3V}
      setDots3V={setDots3V}
      Producer={Producer}
      google={google}
    />
  );
};
export default ManagerDetails;
