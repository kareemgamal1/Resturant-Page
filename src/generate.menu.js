let parent = document.querySelector(".content");

export default function generateMenu() {
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
  menuLink.classList.add("active");
  menuLink.innerText = "OUR MENU";
  menuList.appendChild(menuLink);
  nav2.appendChild(menuList);

  let contactList = document.createElement("li");
  let contactLink = document.createElement("a");
  contactLink.className = "contact-btn";
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
  h3.innerText = "MENU";
  body2.appendChild(h3);
  // Section Start
  let section = document.createElement("ul");
  section.className = "section";
  //   List1 Start
  let oddList1 = document.createElement("li");
  oddList1.className = "odd";
  let h2_1 = document.createElement("h2");
  h2_1.innerText = "GRILLED";
  oddList1.appendChild(h2_1);
  let ul_1 = document.createElement("ul");
  let li_1_1 = createList(
    "Lorem ipsum dolor sit amet, consectetur",
    "$40.00",
    "Praesent pretium venenatis nunc, eget porttitor tellus"
  );
  let li_1_2 = createList(
    "Praesent id arcu ligula, at pulvinar est",
    "$70.00",
    "Suspendisse potenti. Phasellus ac nibh massa"
  );
  let li_1_3 = createList(
    "Cras turpis urna, luctus sed dapibus sed",
    "$120.00",
    "Quisque accumsan, leo non aliquet pulvinar, ante justo"
  );
  let li_1_4 = createList(
    "Nullam fermentum aliquet nibh quis",
    "$80.00",
    "Donec blandit libero a felis gravida sed tempus est ultrices"
  );
  let li_1_5 = createList(
    "Lorem ipsum dolor sit amet, consectetur",
    "$100.00",
    "Praesent pretium venenatis nunc, eget porttitor tellus"
  );
  li_1_5.className = "last";
  ul_1.appendChild(li_1_1);
  ul_1.appendChild(li_1_2);
  ul_1.appendChild(li_1_3);
  ul_1.appendChild(li_1_4);
  ul_1.appendChild(li_1_5);
  oddList1.appendChild(ul_1);
  section.appendChild(oddList1);
  //   List1 End
  //   List2 Start
  let list1 = document.createElement("li");
  let h2_2 = document.createElement("h2");
  h2_2.innerText = "STARTERS";
  list1.appendChild(h2_2);
  let ul_2 = document.createElement("ul");
  let li_2_1 = createList(
    "Nullam fermentum aliquet nibh quis",
    "$50.00",
    "Donec blandit libero a felis gravida sed tempus est ultrices"
  );
  let li_2_2 = createList(
    "Lorem ipsum dolor sit amet, consectetur adipi",
    "$75.00",
    "Venenatis nunc, eget porttitor tellus dignissim et"
  );
  let li_2_3 = createList(
    "Praesent id arcu ligula, at pulvinar justo gravida",
    "$45.00",
    "Suspendisse potenti. Phasellus ac nibh massa"
  );
  let li_2_4 = createList(
    "Cras turpis urna, luctus sed dapibus sed",
    "$40.00",
    "Quisque accumsan, leo non aliquet pulvinar, ante justo ultricie"
  );
  let li_2_5 = createList(
    "Ullam fermentum aliquet nibh quis",
    "$35.00",
    "Donec blandit libero a felis gravida sed tempus est ultrices"
  );
  li_2_5.className = "last";
  ul_2.appendChild(li_2_1);
  ul_2.appendChild(li_2_2);
  ul_2.appendChild(li_2_3);
  ul_2.appendChild(li_2_4);
  ul_2.appendChild(li_2_5);
  list1.appendChild(ul_2);
  section.appendChild(list1);
  //   List2 End
  //   List3 Start
  let oddList2 = document.createElement("li");
  oddList2.className = "odd";
  let h2_3 = document.createElement("h2");
  h2_3.innerText = "APPETIZERS";
  oddList2.appendChild(h2_3);
  let ul_3 = document.createElement("ul");
  let li_3_1 = createList(
    "Lorem ipsum dolor sit amet, consectetur",
    "$25.00",
    "Praesent pretium venenatis nunc, eget porttitor tellus"
  );
  let li_3_2 = createList(
    "Praesent id arcu ligula, at pulvinar est",
    "$20.00",
    "Suspendisse potenti. Phasellus ac nibh massa"
  );
  let li_3_3 = createList(
    "Cras turpis urna, luctus sed dapibus sed",
    "$10.00",
    "Quisque accumsan, leo non aliquet pulvinar, ante justo"
  );
  let li_3_4 = createList(
    "Nullam fermentum aliquet nibh quis",
    "$10.00",
    "Donec blandit libero a felis gravida sed tempus est ultrices"
  );
  let li_3_5 = createList(
    "Lorem ipsum dolor sit amet, consectetur",
    "$24.00",
    "Praesent pretium venenatis nunc, eget porttitor tellus"
  );
  li_3_5.className = "last";
  ul_3.appendChild(li_3_1);
  ul_3.appendChild(li_3_2);
  ul_3.appendChild(li_3_3);
  ul_3.appendChild(li_3_4);
  ul_3.appendChild(li_3_5);
  oddList2.appendChild(ul_3);
  section.appendChild(oddList2);
  //   List3 End
  //   List4 Start
  let list2 = document.createElement("li");
  let h2_4 = document.createElement("h2");
  h2_4.innerText = "SALADS";
  list2.appendChild(h2_4);
  let ul_4 = document.createElement("ul");
  let li_4_1 = createList(
    "Nullam fermentum aliquet nibh quis",
    "$4.00",
    "Donec blandit libero a felis gravida sed tempus est ultrices"
  );
  let li_4_2 = createList(
    "Lorem ipsum dolor sit amet, consectetur adipi",
    "$5.00",
    "Venenatis nunc, eget porttitor tellus dignissim et"
  );
  let li_4_3 = createList(
    "Praesent id arcu ligula, at pulvinar justo gravida",
    "$7.00",
    "Suspendisse potenti. Phasellus ac nibh massa"
  );
  let li_4_4 = createList(
    "Cras turpis urna, luctus sed dapibus sed",
    "$4.00",
    "Quisque accumsan, leo non aliquet pulvinar, ante justo ultricie"
  );
  let li_4_5 = createList(
    "Ullam fermentum aliquet nibh quis",
    "$3.00",
    "Donec blandit libero a felis gravida sed tempus est ultrices"
  );
  li_4_5.className = "last";
  ul_4.appendChild(li_4_1);
  ul_4.appendChild(li_4_2);
  ul_4.appendChild(li_4_3);
  ul_4.appendChild(li_4_4);
  ul_4.appendChild(li_4_5);
  list2.appendChild(ul_4);
  section.appendChild(list2);

  body2.appendChild(h3);
  body2.appendChild(section);
  content.appendChild(body2);
  body1.appendChild(content);
  page.appendChild(header);
  page.appendChild(body1);
  background.appendChild(page);
  parent.appendChild(background);
}

function createList(h, s, p) {
  let currentList = document.createElement("li");
  let h2 = document.createElement("h2");
  let subLink = document.createElement("a");
  subLink.innerText = h;
  h2.appendChild(subLink);
  let span = document.createElement("span");
  span.innerText = s;
  let para = document.createElement("p");
  para.innerText = p;
  currentList.appendChild(h2);
  currentList.appendChild(span);
  currentList.appendChild(para);
  return currentList;
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
