import React, { useState } from "react";

const menuItems = [
  { label: "Add User", key: "addUser" },
  { label: "Add Product", key: "addProduct" },
  { label: "Products List", key: "productsList" },
  { label: "Settings", key: "settings" },
  { label: "Orders", key: "orders" },
];

const contentMap = {
  addUser: "Add User Form (to be implemented)",
  addProduct: "Add Product Form (to be implemented)",
  productsList: "Products List (to be implemented)",
  settings: "Settings (to be implemented)",
  orders: "Orders (to be implemented)",
};

function Dashboard() {
  const [active, setActive] = useState(menuItems[0].key);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 font-bold text-xl border-b">Dashboard</div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`w-full text-left px-6 py-3 hover:bg-gray-200 transition ${
                active === item.key ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <div>{contentMap[active]}</div>
      </main>
    </div>
  );
}

export default Dashboard;
