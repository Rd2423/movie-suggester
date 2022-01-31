import Header from "./components/header/Header";
import Movies from "./components/movies/Movies";
import SearchBarInfo from './components/searchBarAndInfo/SearchBarInfo'
function App() {
  return <div className="App">
    <Header />
    <SearchBarInfo />
    <Movies />
  </div>;
}

export default App;
