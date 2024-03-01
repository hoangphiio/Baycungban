import dateModule from "./modules/dateModule.js";
import menuModule from "./modules/menuModule.js";
import scrollHeaderModule from "./modules/scrollHeaderModule.js";
import selectDropdownModule from "./modules/selectDropdownModule.js";
import swapModule from "./modules/swapModule.js";
import tabModule from "./modules/tabModule.js";

window.addEventListener("DOMContentLoaded", () => {
  dateModule();
  menuModule();
  scrollHeaderModule();
  selectDropdownModule();
  swapModule();
  tabModule();
});
