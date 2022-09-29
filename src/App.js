import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Exercises from './Components/Exercises/Exercises';
import Questions from './Components/Questions/Questions';

function App() {
  return (
    <div className="">
      <Nav></Nav>
      <Exercises></Exercises>
      <Questions></Questions>
    </div>
  );
}

export default App;
