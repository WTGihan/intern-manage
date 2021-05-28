import React, { useEffect } from "react";

function Logout({ setLoginUser, loginUser }) {
  useEffect(() => {
    setLoginUser([...loginUser, { email: "", userType: "" }]);
  }, []);

  return null;
}

export default Logout;
