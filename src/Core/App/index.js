import { SongBook } from "../../features/SongBook";
import { SongPage } from "../../features/SongPage";
import { SongLists } from "../../features/SongLists";
import { ListPage } from "../../features/ListPage";
import { AddSongList } from "../../features/AddSongList";
import { Backposter } from "./Backposter";
import { TopBar } from "./TopBar"

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toSongs, toSong, toSavedLists, toNewList, toList } from "../routes";

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
        <Route path={toList()}>
          <ListPage />
        </Route>
        <Route path={toSavedLists()}>
          <SongLists />
        </Route>
        <Route path={toNewList()}>
          <AddSongList />
        </Route>
        <Route path="/">
          <Redirect to={toSongs()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;