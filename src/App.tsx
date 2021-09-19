import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const MovieSearchView = lazy(() => import('./views/MovieSearch'));
const MovieDetailView = lazy(() => import('./views/MovieDetailView'));

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h2>Movie App</h2>
        </header>
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
      </Router>
    </div>
  );
}

export default App;
