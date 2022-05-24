import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {HomePage} from './container/Home';
import Events from "./container/Events";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<HomePage />} /> 
      <Route path = "events" element={<Events/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
