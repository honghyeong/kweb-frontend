import { useHistory } from "react-router-dom";
import { getCookie } from "./Cookie";

export const undefinedRedirecting = () => {
  const role = getCookie("role");

  if (role === undefined) {
    window.location.href = "/";
  }
};

export const instructorRedirecting = () => {
  const role = parseInt(getCookie("role"));

  if (role !== 0) {
    alert("교수가 아닙니다.");
    window.location.href = "/lecture";
  }
};

export const studentRedirecting = () => {
  const role = parseInt(getCookie("role"));

  if (role !== 1) {
    alert("학생이 아닙니다.");
    window.location.href = "/lecture";
  }
};
