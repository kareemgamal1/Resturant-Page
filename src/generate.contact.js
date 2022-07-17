let parent = document.querySelector(".content");

export default function generateContact() {
  removeAllChildNodes(parent);
  let background = document.createElement("div");
  background.id = "background";
  let page = document.createElement("div");
  page.className = "page";

  let header = document.createElement("div");
  header.id = "header";

  //   Header Start
  let nav1 = document.createElement("ul");
  nav1.className = "navigation";
  let aboutList = document.createElement("li");
  let aboutLink = document.createElement("a");
  aboutLink.className = "about-btn";
  aboutLink.innerText = "ABOUT";
  aboutList.appendChild(aboutLink);
  nav1.appendChild(aboutList);
  header.appendChild(nav1);

  let logo = document.createElement("a");
  logo.href = "https://www.youtube.com/watch?v=RE4usAXuVKo&t=196s";
  logo.id = "logo";
  //   logo.target = "_blank";
  let logoImg = document.createElement("img");
  logoImg.src = "/src/resource/logo2.jpg";
  logoImg.style.width = "276px";
  logoImg.style.height = "203px";
  logo.appendChild(logoImg);
  header.appendChild(logo);

  let nav2 = document.createElement("ul");
  nav2.id = "navigation";
  let menuList = document.createElement("li");
  let menuLink = document.createElement("a");
  menuLink.className = "menu-btn";
  menuLink.innerText = "OUR MENU";
  menuList.appendChild(menuLink);
  nav2.appendChild(menuList);

  let contactList = document.createElement("li");
  let contactLink = document.createElement("a");
  contactLink.className = "contact-btn";
  contactLink.classList.add("active");
  contactLink.innerText = "CONTACT US";
  contactList.appendChild(contactLink);
  nav2.appendChild(contactList);
  header.appendChild(nav2);
  //   Header End
  let body1 = document.createElement("div");
  body1.id = "body";
  let content = document.createElement("div");
  content.className = "content";
  let body2 = document.createElement("div");
  body2.className = "body";
  let h3 = document.createElement("h3");
  h3.innerText = "CONTACT US";
  body2.appendChild(h3);
  // Section Start
  let section = document.createElement("ul");
  section.className = "section";
  // Section End
  let table = document.createElement("table");
  createCell(
    table,
    "Store Location",
    "32 Morbi Suscipit Semquis Aliquet Consequat, 1234"
  );
  createCell(table, "Store hours", "Monday to Sunday : 10:30am - 9:30pm");
  createCell(table, "Reservation Number", "(864) 232-3706");
  createCell(table, "Office Phone Number", "(864) 232-3553");
  createCell(table, "Email", "fake@fakecompany.org");

  body2.appendChild(h3);
  body2.appendChild(table);
  content.appendChild(body2);
  body1.appendChild(content);
  page.appendChild(header);
  page.appendChild(body1);
  background.appendChild(page);
  parent.appendChild(background);
}

function createCell(table, title, description) {
  let cell = document.createElement("tr");
  let detailsTitle = document.createElement("td");
  let detailsSpan = document.createElement("span");
  detailsSpan.innerText = title;
  detailsTitle.appendChild(detailsSpan);
  let detailsDescription = document.createElement("td");
  detailsDescription.innerText = description;
  cell.appendChild(detailsTitle);
  cell.appendChild(detailsDescription);
  table.appendChild(cell);
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
