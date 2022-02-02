import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects";
import { fetchExampleSongs, fetchExampleSongsError, fetchExampleSongsSuccess, selectSongs } from "./songsSlice";
import { getExampleSongs } from './getExampleSongs';
import { saveSongsInLocalStorage } from "./localStorage";

function* fetchExampleSongsHandler() {
  try {
    yield delay(1000);
    const exampleSongs = yield call(getExampleSongs);
    yield put(fetchExampleSongsSuccess(exampleSongs));
  } catch (error) {
    yield put(fetchExampleSongsError());
    yield call(alert, "Przykładowe utwory nie zostały pobrane prawidłowo... Proszę, odśwież stronę i spróbuj ponownie.");
  }
}

function* saveSongInLocalStorageHandler() {
  const songs = yield select(selectSongs);
  yield call(saveSongsInLocalStorage, songs);
}

export function* songsSaga() {
  yield takeLatest(fetchExampleSongs.type, fetchExampleSongsHandler);
  yield takeEvery("*", saveSongInLocalStorageHandler);
}