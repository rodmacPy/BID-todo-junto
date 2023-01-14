import './App.css';
import PersonCard from './components/PersonCard.jsx'
function App() {
  return (
    <div className="App">
      <div className="App-div">
        <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
        <PersonCard firstName={"Jhon"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      </div>
    </div>
  );
}

export default App;
