let headIcon = document.getElementById("headicon");
let myListNav = document.getElementById("headlist");

headIcon.onclick = () => {
  let headerWidth = document.querySelector("header .logo").clientWidth * -1;
  let x = document.body.clientWidth;
  myListNav.style.width = `${x}px`;
  myListNav.style.setProperty("width", `${x}`, "important");
  myListNav.style.setProperty(
    "transform",
    `translateX(${headerWidth}px)`,
    "important"
  );
  //   if (document.getElementById("headlist").classList.contains("non-display")) {
  document.getElementById("headlist").classList.toggle("non-display");
  document.getElementById("headlist").classList.toggle("block-display");
  console.log(headerWidth);
  //   }
};
//   else if ((document.getElementById("headicon").style.display = "block"))
//     document.getElementById("headlist").style.display = "none";
// };
