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

function onFormSubmit(e) {
  e.preventDefault();
  const email = $("#inp_email");
  const Subject = $("#inp_Subject");
  const Massage = $("#inp_Massage");

  if (!$(email).val()) {
    alert("Email is required");
  } else if (!$(Subject).val()) {
    alert("Subject is required");
  } else if (!$(Massage).val()) {
    alert("Massage is required");
  } else {
    alert("Form Sumbitted");
    !$(email).val("");
    !$(Subject).val("");
    !$(Massage).val("");
  }
}
