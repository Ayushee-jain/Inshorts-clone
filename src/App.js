import "./App.css";
import Read from "./Components/Read";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from "react";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Read category="general" notPresent={false} apiKey={this.apiKey} />
          </Route>
          <Route exact path="/read">
            <Read category="general" notPresent={false} apiKey={this.apiKey} />
          </Route>
          <Route exact path="/read/national">
            <Read category="india" notPresent={true} apiKey={this.apiKey} />
          </Route>
          <Route exact path="/read/business">
            <Read category="business" notPresent={false} apiKey={this.apiKey} />
          </Route>
          <Route exact path="/read/sports">
            <Read category="sports" notPresent={false} apiKey={this.apiKey} />
          </Route>
          <Route exact path="/read/world">
            <Read category="world" notPresent={true} apiKey={this.apiKey} />
          </Route>
          <Route exact path="/read/politics">
            <Read category="politics" notPresent={true} apiKey={this.apiKey} />
          </Route>
          <Route exact path="/read/technology">
            <Read category="technology" notPresent={false} apiKey={this.apiKey} />
          </Route>
          <Route exact path="/read/startup">
            <Read category="startup" notPresent={true} apiKey={this.apiKey} />
          </Route>
          <Route exact path="/read/entertainment">
            <Read category="entertainment" notPresent={false} apiKey={this.apiKey} />
          </Route>
          <Route exact path="/read/science">
            <Read category="science" notPresent={false} apiKey={this.apiKey} />
          </Route>
          <Route exact path="/read/health">
            <Read category="health" notPresent={false} apiKey={this.apiKey} />
          </Route>
          <Route exact path="/read/automobile">
            <Read category="automobile" notPresent={true} apiKey={this.apiKey} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
