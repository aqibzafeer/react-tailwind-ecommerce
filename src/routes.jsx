import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import SingleProduct from "./pages/SingleProduct";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import ManageProducts from "./pages/ManageProducts";
import Orders from "./pages/Orders";
import ProductSetting from "./pages/ProductSetting";
import CategoryTShirts from "./components/CategoryTShirts";
import Categories from "./pages/Categories";

function AppRoutes() {
  return (
    <Routes>
      {/* Main Layout Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Category />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categorytshirts" element={<CategoryTShirts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Route>

      {/* Dashboard Layout Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="manageproducts" element={<ManageProducts />} />
        <Route path="productsettings" element={<ProductSetting />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
