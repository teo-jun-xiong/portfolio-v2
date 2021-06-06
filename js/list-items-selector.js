function selectProject(index) {
  var itemNames = document.querySelectorAll(
    ".projects-content-left-content .item-name"
  );
  var itemDetails = document.querySelectorAll(
    ".projects-content-right-content .item-detail"
  );
  var itemImages = document.querySelectorAll(
    ".projects-content.section-content .projects-content-img"
  );
  var section = document.querySelector(".projects-content-right");

  section.classList.add("slide-in-right");
  setTimeout(() => {
    section.classList.remove("slide-in-right");
  }, 600);


  for (var i = 0; i < itemNames.length; i++) {
    if (index === i) {
      itemNames[i].classList.add("active");

      itemDetails[i].classList.remove("hide");

      itemImages[i].classList.add("show");
      itemImages[i].classList.remove("hide");
    } else {
      itemNames[i].classList.remove("active");

      itemDetails[i].classList.add("hide");

      itemImages[i].classList.remove("show");
      itemImages[i].classList.add("hide");
    }
  }
}

function selectExperience(index) {
  var itemNames = document.querySelectorAll(
    ".experience-content-right-content .item-name"
  );
  var itemDetails = document.querySelectorAll(
    ".experience-content-left-content .item-detail"
  );
  var section = document.querySelector(".experience-content-left");

  section.classList.add("slide-in-left");
  setTimeout(() => {
    section.classList.remove("slide-in-left");
  }, 600);

  for (var i = 0; i < itemNames.length; i++) {
    if (index === i) {
      itemNames[i].classList.add("active");

      itemDetails[i].classList.remove("hide");
    } else {
      itemNames[i].classList.remove("active");

      itemDetails[i].classList.add("hide");
    }
  }
}

function selectSkills(index) {
  var itemNames = document.querySelectorAll(
    ".skills-content-right-content .item-name"
  );
  var itemDetails = document.querySelectorAll(
    ".skills-content-left-content .item-detail"
  );
  var section = document.querySelector(".skills-content-left");

  section.classList.add("slide-in-left");
  setTimeout(() => {
    section.classList.remove("slide-in-left");
  }, 600);

  for (var i = 0; i < itemNames.length; i++) {
    if (index === i) {
      itemNames[i].classList.add("active");

      itemDetails[i].classList.remove("hide");
    } else {
      itemNames[i].classList.remove("active");

      itemDetails[i].classList.add("hide");
    }
  }
}
