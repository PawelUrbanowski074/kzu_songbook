import { createSlice } from "@reduxjs/toolkit";
import { getSongsFromLocalStorage } from './localStorage';

const songsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: getSongsFromLocalStorage(),
    showSelected: true,
    loading: false,
  },
  reducers: {
    toggleShowSelected: state => {
      state.showSelected = !state.showSelected;
    },
    toggleSelected: ({ songs }, { payload: songId }) => {
      const index = songs.findIndex(({ id }) => id === songId);
      songs[index].checked = !songs[index].checked;
    },
    toggleShowText: ({ songs }, { payload: songId }) => {
      const index = songs.findIndex(({ id }) => id === songId);
      songs[index].showText = !songs[index].showText;
    },
    setAllUnchecked:({ songs }) => {
      songs.forEach(song => {
        song.checked = false;
      });
    },
    fetchExampleSongs: state => {
      state.loading = true;
    },
    fetchExampleSongsSuccess: (state, { payload: songs }) => {
      state.songs = songs;
      state.loading = false;
    },
    fetchExampleSongsError: state => {
      state.loading = false;
    },
  },
});

export const {
  toggleShowSelected,
  toggleSelected,
  toggleShowText,
  setAllUnchecked,
  fetchExampleSongs,
  fetchExampleSongsSuccess,
  fetchExampleSongsError,
} = songsSlice.actions;

export const selectSongsState = state => state.songs;

export const selectSongs = state => selectSongsState(state).songs;
export const selectShowSelected = state => selectSongsState(state).showSelected;
export const selectExampleSongLoading = state => selectSongsState(state).loading;
export const selectAreSongEmpty = state => selectSongs(state).length === 0;
export const selectIsEverySongUnchecked = state => selectSongs(state).every(({ checked }) => !checked); 


export const getSongById = (state, songId) =>
  selectSongs(state).find(({ id }) => id === songId);

export const selectSongByQuery = (state, query) => {
  const songs = selectSongs(state);
  if (!query || query.trim() === "") {
    return songs;
  }
  return songs.filter(({ title }) => title.toUpperCase().includes(query.trim().toUpperCase()));
}

export default songsSlice.reducer;