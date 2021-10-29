import * as actionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const advertisementLoading = () => ({
  type: actionTypes.ADVERTISEMENTS_LOADING,
});

export const addAdvertisment = (advertisement) => ({
  type: actionTypes.ADD_ADVERTISEMENT,
  payload: advertisement,
});

export const addAdvertisments = (advertisements) => ({
  type: actionTypes.ADD_ADVERTISEMENTS,
  payload: advertisements,
});

export const advertisementsFailed = (errmess) => ({
  type: actionTypes.ADVERTISEMENTS_FAILED,
  payload: errmess,
});

export const updetAdvertisement = (advertisement) => ({
  type: actionTypes.UPDATE_ADVERTISEMENTS,
  payload: advertisement,
});

export const fetchAdvertisements = () => (dispatch) => {
  return fetch(`${baseUrl}advertisements`)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((advertisements) => {
      dispatch(addAdvertisments(advertisements));
    })
    .catch((error) => dispatch(advertisementsFailed(error.message)));
};

export const putAdvertisement = (data, id) => (dispatch) => {
  return fetch(`${baseUrl}advertisements/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((res) => dispatch(updetAdvertisement(res)))
    .catch((error) => {
      console.log("post advertisement", error.message);
      alert("Your advertisement could not be posted\nError: " + error.message);
    });
};
export const deleteAdvertisement = (id) => (dispatch) => {
  console.log("ACTION /id", id, "/url=>", `${baseUrl}advertisements/${id}`);
  return fetch(`${baseUrl}advertisements/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((res) => dispatch(fetchAdvertisements()))
    .catch((error) => {
      console.log("post advertisement:", error.message);
      alert("Your advertisement could not be posted\nError: " + error.message);
    });
};
