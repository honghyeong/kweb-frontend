import React from "react";

function createLecture() {
  return (
    <>
      <div className="create-box">
        <div>createLecture</div>
        <div>title</div>
        <input type="text" id="title" placeholder="title" />
        <div>description</div>
        <input type="text" id="description" placeholder="description" />
        <div>
          <button>등록</button>
          <button>취소</button>
        </div>
      </div>
    </>
  );
}

export default createLecture;
