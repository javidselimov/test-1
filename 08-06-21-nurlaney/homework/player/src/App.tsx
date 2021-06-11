import React, { useEffect } from "react";
import "./App.scss";
import { Playlists } from "./modules/Playlists";
import { Layout } from "./modules/Layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import { SinglePlaylist } from "./modules/SinglePlaylist";
import { useDispatch } from "react-redux";
import { getPlaylists } from "./modules/Playlists/actions/playlists";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getPlaylists(dispatch);
  }, [dispatch]);
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Playlists} exact />
            <Route path="/playlist/:id" component={SinglePlaylist} exact />
          </Switch>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
