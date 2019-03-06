import actionTypes from './action-types';

export const searchCharacters = (charactersApiInfo) => {
  return { type: actionTypes.SEARCH_CHARACTERS, charactersApiInfo };
};

export const searchCharactersLoaded = (payload) => {
  return { type: actionTypes.SEARCH_CHARACTERS_LOADED, payload };
};

export const searchCharactersAlreadyListed = () => {
  return { type: actionTypes.SEARCH_CHARACTERS_ALREADY_LISTED };
};
