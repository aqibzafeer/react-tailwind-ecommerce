import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { SearchProvider } from "./context/SearchContext";
import CartProvider from "./context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <SearchProvider>
          <AppRoutes />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"
          />
        </SearchProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
