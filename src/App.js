import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./style/app.scss";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Header />
        <Main />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
