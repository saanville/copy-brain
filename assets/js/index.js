document.querySelector(".body_inner");

window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("active");

  window.setTimeout(() => {
    document.querySelector(".loader").classList.remove("active");
  }, 2000);
  const ScrollAnimation = (e) => {
    let why_us_section = document.querySelector(".why_us");
    let why_us_sectionTop = why_us_section.getBoundingClientRect().top;

    let pricing_section = document.querySelector(".Pricing");
    let pricing_sectionTop = pricing_section.getBoundingClientRect().top;

    let booking_area = document.querySelector(".booking_area");
    let booking_areaTop = booking_area.getBoundingClientRect().top;

    let contact_area = document.querySelector(".contact_area");
    let contact_areaTop = contact_area.getBoundingClientRect().top;

    if (why_us_sectionTop < 300) {
      why_us_section.classList.add("active");
    }
    if (pricing_sectionTop < 300) {
      pricing_section.classList.add("active");
    }
    if (booking_areaTop < 300) {
      booking_area.classList.add("active");
    }
  };

  document.querySelectorAll("header a").forEach((EachLink) => {
    EachLink.classList.add("active");
  });

  window.addEventListener("scroll", ScrollAnimation);

  document
    .querySelector(".contact_area .button_wrapper button")
    .addEventListener("click", (e) => {
      e.preventDefault();
    });
});
