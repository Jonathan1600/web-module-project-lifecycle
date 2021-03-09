import "./App.css";
import "./normalize.css";
import React from "react";
import axios from "axios";
import Card from "./Card";

class App extends React.Component {
  state = {
    gitUsers: [],
    followers: [],
  };

  componentDidMount() {
    axios
      .all([
        axios.get("https://api.github.com/users/Jonathan1600"),
        axios.get("https://api.github.com/users/Jonathan1600/followers"),
      ])
      .then(
        axios.spread((user, followers) => {
          console.log(user.data, followers.data);
          this.setState({
            gitUsers: [user.data],
          });
          this.setState({
            followers: [followers.data.length],
          });
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App container">
        {this.state.gitUsers.map((user) => {
          return (
            <Card
              key={Date.now()}
              user={user}
              followers={this.state.followers}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
