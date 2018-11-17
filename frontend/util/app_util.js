export const dropdownReveal = () => {
  document.getElementById("dropdownBox").classList.toggle("show");
}

export const dropdownHide = () => {
  let obj = document.getElementsByClassName("show")[0];
  if (obj) {
    obj.classList.toggle("show");
  }
}
