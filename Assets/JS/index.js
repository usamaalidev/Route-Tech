$(document).ready(function () {
  const navLinks = $(".nav-links a");
  navLinks.click((e) => {
    navLinks.removeClass("active");
    $(e.target).addClass("active");
    const href = $(e.target).attr("href");
    const offset = $(href).offset().top;
    $("html,body").animate({ scrollTop: offset }, 500);
  });

  const scrollToTop = $(".scroll");

  $(window).scroll(() => {
    const scrollWindow = $(window).scrollTop();
    const offestSection = $("#event").offset().top;
    if (scrollWindow >= offestSection) {
      scrollToTop.fadeIn(350);
    } else {
      scrollToTop.fadeOut(350);
    }
  });

  scrollToTop.click(() => {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });

  const nav = $("nav");
  const navContent = $(".nav-content");
  const showNavBtn = $(".open-nav i");

  let boxWidth = navContent.outerWidth();

  nav.css({ left: boxWidth * -1 });

  showNavBtn.click(function () {
    if (nav.css("left") === "0px") {
      nav.animate({ left: boxWidth * -1 });

      // * this will change the arrow icon
      showNavBtn.removeClass("fa-angles-left");
      showNavBtn.addClass("fa-angles-right");

      // * this will rotate the same icon
      // showNavBtn.animate({ rotate: "0deg" });
    } else {
      nav.animate({ left: "0" });
      showNavBtn.removeClass("fa-angles-right");
      showNavBtn.addClass("fa-angles-left");
      // showNavBtn.animate({ rotate: "180deg" });
    }
  });

  // Chancing Color of website

  const colors = $(".color");
  const changedElements = $(":header");

  colors.click((e) => {
    const color = $(e.target).css("backgroundColor");
    changedElements.css({ color: color });
  });

  // Implementing Counter Down

  const counterDown = setInterval(() => {
    const eventDate = new Date(2023, 0, 21);
    const StartDate = new Date(2022, 6, 28);
    const allDaysLeft = (eventDate - StartDate) / 1000 / 60 / 60 / 24;
    const now = new Date();
    const remainTime = eventDate - now;

    let days = Math.trunc(remainTime / 1000 / 60 / 60 / 24);
    let hours = Math.trunc((remainTime / 1000 / 60 / 60 / 24 - days) * 24);
    let minutes = Math.trunc(
      ((remainTime / 1000 / 60 / 60 / 24 - days) * 24 - hours) * 60
    );
    let seconds = Math.trunc(
      (((remainTime / 1000 / 60 / 60 / 24 - days) * 24 - hours) * 60 -
        minutes) *
        60
    );

    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      clearInterval(counterDown);
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    }

    $(".remain-days").text(days);
    $(".remain-hours").text(hours);
    $(".remain-minutes").text(minutes);
    $(".remain-seconds").text(seconds);

    $(".counter .days").css({
      "--percent": `${Math.trunc((days / allDaysLeft) * 100)}`,
    });
    $(".counter .hours").css({
      "--percent": `${Math.trunc((hours / 24) * 100)}`,
    });
    $(".counter .minutes").css({
      "--percent": `${Math.trunc((minutes / 60) * 100)}`,
    });
    $(".counter .seconds").css({
      "--percent": `${Math.trunc((seconds / 60) * 100)}`,
    });
  }, 1000);

  // Implementing Accordion Menu

  const question = $(".question-header");
  const answer = $(".answer");

  question.click((e) => {
    if ($(e.currentTarget).next().css("display") == "none") {
      question.next().slideUp(350);
      question.css({ backgroundColor: "var(--dark-violet)" });
      $(".icon").removeClass("fa-chevron-down").addClass("fa-chevron-right");

      $(e.currentTarget).css({ backgroundColor: "#151a34" });
      $(e.currentTarget).next().slideDown(350);
      $(e.currentTarget)
        .children()
        .eq(1)
        .removeClass("fa-chevron-right")
        .addClass("fa-chevron-down");
    } else if ($(e.currentTarget).next().css("display") == "block") {
      $(e.currentTarget).next().slideUp(350);
      $(e.currentTarget).css({ backgroundColor: "var(--dark-violet)" });
      $(".icon").removeClass("fa-chevron-down").addClass("fa-chevron-right");
    }
  });

  // Making Form Send only 100 Char

  const message = $("form textarea");
  const charNumber = $(".chars");
  let counter = 0;

  message.keyup(() => {
    console.log(`value now => ` + document.querySelector("textarea").value);
    counter = message.val().length;
    console.log(counter);

    if (counter < 100) {
      charNumber.text(100 - counter);
      counter++;
      $('button[type="submit"]').attr("disabled", false);
    } else {
      charNumber.text("your available character finished");
      $('button[type="submit"]').attr("disabled", true);
    }
  });
});
