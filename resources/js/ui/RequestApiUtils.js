import axios from 'axios';
const host_url = '/api';

const getAll = function (serviceName) {
  return axios.get(`${host_url}/${serviceName}`).then((result) => {
    return result.data;
  }).catch((e) => {
    console.log(e);
    return e;
  });
};

const getOne = function (serviceName, id) {
  return axios.get(`${host_url}/${serviceName}/${id}`).then((result) => {
    return result.data;
  }).catch((e) => {
    console.log(e);
    return e;
  });
};

export {
  getAll,
  getOne,
};