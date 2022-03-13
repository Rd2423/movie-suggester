import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";
import MyMovies from "./pages/MyMovies";
import Header from "./components/header/Header";
// import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {  BrowserRouter as Router, Routes,  Route} from "react-router-dom";

const httpLink = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
      <div className="App">
          <Header />
          
          <Routes>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/" element={<Home />} />
            <Route path="/signup"element={<Signup />} />
            <Route path="/mymovies"element={<MyMovies />} />
          </Routes>
    
      </div>
        </Router>
    </ApolloProvider>
  );
}

export default App;
