import logo from "./logo.svg";
import "./App.css";
import {Provider} from 'react-redux';
import { Store } from './Redux/store';


import Nav from "./Components/Nav";

function App() {
  return (
   <Provider  store={Store}>
      <Nav/>
   </Provider>
  );
}

export default App;
