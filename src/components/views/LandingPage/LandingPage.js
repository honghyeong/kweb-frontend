import axios from "axios";
import React, { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    axios.get("/api/connect").then((response) => console.log(response));
  }, []);
  return <div>LandingPage</div>;
}

export default LandingPage;
