// 간단한 로그용 콘솔 메시지
console.log("LogiPort 사이트에 오신 것을 환영합니다!");

// smooth scroll for anchor links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
