import { React, useState } from "react";
import { BrowserRouter} from 'react-router-dom';
import Header from "./components/Header";

const App = () => {
  const [username, setUsername] = useState();

  return (
    <BrowserRouter>
        <Header setUsername={setUsername} />
    </BrowserRouter>
  );
}
export default App;
