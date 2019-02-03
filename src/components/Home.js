import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    // console.log(this.props);
    const { posts } = this.props;
    const list = posts.length ? (
      posts.map(el => {
        return (
          <div className="row" key={el.id}>
            <div className="col s12 m8 offset-m2 ">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <Link to={`/${el.id}`}>
                    <span className="card-title white-text">{el.title}</span>
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
    return (
      <div className="container section">
        <div className="center">
          <p>Click on "UA" in top left corner to switch language</p>
          <p>
            Click on <i className="material-icons">brightness_3</i>
            in top left corner to switch theme
          </p>
        </div>
        {list}
      </div>
    );
  }
}

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps)(Home);
