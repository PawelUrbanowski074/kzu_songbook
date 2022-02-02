import { useDispatch, useSelector } from "react-redux"
import Button from "../Button";
import { selectExampleSongLoading, fetchExampleSongs } from "../songsSlice"

export const ExampleSongButton = () => {
  const loading = useSelector(selectExampleSongLoading);
  const dispatch = useDispatch();

  return ( 
    <Button
      onClick={() => dispatch(fetchExampleSongs())}
      disabled={loading}
    >
      {loading ? "Ładowanie..." : "Pobierz bazę utworów"}
    </Button>
  )
} 