import "./styles.css"
import {useState} from "react";

export default function App() {
  const [text, setText] = useState("")
  const [counter, setCounter] = useState(0)
  return (
    <div>
    <div className="App">
      <img className="image" src='https://img.icons8.com/ios7/1200/code--v2.jpg' />
      <span>Mein Miniprojekttitel</span>
      <button 
        onClick={() => setCounter(counter+1)}
        value={counter}>
      Drück mich!
      </button>
      <input 
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </div>
    <p>Du hast {text.length} Zeichen im Textfeld und {counter} mal den Knopf gedrükt.</p>
    </div>
  );
}
