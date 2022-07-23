import "./style/app.scss";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import BrokenPhoto from "./components/brokenPhoto/BrokenPhoto";
const PackOfLoaders = lazy(() => import("./components/packOfLoaders/PackOfLoaders"));
const TypeWriter = lazy(() => import("./components/typeWriter/TypeWriter"));
const TextStyles = lazy(() => import("./components/textStyles/TextStyles"));
const Parallax = lazy(() => import("./components/parallax/Parallax"));
const BgPicAnimation = lazy(() => import("./components/bgpicanimation/BgPicAnimation"));
const PageNotFound = lazy(() => import("./components/404/PageNotFound"));

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
              <Route path="/brokenphoto" element={<BrokenPhoto />} />
              <Route path="/backgroundpictureanimation" element={<BgPicAnimation />} />
              <Route path="/textstyle" element={<TextStyles />} />
              <Route path="/typewriter" element={<TypeWriter />} />
              <Route path="/packofloaders" element={<PackOfLoaders />} />
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
