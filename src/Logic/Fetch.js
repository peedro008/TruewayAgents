import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLocations,
  getCategories,
  getCompanies,
  getClients,
  getDealers,
  getDealerSalePerson,
  getProducers,
  getManagers,
  getUsers,
  getQuotes,
  getQuoteStatuses,
  getPayments,
  getDailyReports,
  getDeposits,
} from "../Redux/actions";
const FetchAll = () => {
  const dispatch = useDispatch();
  axios
    .get(`http://localhost:8080/getCategories`)
    .then(function (response) {
      dispatch(getCategories(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`http://localhost:8080/Quotes`)
    .then(function (response) {
      dispatch(getQuotes(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`http://localhost:8080/getLocations`)
    .then(function (response) {
      dispatch(getLocations(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`http://localhost:8080/getCompany`)
    .then(function (response) {
      dispatch(getCompanies(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`http://localhost:8080/clients`)
    .then(function (response) {
      dispatch(getClients(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`http://localhost:8080/getProducer`)
    .then(function (response) {
      dispatch(getProducers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`http://localhost:8080/getManager`)
    .then(function (response) {
      dispatch(getManagers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`http://localhost:8080/getStatus`)
    .then(function (response) {
      dispatch(getQuoteStatuses(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`http://localhost:8080/getDeposit`)
    .then(function (response) {
      dispatch(getDeposits(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`http://localhost:8080/getDailyReports`)
    .then(function (response) {
      dispatch(getDailyReports(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`http://localhost:8080/getPayments`)
    .then(function (response) {
      dispatch(getPayments(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`http://localhost:8080/Users`)
    .then(function (response) {
      dispatch(getUsers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`http://localhost:8080/getDealers`)
    .then(function (response) {
      dispatch(getDealers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`http://localhost:8080/getDealerSalePerson`)
    .then(function (response) {
      dispatch(getDealerSalePerson(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetCategories = (dispatch) => {
  axios
    .get(`http://localhost:8080/getCategories`)
    .then(function (response) {
      dispatch(getCategories(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetQuotes = (dispatch) => {
  axios
    .get(`http://localhost:8080/Quotes`)
    .then(function (response) {
      dispatch(getQuotes(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetLocations = (dispatch) => {
  axios
    .get(`http://localhost:8080/getLocations`)
    .then(function (response) {
      dispatch(getLocations(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetCompany = (dispatch) => {
  axios
    .get(`http://localhost:8080/getCompany`)
    .then(function (response) {
      dispatch(getCompanies(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetClients = (dispatch) => {
  axios
    .get(`http://localhost:8080/clients`)
    .then(function (response) {
      dispatch(getClients(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetProducer = (dispatch) => {
  axios
    .get(`http://localhost:8080/getProducer`)
    .then(function (response) {
      dispatch(getProducers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetManager = (dispatch) => {
  axios
    .get(`http://localhost:8080/getManager`)
    .then(function (response) {
      dispatch(getManagers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetQuoteStatuses = (dispatch) => {
  axios
    .get(`http://localhost:8080/getStatus`)
    .then(function (response) {
      dispatch(getQuoteStatuses(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetDeposit = (dispatch) => {
  axios
    .get(`http://localhost:8080/getDeposit`)
    .then(function (response) {
      dispatch(getDeposits(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetDailyReports = (dispatch) => {
  axios
    .get(`http://localhost:8080/getDailyReports`)
    .then(function (response) {
      dispatch(getDailyReports(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetPayments = (dispatch) => {
  axios
    .get(`http://localhost:8080/getPayments`)
    .then(function (response) {
      dispatch(getPayments(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetUsers = (dispatch) => {
  axios
    .get(`http://localhost:8080/Users`)
    .then(function (response) {
      dispatch(getUsers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetDealers = (dispatch) => {
  axios
    .get(`http://localhost:8080/getDealers`)
    .then(function (response) {
      dispatch(getDealers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetDealerSalePerson = (dispatch) => {
  axios
    .get(`http://localhost:8080/getDealerSalePerson`)
    .then(function (response) {
      dispatch(getDealerSalePerson(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  FetchAll,
  GetCategories,
  GetQuotes,
  GetLocations,
  GetCompany,
  GetClients,
  GetProducer,
  GetManager,
  GetQuoteStatuses,
  GetDeposit,
  GetDailyReports,
  GetPayments,
  GetUsers,
  GetDealers,
  GetDealerSalePerson,
};
