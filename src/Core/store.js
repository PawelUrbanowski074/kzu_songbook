import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import songsReducer from '../features/SongBook/songsSlice';
import photoReducer from '../core/App/Backposter/photoSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songsReducer,
    photo: photoReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;