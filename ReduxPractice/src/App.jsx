import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header Navbar */}
      <header className="bg-gray-900 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide">MyApps</h1>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-6">
              <li>
                <NavLink
                  to={"todopage"}
                  className={({isActive})=> `px-3 py-2 rounded-md font-medium transition  ${isActive ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white" } ` }
                >
                  Todo-App
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"blogpage"}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`
                  }
                >
                  Blog-App
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto px-6 py-6">
        <Outlet />
      </main>
    </>
  );
}

export default App;
