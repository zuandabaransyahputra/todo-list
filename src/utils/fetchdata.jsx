import axios from 'axios'
import handleError from './handleError'

export async function getData(url, params) {
  try {
    return await axios.get(`${process.env.REACT_APP_URL}${url}`, {
      params,
    })
  } catch (err) {
    return handleError(err)
  }
}

export async function postData(url, payload) {
  return await axios.post(`${process.env.REACT_APP_URL}${url}`, payload)
}

export async function patchData(url, payload) {
  return await axios.patch(`${process.env.REACT_APP_URL}${url}`, payload)
}

export async function deleteData(url, params) {
  return await axios.delete(`${process.env.REACT_APP_URL}${url}`, { params })
}
