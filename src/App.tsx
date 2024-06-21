import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import TraversalPage from "./pages/TraversalPage/TraversalPage";
import SortPage from "./pages/SortPage/SortPage";
import NumberContextProvider from "./context/NumberContextProvider";
import SearchContextProvider from "./context/SearchContextProvider";

function App() {
  return (
    <>
      <NumberContextProvider>
        <SearchContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sort" element={<SortPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/traversal" element={<TraversalPage />} />
            </Routes>
          </BrowserRouter>
        </SearchContextProvider>
      </NumberContextProvider>
    </>
  );
}

export default App;
