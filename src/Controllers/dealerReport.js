import React, { useEffect, useState } from "react";
import moment from "moment";
import DealerReportComponent from "../Components/dealerReport";
import { useSelector } from "react-redux";
const DealerReport = () => {
  const [dealerFil, setDealerFil] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [modalPay, setModalPay] = useState("")
  const [selectedDealer, setSelectedDealer] = useState(null)
  const [filterValues, setFilterValues ] = useState({
      dateFrom:null,
       LocationId:null,
  })
  const [filterCheck, setFilterCheck ] = useState({
      date:false,
      LocationId:false,

  })
  ;
  const clients = useSelector((state) => state.Clients);

  const dealerSalePerson = useSelector((state) => state.DealerSalesPersons);
  const Dealers = useSelector((state) => state.Dealers);
  const handleOpenModal = (e) =>{
    setSelectedDealer({id:e.id})
    onOpenModal()
  }
  const handlePayModal = ()=>{
    PayDealer(selectedDealer)
    window.location.reload();

}
  const PayDealer = (data) => {
    fetch(`http://localhost:8080/paidDealer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
     
  }



  const filterSubmit = (e) => {
      let temp = Dealers
      if(e.dateFrom&&e.dateTo){
          temp=temp.filter(h=>moment(`${h.datePaid}`).isBetween(`${e.dateFrom}`,`${e.dateTo}`, undefined, '[]'))
      }
      if(e.dateFrom1&&e.dateTo1){
        temp=temp.filter(h=>moment(`${h.dateSold}`).isBetween(`${e.dateFrom1}`,`${e.dateTo1}`, undefined, '[]'))
    }

      if(e.ClientId){
          temp=temp.filter(h=>h.ClientId==e.ClientId)
      }
      
      if(e.DealerSalePersonId){
        temp=temp.filter(h=>h.DealerSalePersonId==e.DealerSalePersonId)
        }    
        if(e.paid){
            temp=temp.filter(h=>h.paid==e.paid)
        }


      setDealerFil(temp)

  }
  useEffect(()=>{
      filterSubmit(filterValues)
  },[filterValues,Dealers])
  const closeCloud = (e)=>{
      setFilterValues(e)
       }
  return (
    <DealerReportComponent
    dealerFil={dealerFil}
    openFilter={openFilter}
    open={open}
    modalPay={modalPay}
    selectedDealer={selectedDealer}
    filterValues={filterValues}
    filterCheck={filterCheck}
    setDealerFil={setDealerFil}
    setOpenFilter={setOpenFilter}
    setOpen={setOpen}
    setModalPay={setModalPay}
    setSelectedDealer={setSelectedDealer}
    setFilterValues={setFilterValues}
    setFilterCheck={setFilterCheck}
    onCloseModal={onCloseModal}
    clients={clients}
    dealerSalePerson={dealerSalePerson}
    Dealers={Dealers}
    handleOpenModal={handleOpenModal}
    handlePayModal={handlePayModal}
    PayDealer={PayDealer}
    filterSubmit={filterSubmit}
    closeCloud={closeCloud}
    />
  );
};
export default DealerReport;