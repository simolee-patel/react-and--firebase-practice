
import './App.css';
import Home from './Home';
import Login from './Login'
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (<Login />)
        :
        <Home />}
    </div>
  );
}

export default App;
