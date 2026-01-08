document.addEventListener("DOMContentLoaded", () => {
  const introButton = document.querySelector(".intro-button");
  const workButton = document.querySelector(".work-button");
  const getMainContainer = document.getElementById("main");
  const closeButton = document.querySelectorAll(".fa-x");
  const mainWrapper = document.querySelector(".content-wrapper");
  const getBackground = document.getElementById("bg");

  // Landing Content
  const groupedElements = [
    document.querySelector(".top"),
    document.querySelector(".middle"),
    document.querySelector(".bottom"),
    document.querySelector(".footer")
  ];

  // Navigation
  const getMyNav = [
    document.querySelector(".intro-button"),
    document.querySelector(".work-button"),
    document.querySelector(".about-button"),
    document.querySelector(".contact-button")
  ];

  // Main Sections
  const childrenArray = Array.from(getMainContainer.children);
  childrenArray.forEach(child => child.style.display = "none");

  const hideContent = () => {
    getMainContainer.style.opacity = "0";
    getBackground.classList.remove("blur-effect");
    mainWrapper.style.paddingBottom = "0";
    groupedElements.forEach(el => {
      el.style.transform = "scale(1)";
      setTimeout(() => { el.style.opacity = "1"; }, 200);
      childrenArray.forEach(child => child.style.display = "none");
    });
  };

  document.addEventListener("click", (event) => {
    if (!getMainContainer.contains(event.target)) hideContent();
  });

  getMyNav.forEach(nav => {
    nav.addEventListener("click", (event) => {
      event.stopPropagation();
      getMainContainer.style.opacity = "1";
      getBackground.classList.add("blur-effect");
      groupedElements.forEach(el => {
        el.style.transform = "scale(0.7)";
        setTimeout(() => { el.style.opacity = "0"; }, 50);
      });

      let navigationText = nav.textContent.trim();
      if (navigationText === "Intro") childrenArray[0].style.display = "block";
      else if (navigationText === "Work") childrenArray[1].style.display = "block";
      else if (navigationText === "About") childrenArray[2].style.display = "block";
      else if (navigationText === "Contact") childrenArray[3].style.display = "block";
    });
  });

  closeButton.forEach(close => close.addEventListener("click", hideContent));
});
