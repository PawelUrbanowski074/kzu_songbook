import { all } from "redux-saga/effects";
import { songsSaga } from '../features/SongBook/songsSaga';

export default function* saga() {
  yield all ([
    songsSaga(),
  ]);
}