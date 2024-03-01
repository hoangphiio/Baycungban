export default function tabModule() {
  let tab = document.querySelectorAll(".tab-main");
  if (tab) {
    tab.forEach((t) => {
      let tBtn = t.querySelectorAll(".tab-btn");
      let tPanel = t.querySelectorAll(".tab-content");

      if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
        for (let i = 0; i < tBtn.length; i++) {
          tBtn[i].addEventListener("click", showPanel);

          function showPanel(e) {
            e.preventDefault();
            for (let a = 0; a < tBtn.length; a++) {
              tBtn[a].classList.remove("active");
              tPanel[a].classList.remove("open");
            }
            tBtn[i].classList.add("active");
            tPanel[i].classList.add("open");
          }
        }
      }
    });
  }
}
