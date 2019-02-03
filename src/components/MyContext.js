import React, { Component } from "react";

const MyContext = React.createContext("green");

const styles = {
  night: {
    color: "#ffffff",
    backgroundColor: "#37474f"
  },
  day: {
    color: "#212121",
    backgroundColor: "#ffffff"
  }
};

const text = {
  home: {
    en: "Home",
    ua: "Головна"
  },
  quote: {
    en: "Quote",
    ua: "Цитати"
  },
  todos: {
    en: "Todos",
    ua: "Туду"
  },
  calculator: {
    en: "Calculator",
    ua: "Калькулятор"
  },
  pomodoro: {
    en: "Pomodoro",
    ua: "Помодоро"
  }
};

export class MyProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "green",
      lang: "en",
      text
    };
  }

  styleBody = () => {
    // console.log("styleBody");
    const { theme } = this.state;

    document.body.style.backgroundColor =
      theme !== "green"
        ? styles.day.backgroundColor
        : styles.night.backgroundColor;

    document.body.style.color =
      theme !== "green" ? styles.day.color : styles.night.color;
  };

  handleThemeClick = e => {
    // console.log("handleThemeClick");
    const { theme } = this.state;
    const newTheme = theme === "blue-grey" ? "green" : "blue-grey";

    this.setState({ theme: newTheme });
    this.styleBody();

    localStorage.setItem("a-theme", newTheme);
  };

  handleLangClick = e => {
    // console.log("handleLangClick");
    const lang = this.state.lang === "en" ? "ua" : "en";

    this.setState({ lang });

    localStorage.setItem("a-lang", lang);
  };

  componentWillMount = () => {
    // console.log("componentWillMount");

    const theme = localStorage.getItem("a-theme");
    // console.log({ theme });

    theme === "blue-grey" && this.setState({ theme });
    theme === "blue-grey" && this.styleBody();

    const lang = localStorage.getItem("a-lang");
    // console.log({ lang });

    lang && this.setState({ lang });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          theme: this.state.theme,
          lang: this.state.lang,
          text: this.state.text,
          handleThemeClick: this.handleThemeClick,
          handleLangClick: this.handleLangClick
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export const MyConsomer = MyContext.Consumer;
