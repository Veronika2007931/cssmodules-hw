import {Statistics} from "./components/Statistics.jsx"
import data from "./data.json"
import './App.css';

function App() {
  return (
    <Statistics title="Upload stats" stats={data} />
 

  )
 
}

export default App;
