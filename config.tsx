export const ICON_URL = "/svg/";
export const LOGO_URL = ICON_URL + "/logo-black.svg";

export const IMAGE_BANNER_URL = "/images/imageBg.png";
export const IMAGE_GIFT_URL = "/images/grass-header.jpg";

export const TEMPLATE_PATH = "/db/templates/";
// this is for server load data
// export const FILE_PATH_MODALS = "/db/templates/modals.json"
// export const FILE_PATH_HEADER = "/db/templates/container.json"
// export const TEMPLATE_LIST_PATH = "/db/templates.json"

export const FILE_PATH_LOGO = "./public/images/logo.png";
export const FILE_PATH_SIDEBAR_IMG = "./public/images/sidebarImg.jpg";
export const FILE_PATH_GIFT_IMG = "./public/images/giftImg.jpg";

// --------------------------------------------------------------- images for local

// export const FILE_PATH_LOGO = process.env.NEXT_PUBLIC_FRONTEND_URL + "/images/logo.png"
// export const FILE_PATH_SIDEBAR_IMG = process.env.NEXT_PUBLIC_FRONTEND_URL + "/images/sidebarImg.jpg"
// export const FILE_PATH_GIFT_IMG = process.env.NEXT_PUBLIC_FRONTEND_URL + "/images/giftImg.jpg"

// --------------------------------------------------------------- for local development load Data

export const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
export const FILE_PATH_HEADER =
  process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/getHeader";
export const FILE_PATH_MODALS =
  process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/getModals";
export const FILE_PATH_APP =
  process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/loadApp";

export const BASE_POST_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
// export const PATH_POST_HEADER = process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/postHeader"
export const PATH_POST_UPLOAD_App =
  process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/uploadApp";
export const PATH_POST_MODALS =
  process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/postModals";
// export const PATH_POST_IMG_LOCAL = process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/postImg"
export const PATH_POST_IMG_MOVE =
  process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/imagMove";

// export const PATH_POST_LANDING_PAGE = process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/postLandingPage"
// export const PATH_POST_GIFT_PAGE = process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/postgiftPage"

// this is only for local we do not need this for server without template
export const FILE_PATH_MODALS_GET_API = "./public/db/modals.json";
export const FILE_PATH_HEADER_GET_API = "./public/db/container.json";

export const TEMPLATE_PATH_LOCAL = "./public/db/templates/";

export const FILE_IMAGE_GET_API = "./public/images/front.png";
export const FILE_IMAGE_GET_API1 = "./public/images/mountain.jpg";
export const FOLDER_IMAGE = "./public/images/";
export const PATH_POST_IMG =
  process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/uploadAppImage";

export const FILE_PATH_GET_API = "./public/db/templates/";

export const FOLDER_IMAGE_PATH = "./public/images/";
