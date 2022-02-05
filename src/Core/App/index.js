import { SongBook } from "../../features/SongBook";
import { SongPage } from "../../features/SongPage";
import { Backposter } from "./Backposter";
import { TopBar } from "./TopBar"

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toSongs, toSong } from "../routes";
import { GoUpButton } from "./GoUpButton";

export const App = () => {
  return (
    <HashRouter>
      <TopBar />
      <Backposter />
      {/* <GoUpButton /> */}
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