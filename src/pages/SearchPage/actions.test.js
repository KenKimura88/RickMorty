import actionTypes from './action-types';
import * as actions from './actions';

describe('Search Page actions tests', () => {
  it('should create an action to searchCharacters', () => {
    const charactersApiInfo = { a: 'Finish docs' };
    const expectedAction = {
      type: actionTypes.SEARCH_CHARACTERS,
      charactersApiInfo,
    };
    expect(actions.searchCharacters(charactersApiInfo)).toEqual(expectedAction);
  });
  it('should create an action to searchCharactersLoaded', () => {
    const payload = {};
    const expectedAction = {
      type: actionTypes.SEARCH_CHARACTERS_LOADED,
      payload,
    };
    expect(actions.searchCharactersLoaded(payload)).toEqual(expectedAction);
  });
  it('should create an action to searchCharactersAlreadyListed', () => {
    const expectedAction = {
      type: actionTypes.SEARCH_CHARACTERS_ALREADY_LISTED,
    };
    expect(actions.searchCharactersAlreadyListed()).toEqual(expectedAction);
  });
});
