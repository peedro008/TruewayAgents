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
  avg,
  a_avg,
} from "../Redux/actions";
const date = new Date();
const DATE =
date.getFullYear() + ( (date.getMonth() + 1)>9?"-":"-0" )+ (date.getMonth() + 1)+"-" + date.getDate()
const FetchAll = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/getProducer`)
    .then(function (response) {
      dispatch(getProducers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    axios
    .get(`https://www.truewayagentbackend.com/getUsersAverage?dateFrom=${date.getFullYear()}${( (date.getMonth() +1)>9?"-":"-0" )}${(date.getMonth()+1)}-01&dateTo=${date.getFullYear()}${( (date.getMonth() +2)>9?"-":"-0" )}${(date.getMonth()+2)}-01`)
    .then(function (response) {
      dispatch(a_avg(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    axios
    .get(`https://www.truewayagentbackend.com/getUsersAverage`)
    .then(function (response) {
      dispatch(avg(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    axios
    .get(`https://www.truewayagentbackend.com/getStatus`)
    .then(function (response) {
      dispatch(getQuoteStatuses(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    axios
    .get(`https://www.truewayagentbackend.com/getPayments`)
    .then(function (response) {
      dispatch(getPayments(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`https://www.truewayagentbackend.com/getCategories`)
    .then(function (response) {
      dispatch(getCategories(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get(`https://www.truewayagentbackend.com/getLocations`)
    .then(function (response) {
      dispatch(getLocations(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`https://www.truewayagentbackend.com/getCompany`)
    .then(function (response) {
      dispatch(getCompanies(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`https://www.truewayagentbackend.com/clients`)
    .then(function (response) {
      dispatch(getClients(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`https://www.truewayagentbackend.com/getManager`)
    .then(function (response) {
      dispatch(getManagers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get(`https://www.truewayagentbackend.com/getDeposit`)
    .then(function (response) {
      dispatch(getDeposits(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`https://www.truewayagentbackend.com/getDailyReports`)
    .then(function (response) {
      dispatch(getDailyReports(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get(`https://www.truewayagentbackend.com/Users`)
    .then(function (response) {
      dispatch(getUsers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`https://www.truewayagentbackend.com/getDealers`)
    .then(function (response) {
      dispatch(getDealers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get(`https://www.truewayagentbackend.com/getDealerSalePerson`)
    .then(function (response) {
      dispatch(getDealerSalePerson(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetCategories = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/getCategories`)
    .then(function (response) {
      dispatch(getCategories(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetQuotes = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/Quotes`)
    .then(function (response) {
      dispatch(getQuotes(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetLocations = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/getLocations`)
    .then(function (response) {
      dispatch(getLocations(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetCompany = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/getCompany`)
    .then(function (response) {
      dispatch(getCompanies(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetClients = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/clients`)
    .then(function (response) {
      dispatch(getClients(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetProducer = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/getProducer`)
    .then(function (response) {
      dispatch(getProducers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetManager = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/getManager`)
    .then(function (response) {
      dispatch(getManagers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetQuoteStatuses = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/getStatus`)
    .then(function (response) {
      dispatch(getQuoteStatuses(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetDeposit = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/getDeposit`)
    .then(function (response) {
      dispatch(getDeposits(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetDailyReports = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/getDailyReports`)
    .then(function (response) {
      dispatch(getDailyReports(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetPayments = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/getPayments`)
    .then(function (response) {
      dispatch(getPayments(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetUsers = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/Users`)
    .then(function (response) {
      dispatch(getUsers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetDealers = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/getDealers`)
    .then(function (response) {
      dispatch(getDealers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetDealerSalePerson = (dispatch) => {
  axios
    .get(`https://www.truewayagentbackend.com/getDealerSalePerson`)
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
