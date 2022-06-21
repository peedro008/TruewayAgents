import React from "react";

import "../Css/css.css";

import {  BiMessageSquareAdd } from "react-icons/bi";
import Select from "react-select";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import {  Controller } from "react-hook-form";

import { BsChevronLeft } from "react-icons/bs";




function AddPaymentComponent({
    onOpenModal,

open,
optionsCa,
categories,
optionsC,
clients,
optionsL,
locations,
optionsQ,
optionT,
optionM,
quotes,
control,
handleSubmit,
onSubmit,
register,
errors,
schema,
handleNewClient,
customStyles,
neww,
setNeww,
method,
setMethod,
inputs,
setInputs,
form,
setForm,
payment,
newClient,
ClientSelected,
reload
}) {
  
  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">Add payment</p>
      </div>

      <div className="PAYMainBox">
        <div className="PAYBox">
          <div className="PAYInputCont" style={{ marginTop: "25px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p className="PAYtitle">Client Name</p>
              <BiMessageSquareAdd
                onClick={() => handleNewClient()}
                size="20"
                color="#28C76F"
                style={{ marginLeft: "70px" }}
              />
            </div>
            {!newClient ? (
              <>
                <Controller
                  control={control}
                  name="ClientId"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Select
                      defaultValue={optionsC.find(
                        (c) => c.value === ClientSelected
                      )}
                      value={optionsC.find((c) => c.value === ClientSelected)}
                      onChange={(val) => {
                        onChange(val.value);
                        setForm({ ...form, client: val.label, id:val.value });
                      }}
                      control={control}
                      options={clients.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      name={"ClientId"}
                      className="PAYselect"
                    />
                  )}
                />
            
         
              </>
            ) : (
              <>
                <input className="PAYsub-title" {...register("name")} />
                <p className="FORMerror">{errors.name?.message}</p>
              </>
            )}
          </div>
          {newClient ? (
            <div className="PAYBox" style={{ paddingTop: "25px" }}>
              <div className="PAYInputCont">
                <p className="PAYtitle">Email</p>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  placeholder="Email"
                  className="PAYsub-title"
                ></input>
                <p className="FORMerror">{errors.email?.message}</p>
              </div>
              <div className="PAYInputCont">
                <p className="PAYtitle">Phone</p>
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  className="PAYsub-title"
                ></input>
                <p className="FORMerror">
                  {errors.phone?.message.substring(0, 25)}
                </p>
              </div>

              {newClient && (
                <>
                <div
                className="AQinputContainer"
                
              >
                <p className="AQinputName">Category</p>
                <div className="AQyesNoContainer">
                  <div>
                  <Controller
              control={control}
              name="CategoryId"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select
                  value={optionsCa.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                  control={control}
                  options={categories.map((e) => ({
                    value: e.id,
                    label: e.name,
                  }))}
                  name={"CategoryId"}
                  className="PAYselect"
                  placeholder="Select Category"
                />
                  )}
                />
                    </div></div></div>
                
                
                
                <div
                  className="AQinputContainer"
                  style={{ marginLeft: "50px" }}
                >
                  <p className="AQinputName">New client</p>
                  <div className="AQyesNoContainer">
                    <div>
                      <input
                        className="AQcheckInput"
                        type="checkbox"
                        checked={neww}
                        name="new"
                        {...register("new")}
                        onChange={(event) => setNeww(!neww)}
                      />
                      {neww ? (
                        <p className="AQyesNoText">Yes</p>
                      ) : (
                        <p className="AQyesNoText">No</p>
                      )}
                    </div>
                  </div>
                </div>
                </> )}
            </div>
          ):
          <>
          <div className="PAYInputCont" style={{ marginTop: "25px" }}>
            <p className="PAYtitle">Quote</p>
            <Controller
              control={control}
              name="QuoteId"
             
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select
                isDisabled={form.client?false:true}
                  value={optionsQ.find((c) => c.value === value)}
                  onChange={(val) => {onChange(val.value); setForm({...form, aa:val.value, Category: val.Category})}}
                  control={control}
                  options={optionsQ}
                  name={"QuoteId"}
                  className="PAYselectQ"
                  placeholder="Select Quote"
                />
              )}
            />

            <p className="FORMerror">{errors.LocationId?.message}</p>
          </div>
           <div
           className="AQinputContainer"
           style={{ marginTop: "29px" }}
         >
           <p className="AQinputName">Category</p>
           <div className="AQyesNoContainer">
             <div>
             <Controller
         control={control}
         name="CategoryId"
         render={({ field: { onChange, onBlur, value, ref } }) => (
           <Select
           defaultValue={optionsCa.find(
            (c) => c.value === form.Category
          )}
             value={optionsCa.find((c) => c.value === value)}
             onChange={(val) => onChange(val.value)}
             control={control}
             options={categories.map((e) => ({
               value: e.id,
               label: e.name,
             }))}
             name={"CategoryId"}
             className="PAYselect"
             placeholder="Select Category"
           />
             )}
           />
               </div></div></div></>}
        </div>

        <div className="PAYBox" style={{ marginTop: "25px" }}>
          <div className="PAYInputCont">
            <p className="PAYtitle">Location</p>
            <Controller
              control={control}
              name="LocationId"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select
                  value={optionsL.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                  control={control}
                  options={locations.map((e) => ({
                    value: e.id,
                    label: e.name,
                  }))}
                  name={"LocationId"}
                  className="PAYselect"
                  placeholder="Select Location"
                />
              )}
            />

            <p className="FORMerror">{errors.LocationId?.message}</p>
          </div>

          <div className="PAYInputCont">
            <p className="PAYtitle">Amount</p>
            <input
              placeholder="Amount"
              className="AQinput"
              value={payment.amount}
              {...register("amount")}
            />
            <p className="FORMerror">{errors.amount?.message}</p>
          </div>

          <div className="PAYInputCont">
            <p className="PAYtitle">Payment type</p>
            <Controller
              control={control}
              name="type"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select
                  value={optionT.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                  control={control}
                  options={optionT.map((e) => ({
                    value: e.value,
                    label: e.label,
                  }))}
                  name={"type"}
                  className="PAYselect"
                  placeholder="Select method"
                />
              )}
            />
            <p className="FORMerror">{errors.type?.message}</p>
          </div>
          <div className="PAYInputCont">
            <p className="PAYtitle">Payment Method</p>
            <Controller
              control={control}
              name="method"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select
                  value={optionM.find((c) => c.value === value)}
                  onChange={(val) => {
                    onChange(val.value);
                    setMethod(val.value);
                  }}
                  control={control}
                  options={optionM.map((e) => ({
                    value: e.value,
                    label: e.label,
                  }))}
                  name={"method"}
                  className="PAYselect"
                  placeholder="Select method"
                />
              )}
            />

            <p className="FORMerror">{errors.method?.message}</p>
            {method == "credit/debit" && (
              <>
                <div style={{ marginTop: "20px", height: "max-content" }}>
                  <p className="PAYtitle">Credit card fee</p>
                  <input
                    className="PAYsub-title"
                    {...register("creditCardFee")}
                  />
                  <p className="FORMerror">{errors.creditCardFee?.message}</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="AQwhiteContainer11">
          <div className="AQinputContainer">
            <p className="AQinputName">NSD</p>
            <div className="AQyesNoContainer">
              <div>
                <input
                  className="AQcheckInput"
                  type="checkbox"
                  checked={inputs.NSD}
                  value={inputs.NSD}
                  key="NSD"
                  name="NSD"
                  onChange={(event) =>
                    setInputs({ ...inputs, NSD: !inputs.NSD })
                  }
                />
                {inputs.NSD ? (
                  <p className="AQyesNoText">Yes</p>
                ) : (
                  <p className="AQyesNoText">No</p>
                )}
              </div>
              {inputs.NSD && (
                <>
                  <input
                    className="AQinput2"
                    placeholder="How much?"
                    key="NSDamount"
                    name="NSDamount"
                    defaultValue={0}
                    value={inputs.NSDamount}
                    {...register("NSDamount")}
                  />
                  <p className="FORMerror">{errors.NSDamount?.message}</p>
                  <p className="FORMerror">{errors.ClientId?.message}</p>
                </>
              )}
            </div>
          </div>

          <div className="AQinputContainer">
            <p className="AQinputName">MVR</p>
            <div className="AQyesNoContainer">
              <div>
                <input
                  className="AQcheckInput"
                  type="checkbox"
                  checked={inputs.MVR}
                  key="MVR"
                  name="MVR"
                  onChange={(event) =>
                    setInputs({ ...inputs, MVR: !inputs.MVR })
                  }
                />
                {inputs.MVR ? (
                  <p className="AQyesNoText">Yes</p>
                ) : (
                  <p className="AQyesNoText">No</p>
                )}
              </div>
              {inputs.MVR && (
                <>
                  <input
                    className="AQinput2"
                    placeholder="How much"
                    key="MVRvalue"
                    name="MVRvalue"
                    defaultValue={0}
                    value={inputs.MVRvalue}
                    {...register("MVRvalue")}
                  />
                  <p className="FORMerror">{errors.NSDamount?.message}</p>{" "}
                </>
              )}
            </div>
          </div>

          <div className="AQinputContainer1">
            <p className="AQinputName">PIP</p>
            <div className="AQyesNoContainer">
              <div>
                <input
                  className="AQcheckInput"
                  type="checkbox"
                  checked={inputs.PIP}
                  value={inputs.PIP}
                  key="PIP"
                  name="PIP"
                  onChange={(event) =>
                    setInputs({ ...inputs, PIP: !inputs.PIP })
                  }
                />
                {inputs.PIP ? (
                  <p className="AQyesNoText">Yes</p>
                ) : (
                  <p className="AQyesNoText">No</p>
                )}
              </div>
              {inputs.PIP && (
                <>
                  <input
                    className="AQinput2"
                    placeholder="PIP value"
                    defaultValue={0}
                    key="dealerSalePerson"
                    name="dealerSalePerson"
                    {...register("PIPvalue")}
                  />
                  <p className="FORMerror">{errors.NSDamount?.message}</p>
                </>
              )}
            </div>
          </div>
        </div>

        <Modal open={open} onClose={reload} center classNames={"modal"}>
          <div className="modal">
            <img
              src={Icon}
              style={{
                width: "35px",
                alignSelf: "center",
                marginTop: "25px",
                marginBottom: "10px",
              }}
            />

            <p className="modalText">Payment added successfully</p>

            <button className="modalButton" onClick={reload}>
              Continue
            </button>
          </div>
        </Modal>

        <BsChevronLeft
          color="grey"
          style={{
            minWidth: "25px",
            minHeight: "25px",
            position: "fixed",
            zIndex: 9,
            left: "80px",
            top: "17px",
            alignSelf: "flex-start",
          }}
          onClick={() => window.history.go(-1)}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: "50px",
          top: "76px",
          display: "flex",
        }}
      >
        <button onClick={handleSubmit(onSubmit)} className="PAYbutton">
          <p className="PAYbuttonText">Add payment</p>
        </button>
      </div>
    </div>
  );
}

export default AddPaymentComponent;
