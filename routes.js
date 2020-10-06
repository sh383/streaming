const HOME = "/";
const LOGIN = "/login";
const JOIN = "/join";
const UPLOAD = "/upload";
const SEARCH = "/search";

const VIDEOS = "/videos";
const VIDEO_DETAIL = ":id"; // 나중에 함수로
const EDIT_VIDEO = "/video/:id/edit-video";

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";

const routes = {
  home: HOME,
  login: LOGIN,
  join: JOIN,
  upload: UPLOAD,
  search: SEARCH,

  videos: VIDEOS,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,

  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
};
export default routes;
