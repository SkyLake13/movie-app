import { lazy, Suspense } from "react";
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components";
import { store } from './state/store';

const MovieSearchView = lazy(() => import('./views/MovieSearch'));
const MovieDetailView = lazy(() => import('./views/MovieDetailView'));

const theme = {
  bg: "#42a5f5",
  fg: "white"
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
        <Header>
          <h3>Movie App</h3>
        </Header>
        <main>
          <Switch>
          <Route path='/:id'>
              <Suspense fallback={<div>Loading...</div>}>
                <MovieDetailView />
              </Suspense>
            </Route>
            <Route path='/' exact>
              <Suspense fallback={<div>Loading...</div>}>
                <MovieSearchView />
              </Suspense>
            </Route>
          </Switch>
        </main>
        </ThemeProvider>
      </Router>
      </Provider>
      
    </div>
  );
}

export default App;
