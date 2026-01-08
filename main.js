document.addEventListener("DOMContentLoaded", () => {
  const introButton = document.querySelector(".intro-button");
  const workButton = document.querySelector(".work-button");
  const getMainContainer = document.getElementById("main");
  const closeButton = document.querySelectorAll(".fa-x");
  const mainWrapper = document.querySelector(".content-wrapper");
  const getBackground = document.getElementById("bg");

  const groupedElements = [
    document.querySelector(".top"),
    document.querySelector(".middle"),
    document.querySelector(".bottom"),
    document.querySelector(".footer"),
  ];

  const getMyNav = [
    document.querySelector(".intro-button"),
    document.querySelector(".work-button"),
    document.querySelector(".about-button"),
    document.querySelector(".contact-button"),
  ];

  const childrenArray = Array.from(getMainContainer.children);

  childrenArray.forEach(child => child.style.display = "none");

  let hideContent = () => {
    getMainContainer.style.opacity = "0";
    getBackground.classList.remove("blur-effect");
    mainWrapper.style.paddingBottom = "0";
    groupedElements.forEach(element => {
      element.style.transform = "scale(1)";
      element.style.opacity = "1";
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
      groupedElements.forEach(element => element.style.opacity = "0");
      childrenArray.forEach(child => child.style.display = "none");

      if (nav.classList.contains("intro-button")) childrenArray[0].style.display = "block";
      if (nav.classList.contains("work-button")) childrenArray[1].style.display = "block";
      if (nav.classList.contains("about-button")) childrenArray[2].style.display = "block";
      if (nav.classList.contains("contact-button")) childrenArray[3].style.display = "block";
    });
  });

  closeButton.forEach(close => close.addEventListener("click", hideContent));
});
