import axios from "axios";
import React, { useEffect, useState } from "react";
import InstructorLecture from "./Sections/InstructorLecture";
import "./Sections/css/InstructorLectures.css";
import {
  instructorRedirecting,
  undefinedRedirecting,
} from "../../../utils/AuthRedirecting";
/**
 * 교수자가 개설한 강의 목록을 볼 수 있다.
 * 해당 강의를 누르면 강의에 등록된 게시물 목록을 보여준다.
 */

function InstructorLectures() {
  const [lectures, setLecture] = useState([]);

  undefinedRedirecting();
  instructorRedirecting();

  useEffect(() => {
    axios.get("/api/lecture/instructor").then((response) => {
      setLecture(response.data);
    });
  }, [lectures]);

  const onCreate = () => {
    window.location.href = "/lecture/register";
  };

  const onClick = (event) => {
    const lectureId = event.target.id;
    console.log(lectureId);
    window.location.href = "/board/lists/" + lectureId;
  };

  return (
    <>
      <div className="lecture-box">
        <div className="instructor-lecture-list-box">
          <div className="instructor-lecture-name">교수 강의 개설 목록</div>

          <button onClick={onCreate}>강의 개설</button>
          <div className="instructor-lecture-category">
            <div className="instructor-lecture-category-id">id</div>
            <div className="instructor-lecture-category-title">title</div>
            <div className="instructor-lecture-category-description">
              description
            </div>
          </div>
          {lectures.map((lecture) => {
            return (
              <InstructorLecture
                lecture={lecture}
                key={lecture.id}
                onClick={onClick}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default InstructorLectures;
