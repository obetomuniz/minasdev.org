import { fromJS } from "immutable";
import { createActions } from "@reducers";
import { LOCATION_CHANGE } from "react-router-redux";

const initialState = fromJS({
  locationBeforeTransitions: null
});

export default (state = initialState, action) => {
  return createActions(
    { state, action },
    {
      [LOCATION_CHANGE]: () => state.merge({ locationBeforeTransitions: action.payload })
    }
  );
};
