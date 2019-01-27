const initState = {
  posts: [
    { id: "1", title: "Епіктет", body: "раб / вчитель" },
    { id: "2", title: "Марк Аврелій", body: "імператор" },
    { id: "3", title: "Сенека", body: "державний діяч" },
    { id: "4", title: "Музоній Руф", body: "вчитель" }
  ]
};

const reducer = (state = initState, action) => {
  // console.log(action);
  if (action.type === "DELETE_POST") {
    let posts = state.posts.filter(el => el.id !== action.id);
    return { ...state, posts };
  }
  return state;
};

export default reducer;
