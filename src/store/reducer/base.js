import * as TYPES from "../action-types";
import _ from "../../assets/utils";

let inital = {
  info: null,
};
export default function baseReducer(state = inital, action) {
  state = _.clone(state);
  switch (action.type) {
    default:
  }
  return state;
}
