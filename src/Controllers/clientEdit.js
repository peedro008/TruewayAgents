import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ClientEditComponent from "../Components/clientEdit";
import { GetClients } from "../Logic/Fetch";
function ClientEdit(props) {
  let Client = props.location.aboutProps;
  const [inputs, setInputs] = useState({
    name: Client.name,
    email: Client.email,
    tel: Client.tel,
    ClientId: Client.id,
    new: Client.new,
    notes: Client.notes,
    address: Client.address,
    dateOfBirth: Client.dateOfBirth,
    CompanyId: Client.CompanyId,
  });
  const [open, setOpen] = useState(false);
  const [neww, setNeww] = useState(false);
  const [address, setAddress] = useState("");
  const company = useSelector((state) => state.Companies);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
const dispatch = useDispatch	()
  const handleClick = () => {
    fetch(` https://truewayagentbackend.com/modifyClient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
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
        onOpenModal();
      })
      .then(()=>GetClients(dispatch))
      .catch((err) => {
        console.log(err);
      });
  };

  const options = company.map((e) => ({ value: e.id, label: e.name }));

  return (
    <ClientEditComponent
      Client={Client}
      inputs={inputs}
      setInputs={setInputs}
      open={open}
      setOpen={setOpen}
      neww={neww}
      setNeww={setNeww}
      company={company}
      onOpenModal={onOpenModal}
      onCloseModal={onCloseModal}
      handleClick={handleClick}
      options={options}
    />
  );
}

export default ClientEdit;
