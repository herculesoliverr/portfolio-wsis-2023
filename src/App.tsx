import { useEffect } from "react";
import { Home } from "./pages/Home"


function App() {
  const username = 'nikholau';

  useEffect(() => {
    window.process = {
       ...window.process
    };
 }, []);

  return <Home username={username} />
}

export default App
