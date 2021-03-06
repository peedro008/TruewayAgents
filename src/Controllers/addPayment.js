import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";



import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AddPaymentComponent from "../Components/addPayment";

const schema = yup
  .object({
    name: yup.string().optional().min(6),
    email: yup.string().email().optional().min(6),
    phone: yup.number().optional(),
    ClientId: yup.number().optional().nullable(true),
    amount: yup.string().required(),
    type: yup.string().required(),
    method: yup.string().required(),
    creditCardFee: yup.string().optional().default("0"),
    LocationId: yup.number().positive().integer().required(),
    UserId: yup.number().required(),
    new: yup.bool().optional(),
    PIPvalue: yup.string().optional().default("0"),
    NSDamount: yup.string().optional().default("0"),
    MVRvalue: yup.string().optional().default("0"),
    QuoteId: yup.number().optional().nullable(true),
    CategoryId: yup.number().optional().nullable(true),
  })
  .required();


function AddPayment(props) {
  const ClientSelected = props.location.aboutProps?.id;
  const clientName = props.location.aboutProps?.name
  const dispatch = useDispatch();
  const [neww, setNeww] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const [method, setMethod] = useState("");
  const [payment, setPayment] = useState({ creditCardFee: 0 });
  const userId = useSelector((state) => state.UserId);
 
  const [newClient, setNewClient] = useState(false);
  const [form, setForm] = useState({ res: "res" });
  const [inputs, setInputs] = useState({});
  const [quotes, setQuotes] = useState([]);

  const  categories  = useSelector(state=>state.Categories)
  const  locations  = useSelector(state=>state.Locations)
  const  clients  = useSelector(state=>state.Clients)
  let [total, setTotal] = useState(0)
  let [totalValues, setTotalValues] = useState({})
  useEffect(() => {


    setTotal((totalValues.amount?parseFloat(totalValues.amount&&totalValues.amount):0)+
    (totalValues.PIPvalue?parseFloat(totalValues.PIPvalue&&totalValues.PIPvalue):0)+
    (totalValues.MVRvalue?parseFloat(totalValues.MVRvalue&&totalValues.MVRvalue):0)+
    (totalValues.creditCardFee?parseFloat(totalValues.creditCardFee&&totalValues.creditCardFee):0)+
    (totalValues.NSDamount?parseFloat(totalValues.NSDamount&&totalValues.NSDamount):0))
 
  }, [totalValues])
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

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
  useEffect(() => {
    setValue("UserId", `${userId}`);
  }, [userId]);

  useEffect(() => {
        if(ClientSelected){
        setForm({...form, client: clientName, id: ClientSelected})
        setValue("ClientId", `${ClientSelected}`)};
      

      
  }, [ClientSelected]);

  useEffect(() => {
    axios
      .get(` https://truewayagentbackend.com/clientQuotes?client=${form.id}`)
      .then(function (response) {

        setQuotes(response.data)
      
      })
      .catch((error) => {
        setQuotes([])
      });
  }, [form]);
 useEffect(() => {
    setPayment({ ...payment, UserId: userId });
  }, [userId]);

  const temp = () => {
    setNewClient(true);
    setValue("ClientId", null);
    setValue("QuoteId", null);
  };
useEffect(()=>{
  
  setValue("CategoryId", form.Category)
},[form])
const handleNewClient = () => {
  setValue("ClientId", null);
  setNewClient(!newClient);
};
  const optionM = [
    { value: "credit/debit", label: "credit/debit" },
    { value: "EFT", label: "EFT" },
    { value: "Cash", label: "Cash" },
  ];
  const optionT = [
    { value: "Monthly Payment", label: "Monthly Payment" },
    { value: "Down Payment", label: "Down Payment" },
    { value: "Endorsement", label: "Endorsement" },
    { value: "Renew Down", label: "Renew Down" },
  ];


  const onSubmit = (data) => {
    if (newClient == false) {
      fetch(` https://truewayagentbackend.com/addPayment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => onOpenModal());
    } else {
      fetch(` https://truewayagentbackend.com/addClientPayment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      onOpenModal();
    }
  };
  const optionsCa = categories.map((e) => ({ value: e.id, label: e.name }));
  const optionsC = clients.map((e) => ({ value: e.id, label: e.name }));
  const optionsL = locations.map((e) => ({ value: e.id, label: e.name }));
  const optionsQ = quotes.map((e) => ({ value: e.id, label: `${e.id}  |  ${e.Category.name}  |  ${e.date}`, Category:e.Category.id}));

  return <AddPaymentComponent 
    onOpenModal={onOpenModal}

    open={open}
    optionsCa={optionsCa}
    categories={categories}
    optionsC={optionsC}
    clients={clients}
    optionsL={optionsL}
    locations={locations}
    optionsQ={optionsQ}
    optionT={optionT}
    optionM={optionM}
    quotes={quotes}
    control={control}
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
    register={register}
    errors={errors}
    schema={schema}  
    handleNewClient={handleNewClient}
    customStyles={customStyles}
    neww={neww}
    setNeww={setNeww}
    method={method}
    setMethod={setMethod}
    inputs={inputs}
    setInputs={setInputs}
    form={form}
    setForm={setForm}
    payment={payment}
    newClient={newClient}
    ClientSelected={ClientSelected}
    reload={reload}
    total={total}
setTotal={setTotal}
totalValues={totalValues}
setTotalValues={setTotalValues}
  />
 
}

export default AddPayment;
