import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./pages/homepage/homepage.jsx";
import AboutPage from "./pages/About/About.jsx";
import ContactsPage from "./pages/Contacts/Contacts.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactsPage} />
      </Switch>
    </div>
  );
}

export default App;
