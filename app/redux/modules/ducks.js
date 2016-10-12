const FETCHING_DUCK = 'FETCHING_DUCK';
const FETCHING_DUCK_ERROR = 'FETCHING_DUCK_ERROR';
const FETCHING_DUCK_SUCCESS = 'FETCHING_DUCK_SUCCESS';
const ADD_DUCK = 'ADD_DUCK';
const ADD_MULTIPLE_DUCKS = 'ADD_MULTIPLE_DUCKS';
const REMOVE_FETCHING = 'REMOVE_FETCHING';

function fetchingDuck () {
  return {
    type: FETCHING_DUCK
  };
}

function fetchingDuckError (error) {
  return {
    type: FETCHING_DUCK_ERROR,
    error: `Error fetching duck: ${error}`
  };
}

function fetchingDuckSuccess (duck) {
  return {
    type: FETCHING_DUCK_SUCCESS,
    duck
  };
}

function addDuck (duck) {
  return {
    type: ADD_DUCK,
    duck
  };
}

function addMultipleDucks (ducks) {
  return {
    type: ADD_MULTIPLE_DUCKS,
    ducks
  };
}

function removeFetching () {
  return {
    type: REMOVE_FETCHING
  };
}

const initialState = {
  isFetching: true,
  error: ''
};

export default function ducks (state = initialState, action) {
  switch (action.type) {
    case ADD_DUCK:
      return {
        ...state,
        [action.duck.duckId]: action.duck
      };

    case FETCHING_DUCK:
      return {
        ...state,
        isFetching: true
      };

    case FETCHING_DUCK_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case FETCHING_DUCK_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.duck.duckId]: action.duck
      };

    case REMOVE_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: ''
      };

    case ADD_MULTIPLE_DUCKS:
      return {
        ...state,
        ...action.ducks
      };

    default:
      return state;
  }
}