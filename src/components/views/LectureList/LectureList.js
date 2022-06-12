import React, { useEffect, useState } from "react";
import Lecture from "./Sections/Lecture";

function LectureList() {
  const [lecture, setLecture] = useState([]);

  // useEffect()

  return (
    <>
      <div>LectureList</div>
      <Lecture />
    </>
  );
}

export default LectureList;
