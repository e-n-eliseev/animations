import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./style/app.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PageNotFound from "./components/404/PageNotFound";
import { lazy, Suspense } from "react";
const Parallax = lazy(() => import("./components/parallax/Parallax"));
const BgPicAnimation = lazy(() => import("./components/bgpicanimation/BgPicAnimation"));

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__wrapper">
          <Header />
          <Suspense
            fallback={<h1>Loading profile...</h1>}
          >
            <Routes>
              <Route path="/" element={<Main />} >
                <Route path="/page:id" element={<Main />} />
              </Route>
              <Route path="/parallax" element={<Parallax />} />
              <Route path="/backgroundpictureanimation" element={<BgPicAnimation />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
          <Contacts />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
