import { useEffect } from "react";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("loginUser");
    window.location = "/";
  }, []);

  return null;
}

export default Logout;
