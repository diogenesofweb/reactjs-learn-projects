import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(res => this.setState({ posts: res.data.slice(0, 10) }));
  }

  render() {
    const { posts } = this.state;
    const list = posts.length ? (
      posts.map(el => {
        return (
          <div className="row" key={el.id}>
            <div className="col s12 m8 offset-m2 ">
              <div className="card blue-grey darken-3">
                <div className="card-content white-text">
                  <Link to={`/${el.id}`}>
                    <span className="card-title">{el.title}</span>
                  </Link>
                  <p>{el.body}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <p className="center">No posts</p>
    );
    return <div className="container section">{list}</div>;
  }
}

export default Home;

// import React from "react";
// import Rainbow from "../hoc/Rainbow";

// const Home = props => {
//   // console.log(props);
//   const routes = ["todos", "calculator", "pomodoro"];
//   const randomRoute = routes[Math.floor(Math.random() * 3)];
//   setTimeout(() => props.history.push(`/${randomRoute}`), 2000);

//   return <h3 className="center">Redirect in two seconds</h3>;
// };

// export default Rainbow(Home);
