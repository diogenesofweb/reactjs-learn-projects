import React, { Component } from "react";
import { connect } from "react-redux";
import deletePost from "../actions/postAction";

export class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };

  render() {
    // console.log(this.props);
    const post = this.props.post ? (
      <div className="row">
        <div className="col s12 m8 offset-m2 ">
          <div className="card blue-grey darken-3">
            <div className="card-content white-text">
              <span className="card-title yellow-text">
                {this.props.post.title}
              </span>
              <p>{this.props.post.body}</p>
            </div>
            <div className="card-action white-text">
              <button className="btn red darken-4" onClick={this.handleClick}>
                Delete
              </button>
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

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return { post: state.posts.find(el => el.id === id) };
};

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
