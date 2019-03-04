import React, { Component } from "react";
import Select from "./Select";

import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="title is-3">
          <h1>React Select</h1>
        </header>
        <main>
          <h2 className="title is-4">Single</h2>
          <Select />
          <hr />
          <h2 className="title is-5">Multiple</h2>
          <Select multiple={true} />
        </main>
      </div>
    );
  }
}

export default App;
