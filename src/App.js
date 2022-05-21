import { React, useState } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import User from "./components/User";
import InitialState from "./components/screens/InitialState";

const App = () => {
  const [username, setUsername] = useState();

  return (
    <BrowserRouter>
        <Header setUsername={setUsername} />
        <Routes>
          <Route path="/" element={<InitialState />} />
          <Route path="users/:id" element={<User username={username} />}/>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
