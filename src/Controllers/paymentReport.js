import axios from "axios";
import React, { useEffect, useState } from "react";

import moment from "moment";
import { useSelector } from "react-redux";

import PaymentReportComponent from "../Components/paymentReport";
const PaymentReport = () => {
  const userRole = useSelector((state) => state.userRole);
  const [payments, setPayments] = useState([]);
  const [paymentsFil, setPaymentsFil] = useState([]);
  const [dateF, setDateF] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [deleteConf, setDeleteConf] = useState("");
  const [deletedOne, setDeletedOne] = useState(null);
  const producers = useSelector((state) => state.Producers);
  const clients = useSelector((state) => state.Clients);
  const locations = useSelector((state) => state.Locations);
  const [paginator, setPaginator] = useState(1);
  
  const [filterValues, setFilterValues] = useState({
    offset: 0,
  });
  const [filterCheck, setFilterCheck] = useState({
    date: false,
    ClientId: false,
    ClientTel: false,
    ProducerId: false,
    LocationId: false,
    Method: false,
    Type: false,
  });
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const handleDelete = (e) => {
    setDeletedOne(e);
    onOpenModal();
  };
  const handleDeleteModal = (e) => {
    deleteClient({ PaymentId: deletedOne });
    window.location.reload();
  };
  const deleteClient = (data) => {
    data && console.log(data);
    fetch(` https://truewayagentbackend.com/deletePayment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();

          if (res.status !== 200) {
            console.log("error");
          } else {
            console.log(jsonRes);
          }
        } catch (err) {
          console.log(err);
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let params = new URLSearchParams();
    params.append("offset", 0);
    axios
      .get(` https://truewayagentbackend.com/getPaymentsReport`, { params })
      .then(function (response) {
        setPayments(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(()=>{
    let params = new URLSearchParams();
    params.append("offset", (paginator-1)*20);
    axios
      .get(` https://truewayagentbackend.com/getPaymentsReport`, { params })
      .then(function (response) {
        setPayments(response.data);
      })

      .catch((error) => {
        setPayments([]);
        console.log(error);
      });
  },[paginator])


  const filterSubmit = (e) => {
    let temp = payments;
    if (e.dateFrom && e.dateTo) {
      temp = temp.filter((h) =>
        moment(`${h.date}`).isBetween(
          `${e.dateFrom}`,
          `${e.dateTo}`,
          undefined,
          "[]"
        )
      );
    }
    if (e.ClientId) {
      temp = temp.filter((h) => h.ClientId == e.ClientId);
    }
    if (e.ClientTel) {
      temp = temp.filter((h) => h.ClientId == e.ClientTel);
    }
    if (e.LocationId) {
      temp = temp.filter((h) => h.LocationId == e.LocationId);
    }
    if (e.ProducerId) {
      temp = temp.filter((h) => h.UserId == e.ProducerId);
    }
    if (e.Type) {
      temp = temp.filter((h) => h.type == e.Type);
    }
    if (e.Method) {
      temp = temp.filter((h) => h.method == e.Method);
    }
    setPaymentsFil(temp);

    setFiltered(true);
  };
  useEffect(() => {
    filterSubmit(filterValues);
  }, [filterValues, payments]);
  const closeCloud = (e) => {
    setFilterValues(e);
  };

  return (
  <PaymentReportComponent
    userRole={userRole}
    payments={payments}
    paymentsFil={paymentsFil}
    dateF={dateF}
    openFilter={openFilter}
    filtered={filtered}
    deleteConf={deleteConf}
    deletedOne={deletedOne}
    producers={producers}
    clients={clients}
    locations={locations}
    setPayments={setPayments}
    setPaymentsFil={setPaymentsFil}
    setDateF={setDateF}
    setOpenFilter={setOpenFilter}
    setFiltered={setFiltered}
    setDeleteConf={setDeleteConf}
    setDeletedOne={setDeletedOne}
    filterValues={filterValues}
    setFilterValues={setFilterValues}
    filterCheck={filterCheck}
    setFilterCheck={setFilterCheck}
    open={open}
    onCloseModal={onCloseModal}
    handleDelete={handleDelete}
    handleDeleteModal={handleDeleteModal}
    deleteClient={deleteClient}
    filterSubmit={filterSubmit}
    closeCloud={closeCloud}
    paginator={paginator}
    setPaginator={setPaginator}
  />
  );
};
export default PaymentReport;
