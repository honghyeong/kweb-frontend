import axios from "axios";
import React, { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    axios
      .get("http://localhost:3002/api/connect")
      .then((response) => console.log(response));
  }, []);
  return <div>LandingPage</div>;
}

export default LandingPage;
