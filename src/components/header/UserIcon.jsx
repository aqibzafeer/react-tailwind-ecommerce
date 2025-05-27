import { FiUser } from "react-icons/fi";

const UserIcon = ({ onClick }) => {
  return (
    <FiUser
      onClick={onClick}
      className="text-xl text-gray-700 hover:text-purple-600 cursor-pointer"
    />
  );
};

export default UserIcon;
