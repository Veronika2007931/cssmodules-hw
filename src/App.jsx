// import {Statistics} from "./components/Statistics.jsx"
// import data from "./data.json"
import {FriendList} from "./components/FriendsList.jsx"
import friends from "./friends.json"
import './App.css';

function App() {
  return (
    // <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />

  )
 
}

export default App;
