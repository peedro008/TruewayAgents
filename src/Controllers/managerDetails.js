import axios from "axios";
import React, { useEffect, useState } from "react";


import useGoogleCharts from "../Charts/useGoogleCharts";
import ManagerDetailsComponent from "../Components/managerDetails";

const ManagerDetails = (props) => {
  let Producer = props.location.aboutProps;
  const [mquotes, setMquotes] = useState([]);
  const [payments, setPayments] = useState([])
  const [mstat, setMstat] = useState([]);
  const [ystat, setYstat] = useState([]);
  const [yquotes, setYquotes] = useState([]);
  const [dots1, setDots1] = useState(false);
  const [dots2, setDots2] = useState(false);
  const [dots3, setDots3] = useState(false);
  const [dots1V, setDots1V] = useState(0);
  const [dots2V, setDots2V] = useState(0);
  const [dots3V, setDots3V] = useState(1);
  const [NSD, setNSD] = useState(0);
  const [yNSD, setYNSD] = useState(0);
  const [mpay, setMpay] = useState([])
  const [ypay, setYpay] = useState([])
  const [quotes, setQuotes] = useState([]);
  const [modify, setModify] = useState([]);
  const google = useGoogleCharts();
  
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/producerQuotes?UserId=${Producer.UserId}`
      )
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
      .get(`http://localhost:8080/getStatus`)
      .then(function (response) {
        let paz = response.data;

        setModify(paz.filter((e) => e.UserId == Producer.UserId));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect (()=>{
    axios.get(`http://localhost:8080/getUserPayment?UserId=${Producer.UserId}`)
    .then(function(response){
        setPayments(response.data)
       
        
        
    })
    .catch(error=>{
      console.log(error)  
    })
},[Producer])

  useEffect(() => {
    const date = new Date();
    const DATE =
      date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate();
    let yq = modify;
    let mq = modify;
    setYquotes(
      yq.filter((e) => e.date.substring(0, 4) == DATE.substring(0, 4))
    );
    setMquotes(
      mq.filter((e) => e.date.substring(0, 7) == DATE.substring(0, 7))
    );
  }, [quotes, Producer]);
  useEffect(() => {
   const date =  new Date()
        const DATE = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-' + date.getDate();
        let ys = modify
        let ms = modify
        setYstat(ys.filter(e=>e.date.substring(0,4)==DATE.substring(0,4)))
        setMstat(ms.filter(e=>e.date.substring(0,7)==DATE.substring(0,7)))
        

        let yq = quotes
        let mq = quotes
        setYquotes(yq.filter(e=>e.date.substring(0,4)==DATE.substring(0,4)))
        setMquotes(mq.filter(e=>e.date.substring(0,7)==DATE.substring(0,7)))

        let yp = payments
        let mp = payments
        setYpay(yp.filter(e=>e.date.substring(0,4)==DATE.substring(0,4)))
        setMpay(mp.filter(e=>e.date.substring(0,7)==DATE.substring(0,7)))
  }, [mquotes]);

  useEffect(() => {
    let pes = 0
    let pas = 0
  
    mpay.map(e=>{
        if(e.Category.name!=="HEALTH INSURANCE"){
        if(e.Quote && e.Category.name=="HOMEOWNERS"){
            pes+=10
        }
        if(e.NSDvalue!==""){
            
            pes+=5*e.NSDamount
        }}
    })
    ypay.map(e=>{
        if(e.Category.name!=="HEALTH INSURANCE"){
        if(e.Quote && e.Category.name=="HOMEOWNERS"){
            pas+=10
        }
        if(e.NSDvalue!==""){
            
            pas+=5*e.NSDamount
        }}
    })
    setNSD(pes)
    setYNSD(pas)
}, [quotes, Producer, modify,ystat, mstat])
  

  return (
<ManagerDetailsComponent
mquotes={mquotes}
setMquotes={setMquotes}
payments={payments}
setPayments={setPayments}
mstat={mstat}
setMstat={setMstat}
ystat={ystat}
setYstat={setYstat}
yquotes={yquotes}
setYquotes={setYquotes}
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
mpay={mpay}
setMpay={setMpay}
ypay={ypay}
setYpay={setYpay}
quotes={quotes}
setQuotes={setQuotes}
modify={modify}
setModify={setModify}
google={google}
Producer={Producer}

/>
  );
};
export default ManagerDetails;
