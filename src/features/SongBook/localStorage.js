const localStorageKey = "songs";

export const saveSongsInLocalStorage = songs => localStorage.setItem(localStorageKey, JSON.stringify(songs));

export const getSongsFromLocalStorage = () => JSON.parse(localStorage.getItem(localStorageKey)) || [];