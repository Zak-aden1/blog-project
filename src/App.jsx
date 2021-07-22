import Navbar from './Components/Navbar';
import Home from './Components/Home';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div class='content'>
      <Home />
      </div>
    </div>
  );
}

export default App;
