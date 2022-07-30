export const toSongs = () => "/utwory";

export const toSong = ({ id } = { id: ":id" }) => `/utwory/${id}`;

export const toSavedLists = () => "/listy";

export const toList = ({ id } = { id: ":id" }) => `/listy/${id}`;

export const toNewList = () => "/nowa";