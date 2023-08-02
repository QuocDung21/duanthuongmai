export const overrideStyle = {
  display: "flex",
  margin: "0 auto",
  height: "24px",
  justifyContent: "center",
  alignItems: "center",
};

const currentPath = window.location.href;
export const baseURL =
  currentPath.split("/")[0] + "//" + currentPath.split("/")[2] + "/";
