import logo from "./logo.svg";
// import "./App.css";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./component/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import TVSeries from "./pages/TVSeries/TVSeries";
import Category from "./pages/Category/Category";
import Movies from "./pages/Movies/Movies";
import Popular from "./pages/Popular/Popular";
import MyList from "./pages/MyList/MyList";
import Featured from "./component/featured/Featured";
import Watch from "./pages/watch/Watch";
import DetailModal from "./component/DetailModal/DetailModal";
import PurchaseModal from "./component/PurchaseModal/PurchaseModal";
import DataConfig2 from "./dataConfig2";
import { AuthContext } from "./redux/auth/AuthContext";
import InputPinModal from "./component/InputPinModal/InputPinModal";
import Auth from "./pages/Auth/Auth";
import { selectSearchResults } from "./redux/search/search.selectors";
import Search from "./pages/Search/Search";
import OfflinePage from "./pages/OfflinePage/OfflinePage";
import SignUpPage from "./pages/Auth/SignUpPage";
import { selectCurrentUser } from "./redux/auth/auth.selectors";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const { user, authuser } = useContext(AuthContext);
  const searchResults = useSelector(selectSearchResults);
  // if (user === null) {
  //   <Redirect to="/login" />;
  // }
  return (
    <div>
      {user && (
        <>
          {/* {pathname.includes("watch") || pathname.includes("login") ? (
            ""
          ) : (
            <Navbar />
          )} */}

          <DetailModal />
          <PurchaseModal />
          <InputPinModal />
        </>
      )}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/sign-up" component={SignUpPage} />
          {/* <Route exact path="/login" component={Auth} /> */}
          <Route
            path="/search"
            render={() =>
              user ? (
                searchResults && <Search results={searchResults} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/browse"
            render={() => (user ? <Homepage /> : <Redirect to="/login" />)}
          />

          <Route
            exact
            path="/tvseries"
            render={() => (user ? <TVSeries /> : <Redirect to="/login" />)}
          />
          <Route
            exact
            path="/browse/:categoryName"
            render={(props) =>
              user ? <Category {...props} /> : <Redirect to="/login" />
            }
          />
          <Route
            exact
            path="/tvseries/:categoryName"
            render={(props) =>
              user ? <Category {...props} /> : <Redirect to="/login" />
            }
          />
          <Route
            exact
            path="/movies"
            render={() => (user ? <Movies /> : <Redirect to="/login" />)}
          />
          <Route
            exact
            path="/movies/:categoryName"
            render={(props) =>
              user ? <Category {...props} /> : <Redirect to="/login" />
            }
          />
          <Route
            exact
            path="/popular"
            render={() => (user ? <Popular /> : <Redirect to="/login" />)}
          />
          <Route
            exact
            path="/popular/:categoryName"
            render={(props) =>
              user ? <Category {...props} /> : <Redirect to="/login" />
            }
          />

          <Route
            exact
            path="/mylist"
            render={() => (user ? <MyList /> : <Redirect to="/login" />)}
          />
          <Route
            exact
            path="/watch"
            render={() => (user ? <Watch /> : <Redirect to="/login" />)}
          />
          <Route path="/login">
            {user === null ? <Auth /> : <Redirect to="/browse" />}
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
