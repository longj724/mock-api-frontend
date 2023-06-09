// Relative Dependencies

// External Dependencies

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        {/* <h1 className="font-bold text-gray-900 text-4xl sm:text-3xl">Welcome Back, Barry!</h1> */}
        <h2 className="text-4xl font-extrabold dark:text-white pl-8">Mock API</h2>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Login
            </button>
          </li>
          <li>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
