document.addEventListener("DOMContentLoaded", () => {
  const introButton = document.querySelector(".intro-button");
  const workButton = document.querySelector(".work-button");
  const getMainContainer = document.getElementById("main");
  const closeButton = document.querySelectorAll(".fa-x");
  const mainWrapper = document.querySelector(".content-wrapper");

  const getBackground = document.getElementById("bg");
  // const contactForm = document.getElementById('submitter')
  // const submitButton = document.getElementById('submit')

  const resetButton = document.getElementById("reset");
  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");
  const userMessage = document.getElementById("userMessage");

  //   //Form Submission

  //   document.getElementById('submit').addEventListener('click', function() {
  //     document.getElementById('contact').submit();
  // });

  //Reset function
  resetButton.addEventListener("click", () => {
    userName.value = "";
    userEmail.value = "";
    userMessage.value = "";
  });

  //Landing Content Array
  const groupedElements = [
    document.querySelector(".top"),
    document.querySelector(".middle"),
    document.querySelector(".bottom"),
    document.querySelector(".footer"),
  ];

  //Navigation Button Array
  const getMyNav = [
    document.querySelector(".intro-button"),
    document.querySelector(".work-button"),
    document.querySelector(".about-button"),
    document.querySelector(".contact-button"),
  ];

  //Nagivation content array
  const getMyNavContent = [
    document.getElementById("intro"),
    document.getElementById("work"),
    document.getElementById("about"),
    document.getElementById("contact"),
  ];
  //Amination on page load
  groupedElements[0].classList.add("move-up");
  groupedElements[1].classList.add("show");

  //Turn children of getMainContainer  list into an array
  const childrenArray = Array.from(getMainContainer.children);

  //Hide Each MainContent Section
  childrenArray.forEach((child) => {
    child.style.display = "none";
  });

  //Hide Content Function
  let hideContent = () => {
    getMainContainer.style.opacity = "0";
    getBackground.classList.remove("blur-effect");
    mainWrapper.style.paddingBottom = "0";

    groupedElements.forEach((element) => {
      element.style.transform = "scale(1)";
      element.style.transtion = "transform ease-in-out 1s";

      setTimeout(() => {
        element.style.opacity = "1";
      }, 200);

      childrenArray.forEach((navigationTodisappear) => {
        navigationTodisappear.style.display = "none";
      });
    });
  };

  //Add close main content window on Overlay click
  document.addEventListener("click", (event) => {
    if (!getMainContainer.contains(event.target)) {
      //console.log('Inside Main is clicked!!')
      hideContent();
    } else {
      // console.log('Inside Main is clicked!!')
    }
  });

  getMyNav.forEach((navigation) => {
    navigation.addEventListener("click", (event) => {
      event.stopPropagation();

      //Visualise the main content wrapper
      getMainContainer.style.opacity = "1";

      //Add blur on background image
      getBackground.classList.add("blur-effect");

      //Hide landing page content
      groupedElements.forEach((element) => {
        element.style.transform = "scale(0.7)";
        //element.style.transtion = 'transform ease-in-out .7s'

        setTimeout(() => {
          element.style.opacity = "0";
        }, 50);
      });

      let navigationText = navigation.textContent.trim();

      if (navigationText === "Intro") {
        mainWrapper.style.paddingBottom = "300px";
        childrenArray[0].style.display = "block";
      } else if (navigationText === "Work") {
        mainWrapper.style.paddingBottom = "300px";
        childrenArray[1].style.display = "block";
      } else if (navigationText === "About") {
        mainWrapper.style.paddingBottom = "300px";

        childrenArray[2].style.display = "block";
      } else if (navigationText === "Contact") {
        mainWrapper.style.paddingBottom = "100px";
        childrenArray[3].style.display = "block";
      } else console.log("Unknown option");
    });
  });

  //Close button
  closeButton.forEach((close) => {
    close.addEventListener("click", (event) => {
      hideContent();
    });
  });
});
