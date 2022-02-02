import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import songsReducer from '../features/SongBook/songsSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;