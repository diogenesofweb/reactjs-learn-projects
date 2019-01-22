// rce
import React, { Component } from "react";
import axios from "axios";
import Rainbow from "../hoc/Rainbow";

export class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      id: null
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/diogenesofweb/Sayings/master/quotes.json"
      )
      .then(res => {
        this.setState({ quotes: res.data.quotes });
        this.handleclick();
      });
  }

  handleclick = () => {
    const len = this.state.quotes.length;
    const id = Math.floor(Math.random() * len) + 1;
    // console.log(id);
    this.setState({ id });
  };

  render() {
    const { quotes } = this.state;
    const quote = quotes.length ? (
      quotes
        .filter(el => el.id === this.state.id)
        .map(el => {
          return (
            <div className="row section" key={el.id}>
              <div className="col s8 offset-s2 l4 offset-l4">
                <div className="card blue-grey darken-2">
                  <div className="card-content">
                    <span className="card-title white-text">{el.author}</span>
                    <p>{el.saying}</p>
                  </div>
                  <div className="card-action">
                    <a
                      href="#!"
                      className="waves-effect waves-light btn-small"
                      onClick={this.handleclick}
                    >
                      <i className="material-icons right">skip_next</i>random
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })
    ) : (
      <p> No quotes</p>
    );
    return <React.Fragment>{quote}</React.Fragment>;
  }
}

export default Rainbow(Quote);
