import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

function UserName() {
  const userName = useSelector(getUsername);

  if (!userName) return null;
  return <p className="hidden text-sm font-semibold md:block">{userName}</p>;
}

export default UserName;
