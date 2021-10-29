import * as actionTypes from "./ActionTypes";

const Advertisements = (
  state = {
    isLoading: true,
    errMess: null,
    advertisements: [],
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_ADVERTISEMENTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        advertisements: action.payload,
      };

    case actionTypes.ADVERTISEMENTS_LOADING:
      return { ...state, isLoading: true, errMess: null, advertisements: [] };

    case actionTypes.ADVERTISEMENTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    case actionTypes.UPDATE_ADVERTISEMENTS:
      return state.map((adv) =>
        adv.id !== action.payload
          ? adv
          : {
              ...adv,
              title: action.payload.title,
              valid_until: action.payload.valid_until,
              link: action.payload.link,
            }
      );

    default:
      return state;
  }
};
export default Advertisements;
