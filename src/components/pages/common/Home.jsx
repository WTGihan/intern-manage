import React from "react";
import Session from "react-session-api";

function Home() {
  console.log(Session.get("loginUser"));
  return (
    <div>
      <h1 className="text-center">Home Page</h1>
      {/* render student home or company home according to login user */}
    </div>
  );
}

export default Home;
