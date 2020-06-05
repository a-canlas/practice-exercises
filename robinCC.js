function maskCC(ccNum){
  let reg = /\d(?=\d{4})/g;
  return ccNum.toString().replace(reg, "*");
}
