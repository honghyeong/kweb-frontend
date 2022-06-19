import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentLecture from "./Sections/StudentLecture";
import "./Sections/css/StudentLectures.css";
import {
  instructorRedirecting,
  studentRedirecting,
  undefinedRedirecting,
} from "../../../utils/AuthRedirecting";
/**
 * 학생이 신청한 강의 목록을 볼 수 있다.
 * 해당 강의를 누르면 강의에 등록된 게시물 목록을 보여준다.
 */

function StudentLectures() {
  const [lectures, setLecture] = useState([]);

  undefinedRedirecting();
  studentRedirecting();

  const onClick = (event) => {
    const lectureId = event.target.id;
    window.location.href = "/board/lists/" + lectureId;
  };

  useEffect(() => {
    axios.get("/api/lecture/student").then((response) => {
      setLecture(response.data);
    });
  }, [lectures]);

  return (
    <>
      <div className="lecture-box">
        <div className="instructor-lecture-list-box">
          <div className="instructor-lecture-name">학생 강의 수강 목록</div>

          <div className="instructor-lecture-category">
            <div className="instructor-lecture-category-id">id</div>
            <div className="instructor-lecture-category-title">title</div>
            <div className="instructor-lecture-category-description">
              description
            </div>
          </div>
          {lectures.map((lecture) => {
            return (
              <StudentLecture
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

export default StudentLectures;
