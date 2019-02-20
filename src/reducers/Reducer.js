const initState = {
  posts: [
    {
      id: "1",
      title: "Epictetus",
      body:
        "Epictetus was a Greek Stoic philosopher. He was born a slave at Hierapolis, Phrygia and lived in Rome until his banishment, when he went to Nicopolis in northwestern Greece for the rest of his life. His teachings were written down and published by his pupil Arrian in his Discourses and Enchiridion."
    },
    {
      id: "2",
      title: "Marcus Aurelius",
      body:
        "Marcus Aurelius, called the Philosopher, was Roman emperor from 161 to 180. He ruled the Roman Empire with his adoptive brother Lucius Verus until Lucius' death in 169. He was the last of the rulers traditionally known as the Five Good Emperors."
    },
    {
      id: "3",
      title: "Seneca",
      body:
        "Seneca the Younger, fully Lucius Annaeus Seneca and also known simply as Seneca, was a Roman Stoic philosopher, statesman, dramatist, and—in one work—satirist of the Silver Age of Latin literature. Seneca was born in Córdoba in Hispania, and raised in Rome, where he was trained in rhetoric and philosophy."
    },
    {
      id: "4",
      title: "Musonius Rufus",
      body:
        "Gaius Musonius Rufus was a Roman Stoic philosopher of the 1st century AD. He taught philosophy in Rome during the reign of Nero, as consequence of which he was sent into exile in 65 AD, only returning to Rome under Galba."
    }
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
