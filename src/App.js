import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import View from "./components/View";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
          <Route path="/edit/1" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
