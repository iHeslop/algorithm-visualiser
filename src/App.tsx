import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import SortPage from "./pages/SortPage/SortPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import TraversalPage from "./pages/TraversalPage/TraversalPage";
import NumberContextProvider from "./context/NumberContextProvider";

function App() {
  return (
    <NumberContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sort" element={<SortPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/traversal" element={<TraversalPage />} />
        </Routes>
      </BrowserRouter>
    </NumberContextProvider>
  );
}

export default App;
