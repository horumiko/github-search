import { React, useState } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import InitialState from "./components/screens/InitialState";

const App = () => {
  const [username, setUsername] = useState();

  return (
    <BrowserRouter>
        <Header setUsername={setUsername} />
        <Routes>
          <Route path="/" element={<InitialState />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;
