import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>Fill out this form</h1>
      <form>
        <input type="text" placeholder="name"></input><br /> <br />
        <input type="text" placeholder="last name"></input><br /> <br />
        <input type="email" placeholder="email"></input><br /> <br />
        <input type="password" placeholder="passwprd"></input><br /> <br />
        <button>Submit</button>
      </form>
    </>
    

  );
}

export default App;
