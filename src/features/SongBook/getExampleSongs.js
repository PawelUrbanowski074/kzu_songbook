export const getExampleSongs = async ( title ) => {
  const response = await fetch(`/kzu_songbook/${title}`);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};