import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios'
import { characterLoaded } from './actions';
import actionTypes from './action-types';
import { Character } from '../../models';

export function* loadCharacter(actionPayload) {
  const res = yield call(async () => {
    const result = await Character.get({ id: actionPayload.characterId, generateOnly: true });
    return axios.get(result.requestURL).then(async ({ data }) => {
      data.episode = await data.episode.map(async (episode) => {
        const response = await fetch(episode);
        const json = await response.json();
        return json;
      });
      data.episode = await Promise.all(data.episode);
      return data;
    })}
  );
  yield put(characterLoaded(res));
}

export default function* characterDetailPageServices() {
  yield takeEvery(actionTypes.LOAD_CHARACTER, loadCharacter);
}
