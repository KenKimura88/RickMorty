import { call, put, takeEvery } from 'redux-saga/effects';
import { searchCharactersLoaded } from './actions';
import actionTypes from './action-types';

export function* searchCharacters(actionPayload) {
  const { charactersApiInfo } = actionPayload;
  const res = yield call(() =>
    fetch(
      charactersApiInfo && charactersApiInfo.next
        ? charactersApiInfo.next
        : `https://rickandmortyapi.com/api/character/?name=${charactersApiInfo}`
    ).then((response) => response.json())
  );
  if (res.results) {
    yield put(searchCharactersLoaded({ characterList: res.results, response: res }));
  } else {
    yield put(searchCharactersLoaded({ characterList: [], response: { info: { count: 0, pages: 0, prev: '', next: '' }, results: [] } }));
  }
}

export default function* servicePageServices() {
  yield takeEvery(actionTypes.SEARCH_CHARACTERS, searchCharacters);
}
