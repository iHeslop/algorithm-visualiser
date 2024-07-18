import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import TraversalPage from "./pages/TraversalPage/TraversalPage";
import SortPage from "./pages/SortPage/SortPage";
import SortContextProvider from "./context/SortContextProvider";
import SearchContextProvider from "./context/SearchContextProvider";
import TraversalContextProvider from "./context/TraversalContextProvider";

function App() {
  return (
    <>
      <TraversalContextProvider>
        <SortContextProvider>
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
        </SortContextProvider>
      </TraversalContextProvider>
    </>
  );
}

export default App;
