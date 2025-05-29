import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { SearchProvider } from "./context/SearchContext";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <Router>
      <CartProvider>
        <SearchProvider>
          <AppRoutes />
        </SearchProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
