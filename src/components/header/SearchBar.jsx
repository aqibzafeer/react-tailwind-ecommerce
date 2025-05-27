import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="relative hidden sm:block">
      <input
        type="text"
        placeholder="Search Products..."
        onChange={handleInputChange}
        className="pl-10 pr-4 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
    </div>
  );
};

export default SearchBar;
