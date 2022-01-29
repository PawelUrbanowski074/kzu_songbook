import { SongBook } from "../../features/SongBook";
import { Backposter } from "./Backposter";
import { TopBar } from "./TopBar"

export const App = () => {
  return (
    <>
      <TopBar />
      <Backposter />
      <SongBook />
    </>
  );
}

export default App;