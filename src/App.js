import Home from "./pages/Home";
import './assets/css/style.css'
import {WeatherProvider} from './context/WeatherContext'

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Home />
      </WeatherProvider>
    </div>
  );
}

export default App;
