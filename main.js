function toggleDetail(e) {
  const target = $(e.target);
  const item = $(target).parents(".about-exp-item");
  const detail = $(item).children(".about-exp-item-detail");
  if ($(target).hasClass("active")) {
    $(target).html("More info").removeClass("active");
  } else {
    $(target).html("Less Info").addClass("active");
  }

  $(detail).slideToggle();
  console.log($(target).parents(".about-exp-item"));
}
