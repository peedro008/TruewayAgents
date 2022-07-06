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
    .get(` https://truewayagentbackend.com/getCategories`)
    .then(function (response) {
      dispatch(getCategories(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(` https://truewayagentbackend.com/Quotes`)
    .then(function (response) {
      dispatch(getQuotes(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(` https://truewayagentbackend.com/getLocations`)
    .then(function (response) {
      dispatch(getLocations(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(` https://truewayagentbackend.com/getCompany`)
    .then(function (response) {
      dispatch(getCompanies(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(` https://truewayagentbackend.com/clients`)
    .then(function (response) {
      dispatch(getClients(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(` https://truewayagentbackend.com/getProducer`)
    .then(function (response) {
      dispatch(getProducers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(` https://truewayagentbackend.com/getManager`)
    .then(function (response) {
      dispatch(getManagers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(` https://truewayagentbackend.com/getStatus`)
    .then(function (response) {
      dispatch(getQuoteStatuses(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(` https://truewayagentbackend.com/getDeposit`)
    .then(function (response) {
      dispatch(getDeposits(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(` https://truewayagentbackend.com/getDailyReports`)
    .then(function (response) {
      dispatch(getDailyReports(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(` https://truewayagentbackend.com/getPayments`)
    .then(function (response) {
      dispatch(getPayments(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(` https://truewayagentbackend.com/Users`)
    .then(function (response) {
      dispatch(getUsers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(` https://truewayagentbackend.com/getDealers`)
    .then(function (response) {
      dispatch(getDealers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(` https://truewayagentbackend.com/getDealerSalePerson`)
    .then(function (response) {
      dispatch(getDealerSalePerson(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetCategories = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/getCategories`)
    .then(function (response) {
      dispatch(getCategories(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetQuotes = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/Quotes`)
    .then(function (response) {
      dispatch(getQuotes(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetLocations = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/getLocations`)
    .then(function (response) {
      dispatch(getLocations(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetCompany = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/getCompany`)
    .then(function (response) {
      dispatch(getCompanies(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetClients = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/clients`)
    .then(function (response) {
      dispatch(getClients(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetProducer = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/getProducer`)
    .then(function (response) {
      dispatch(getProducers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetManager = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/getManager`)
    .then(function (response) {
      dispatch(getManagers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetQuoteStatuses = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/getStatus`)
    .then(function (response) {
      dispatch(getQuoteStatuses(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetDeposit = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/getDeposit`)
    .then(function (response) {
      dispatch(getDeposits(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetDailyReports = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/getDailyReports`)
    .then(function (response) {
      dispatch(getDailyReports(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetPayments = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/getPayments`)
    .then(function (response) {
      dispatch(getPayments(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetUsers = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/Users`)
    .then(function (response) {
      dispatch(getUsers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetDealers = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/getDealers`)
    .then(function (response) {
      dispatch(getDealers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetDealerSalePerson = (dispatch) => {
  axios
    .get(` https://truewayagentbackend.com/getDealerSalePerson`)
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
