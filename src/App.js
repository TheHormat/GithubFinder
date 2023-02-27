// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-3">
        <UserList />
      </div>
    </div>
  );
}

export default App;
