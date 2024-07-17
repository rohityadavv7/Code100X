const REACT_APP_BASE_URL = "http://localhost:5000"

export const userAPIS = {
    SIGNUP_API : REACT_APP_BASE_URL+"/auth/signup",
    LOGIN_API : REACT_APP_BASE_URL+"/auth/login",
    GET_USER_API : REACT_APP_BASE_URL+"/users/me",

}
export const courseAPIS = {
    GET_ALL_COURSES_API: REACT_APP_BASE_URL+"/courses/getAllCourses",
    GET_SELECTED_COURSE_API: REACT_APP_BASE_URL+"/courses/getSelectedCourse"
}