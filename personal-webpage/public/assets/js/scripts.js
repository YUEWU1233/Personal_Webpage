// 菜单按钮和菜单栏
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
let clickOpen = false;

// 切换菜单显示/隐藏
function toggleMenu(open) {
  if (open) {
    navbar.classList.add("menu-open");
  } else {
    navbar.classList.remove("menu-open");
  }
}

// 点击菜单按钮切换
if (menuIcon && navbar) {
  menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    clickOpen = !clickOpen;
    toggleMenu(clickOpen);
  });
}

// 点击菜单项关闭菜单
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    clickOpen = false;
    toggleMenu(false);
  });
});

// 点击空白处关闭菜单
document.addEventListener("click", (e) => {
  if (clickOpen && navbar && !navbar.contains(e.target)) {
    clickOpen = false;
    toggleMenu(false);
  }
});

// Mini profile 联系方式弹窗
function toggleMiniContactMenu(e) {
  e.stopPropagation();
  const menu = document.getElementById("miniContactMenu");
  if (menu) menu.classList.toggle("show");
}

// 点击空白处关闭 mini contact 菜单
document.addEventListener("click", () => {
  const menu = document.getElementById("miniContactMenu");
  if (menu) menu.classList.remove("show");
});

// 图片轮播及左右箭头
function startGalleryCarousel(imgList, carouselId, interval = 2500) {
  let idx = 0;
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;
  const img = carousel.querySelector(".carousel-img");
  const left = carousel.querySelector(".left-arrow");
  const right = carousel.querySelector(".right-arrow");
  let timer;

  function showImg(newIdx) {
    idx = (newIdx + imgList.length) % imgList.length;
    img.src = imgList[idx];
    img.alt = "Gallery Photo " + (idx + 1);
  }

  function next() {
    showImg(idx + 1);
    resetTimer();
  }
  function prev() {
    showImg(idx - 1);
    resetTimer();
  }
  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => showImg(idx + 1), interval);
  }

  if (left && right) {
    left.onclick = prev;
    right.onclick = next;
  }
  showImg(idx);
  timer = setInterval(() => showImg(idx + 1), interval);
}
