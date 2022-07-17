import generateAbout from "./generate.about.js";
import generateMenu from "./generate.menu.js";
import generateContact from "./generate.contact.js";
import "./css/main.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

dom.i2svg();
generateAbout();

function reRender() {
  let about = document.querySelector(".about-btn");
  let menu = document.querySelector(".menu-btn");
  let contact = document.querySelector(".contact-btn");
  about.addEventListener("click", () => {
    generateAbout();
    reRender();
  });
  menu.addEventListener("click", () => {
    generateMenu();
    reRender();
  });
  contact.addEventListener("click", () => {
    generateContact();
    reRender();
  });
}
reRender();
