export default function selectDropdownModule() {
  function initializeDropdown(optionMenu) {
    const selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".option"),
      btn_text = optionMenu.querySelector(".btn-text");

    selectBtn.addEventListener("click", () =>
      optionMenu.classList.toggle("active")
    );

    options.forEach((option) => {
      option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        btn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
      });
    });
  }

  // Sử dụng hàm để khởi tạo dropdown cho mỗi dropdown trên trang
  document.querySelectorAll(".select-menu").forEach((optionMenu) => {
    initializeDropdown(optionMenu);
  });
}
