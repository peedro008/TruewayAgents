import axios from "axios";
import React, { useEffect, useState } from "react";

import useGoogleCharts from "../Charts/useGoogleCharts";
import ProducerDetailsComponent from "../Components/producerDetails";

const ProducerDetails = (props) => {
  let Producer = props.location.aboutProps;
  const google = useGoogleCharts();
  const [quotes, setQuotes] = useState([]);
  const [payments, setPayments] = useState([]);
  const [mquotes, setMquotes] = useState([]);
  const [modify, setModify] = useState([]);
  const [mstat, setMstat] = useState([]);
  const [yquotes, setYquotes] = useState([]);
  const [mpay, setMpay] = useState([]);
  const [ypay, setYpay] = useState([]);
  const [ystat, setYstat] = useState([]);
  const [dots1, setDots1] = useState(false);
  const [dots2, setDots2] = useState(false);
  const [dots3, setDots3] = useState(false);
  const [dots1V, setDots1V] = useState(0);
  const [dots2V, setDots2V] = useState(0);
  const [dots3V, setDots3V] = useState(1);
  const [NSD, setNSD] = useState(0);
  const [yNSD, setYNSD] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/producerQuotes?UserId=${Producer.UserId}`)
      .then(function (response) {
        setQuotes(response.data);

        console.log(Producer);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Producer]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getUserPayment?UserId=${Producer.UserId}`)
      .then(function (response) {
        setPayments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Producer]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getStatus`)
      .then(function (response) {
        let paz = response.data;

        setModify(paz.filter((e) => e.UserId == Producer.UserId));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const date = new Date();
    const DATE =
      date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate();
    let ys = modify;
    let ms = modify;
    setYstat(ys.filter((e) => e.date.substring(0, 4) == DATE.substring(0, 4)));
    setMstat(ms.filter((e) => e.date.substring(0, 7) == DATE.substring(0, 7)));

    let yq = quotes;
    let mq = quotes;
    setYquotes(
      yq.filter((e) => e.date.substring(0, 4) == DATE.substring(0, 4))
    );
    setMquotes(
      mq.filter((e) => e.date.substring(0, 7) == DATE.substring(0, 7))
    );

    let yp = payments;
    let mp = payments;
    setYpay(yp.filter((e) => e.date.substring(0, 4) == DATE.substring(0, 4)));
    setMpay(mp.filter((e) => e.date.substring(0, 7) == DATE.substring(0, 7)));
  }, [quotes, Producer, modify, payments]);

  useEffect(() => {
    let pes = 0;
    let pas = 0;

    mpay.map((e) => {
      if (e.Category.name !== "HEALTH INSURANCE") {
        if (e.Quote && e.Category.name == "HOMEOWNERS") {
          pes += 10;
        }
        if (e.NSDvalue !== "") {
          pes += 5 * e.NSDamount;
        }
      }
    });
    ypay.map((e) => {
      if (e.Category.name !== "HEALTH INSURANCE") {
        if (e.Quote && e.Category.name == "HOMEOWNERS") {
          pas += 10;
        }
        if (e.NSDvalue !== "") {
          pas += 5 * e.NSDamount;
        }
      }
    });
    setNSD(pes);
    setYNSD(pas);
  }, [quotes, Producer, modify, ystat, mstat]);

  return (
    <ProducerDetailsComponent
      quotes={quotes}
      setQuotes={setQuotes}
      payments={payments}
      setPayments={setPayments}
      mquotes={mquotes}
      setMquotes={setMquotes}
      modify={modify}
      setModify={setModify}
      mstat={mstat}
      setMstat={setMstat}
      yquotes={yquotes}
      setYquotes={setYquotes}
      mpay={mpay}
      setMpay={setMpay}
      ypay={ypay}
      setYpay={setYpay}
      ystat={ystat}
      setYstat={setYstat}
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
      NSD={NSD}
      setNSD={setNSD}
      yNSD={yNSD}
      setYNSD={setYNSD}
      Producer={Producer}
      google={google}
    />
  );
};
export default ProducerDetails;
