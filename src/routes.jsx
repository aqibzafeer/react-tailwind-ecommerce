import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import AuthForm from "./pages/Auth";
import SingleProduct from "./pages/SingleProduct";
import PageNotFound from "./pages/PageNotFound";

import Dashboard from "./pages/Dashboard";
import AddProductForm from "./pages/AddProductForm";
import ManageProducts from "./pages/ManageProducts";

function AppRoutes() {
  return (
    <Routes>
      {/* Main Layout Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/authform" element={<AuthForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Route>

      {/* Dashboard Layout Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="addproductform" element={<AddProductForm />} />
        <Route path="manageproducts" element={<ManageProducts />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
