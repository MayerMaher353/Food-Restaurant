const pages = document.querySelectorAll(".page");
const links = document.querySelectorAll(".links a");
let currentPage = 1;

function showPage(pageNum) {
  pages.forEach((page, index) => {
    if (index + 1 === pageNum) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });
  currentPage = pageNum;
}

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");

    if (page === "next") {
      let nextPage = currentPage + 1;
      if (nextPage > pages.length) nextPage = 1;
      showPage(nextPage);
    } else {
      showPage(parseInt(page));
    }
  });
});

showPage(1);