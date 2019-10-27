import React from "react";
import Menu from "./components/Menu";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App = () => {
  return (
    <div>
      <div className="App">
        <div className="App-header">
          <h1>Public Car Rental</h1>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default App;
