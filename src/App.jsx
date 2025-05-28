import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { SearchProvider } from "./context/SearchContext"; // Import the context provider

function App() {
  return (
    <Router>
      <SearchProvider>
        <AppRoutes />
      </SearchProvider>
    </Router>
  );
}

export default App;
