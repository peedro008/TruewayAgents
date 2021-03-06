import axios from "axios";

import React, { useEffect, useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useSelector } from "react-redux";
import Select from "react-select";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import { NavLink } from "react-router-dom";
import { useForm, Controller, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AddQuoteComponent from "../Components/addQuote";

const schema = yup
  .object({
    LocationId: yup.number().required(),
    CategoryId: yup.number().required(),
    ClientId: yup.number().optional().nullable(true),
    CompanyId: yup.number().required(),
    UserId: yup.number().required(),
    DealerSalePersonId: yup.number().optional().nullable().default(null),
    down: yup.string().required(),
    monthlyPayment: yup.string().optional(),
    NSDamount: yup.string().optional().default("0"),
    Bound: yup.bool().required(),
    PIPvalue: yup.string().optional().default("0"),
    TotalPremium: yup.string().optional().default("0"),
    MVRvalue: yup.string().optional().default("0"),
    name: yup.string().optional().min(1),
    email: yup.string().optional().email().min(1),
    tel: yup.string().optional().min(6),
    new: yup.bool().optional(),
  })
  .required();

const AddQuote = () => {
  const [neww, setNeww] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const userId = useSelector((state) => state.UserId);
  const [newClient, setNewClient] = useState(false);
  const [inputs, setInputs] = useState({ Bound: false });

  const [ERR, setERR] = useState({ ClientId: false });
  const [dealerData, setDealerData] = useState({
    ClientId: null,
    DealerSalePersonId: null,
    amount: 0,
    paid: false,
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const categories = useSelector((state) => state.Categories);
  const companies = useSelector((state) => state.Companies);
  const clients = useSelector((state) => state.Clients);

  const dealers = useSelector((state) => state.DealerSalesPersons);
  const locations = useSelector((state) => state.Locations);
  useEffect(() => {
    setValue("UserId", parseInt(userId));
  }, []);
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 30,
      minHeight: 30,
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        marginTop: "-5px",
      };
    },
    indicatorSeparator: (base) => ({
      ...base,
      height: "0px",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      marginTop: "-4px",
    }),
  };

  const reload = () => {
    window.location.reload();
  };

  const reset = (event) => {
    const value = event.target.value;
    setInputs({
      ...inputs,
      [event.target.name]: !value,
    });
  };

  const onSubmit = (data) => {
    (!data.PIPvalue || data.PIPvalue == "") && setValue("PIPvalue", "0");
    (!data.NSDamount || data.NSDamount) == "" && setValue("NSDamount", "0");
    (!data.MVRvalue || data.MVRvalue == "") && setValue("MVRvalue", "0");
    !data.Bound && setValue("Bound", false);
    !data.totalPremium ||
      (data.totalPremium == "" && setValue("totalPremium", "0"));
    !data.monthlyPayments ||
      (data.monthlyPayments == "" && setValue("monthlyPayment", "0"));
    setValue("Bound", `${inputs.Bound}`);

    fetch(` https://truewayagentbackend.com/addQuote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        
        handleDealer(data.ClientId);
        
      })

      onOpenModal();
  };
  const handleDealer = (x=null) => {
    inputs.DealerSalePerson &&
    !x?
      fetch(` https://truewayagentbackend.com/addDealer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dealerData),
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
        })
        :
        fetch(` https://truewayagentbackend.com/addDealer`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ClientId:x, DealerSalePersonId:dealerData.DealerSalePersonId, amount: dealerData.amount, paid:dealerData.paid}),
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
            }) 
  };
  const handleNewClient = () => {
    setValue("ClientId", null);
    setNewClient(!newClient);
  };
  const optionsCa = categories?.map((e) => ({ value: e.id, label: e.name }));
  const optionsCo = companies?.map((e) => ({ value: e.id, label: e.name }));
  const optionsL = locations?.map((e) => ({ value: e.id, label: e.name }));
  const optionsD = dealers?.map((e) => ({ value: e.id, label: e.name }));
  const optionsC = clients?.map((e) => ({ value: e.id, label: e.name }));

  return (
    <AddQuoteComponent
      reset={reset}
      onSubmit={onSubmit}
      handleNewClient={handleNewClient}
      register={register}
      handleSubmit={handleSubmit}
      control={control}
      errors={errors}
      reload={reload}
      optionsCa={optionsCa}
      optionsCo={optionsCo}
      optionsL={optionsL}
      optionsD={optionsD}
      optionsC={optionsC}
      neww={neww}
      open={open}
      setNeww={setNeww}
      setOpen={setOpen}
      onCloseModal={onCloseModal}
      newClient={newClient}
      setNewClient={setNewClient}
      inputs={inputs}
      ERR={ERR}
      setInputs={setInputs}
      categories={categories}
      companies={companies}
      clients={clients}
      dealers={dealers}
      locations={locations}
      dealerData={dealerData}
      setDealerData={setDealerData}
    />
  );
};

export default AddQuote;
