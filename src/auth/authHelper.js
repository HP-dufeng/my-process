export const isAuthenticated = () => {
  if(localStorage.getItem("tokenId")) {
      return true;
  } else {
      return false;
  }
};