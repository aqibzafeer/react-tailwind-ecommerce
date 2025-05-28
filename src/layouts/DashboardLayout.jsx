import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow border-b black">
        <Link to="/dashboard">
          <img src="/logo.png" alt="Logo" className="h-16 w-auto m-2 " />{" "}
        </Link>

        <Link to="/authform">
          <button className="px-5 bg-gradient-to-r from-gray-800 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition">
            Logout
          </button>
        </Link>
      </div>

      <div className="flex min-h-screen bg-gray-300">
        <aside className="w-64 bg-gray-900 shadow-md text-amber-50">
          <div className="p-6 font-bold text-xl border-b"></div>

          <nav className="mt-4">
            <Link to="/dashboard/addproductform">
              <button className="w-full mb-2 text-left px-4 py-2 ">
                Add Product
              </button>
            </Link>
            <Link to="/dashboard/manageproducts">
              <button className="w-full mb-2 text-left px-4 py-2 ">
                Product List
              </button>
            </Link>
            <button className="w-full mb-2 text-left px-4 py-2 ">Orders</button>
            <button className="w-full mb-2 text-left px-4 py-2 ">
              Settings
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
