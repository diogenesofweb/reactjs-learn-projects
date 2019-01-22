import React, { Component } from "react";
import axios from "axios";

export class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    };
  }

  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => this.setState({ post: res.data }));
  }
  render() {
    const post = this.state.post ? (
      <div className="row">
        <div className="col s12 m8 offset-m2 ">
          <div className="card blue-grey darken-3">
            <div className="card-content white-text">
              <span className="card-title yellow-text">
                {this.state.post.title}
              </span>
              <p>{this.state.post.body}</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <p>No post</p>
    );

    return <React.Fragment>{post}</React.Fragment>;
  }
}

export default Post;
