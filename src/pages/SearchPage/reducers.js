import actionTypes from './action-types';

const initialState = {
  charactersLoading: false,
  characters: [],
  charactersApiInfo: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_CHARACTERS:
      return action.charactersApiInfo && action.charactersApiInfo.next ?
        { ...state, charactersLoading: true } :
        { ...initialState, charactersLoading: true };
    case actionTypes.SEARCH_CHARACTERS_LOADED:
      return {
        ...state,
        charactersLoading: false,
        characters: [...state.characters, ...action.payload.characterList],
        charactersApiInfo: action.payload.response.info,
      };
    case actionTypes.SEARCH_CHARACTERS_ALREADY_LISTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
