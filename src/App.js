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

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} >
              <Route path="/page:id" element={<Main />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Contacts />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
