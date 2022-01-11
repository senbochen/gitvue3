import request from "axios";
const base = "/api";
const getBaseInfor = (params) => request({
  params,
  url: base + "/asyncfullcolumn",
  method: "GET"
});
export {getBaseInfor};
