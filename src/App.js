import logo from './logo.svg';
import './App.css';
import { Counter } from "./Components/Counter";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App d-flex justify-content-center">
        <Counter className="TeamA" teamName="Team A"/>
        <div className="Separator"></div>
        <Counter className="TeamB" teamName="Team B"/>
    </div>
  );
}

export default App;
