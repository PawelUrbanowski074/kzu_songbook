import { SongBook } from "../../features/SongBook";
import { SongPage } from "../../features/SongPage";
import { Backposter } from "./Backposter";
import { TopBar } from "./TopBar"

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toSongs, toSong } from "../routes";

export const App = () => {
  return (
    <HashRouter>
      <TopBar />
      <Backposter />
      <Switch>
        <Route path={toSong()}>
          <SongPage />
        </Route>
        <Route path={toSongs()}>
          <SongBook />
        </Route>
        <Route path="/">
          <Redirect to={toSongs()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;