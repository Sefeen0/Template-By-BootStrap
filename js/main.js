let li = document.querySelectorAll(".work ul li a");
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e) => {
    li.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
  });
}
