export const getExampleSongs = async () => {
  const response = await fetch("/kzu_songbook/exampleSong.json");
  
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};