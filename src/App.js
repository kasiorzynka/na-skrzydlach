import { BrowserRouter as Router } from "react-router-dom";
import FixedMenuLayout from "./FixedMenuLayout.js";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <FixedMenuLayout></FixedMenuLayout>
      </div>
    </Router>
  );
}

export default App;
