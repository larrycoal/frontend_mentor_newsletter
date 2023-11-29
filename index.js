const $ = (selector) => document.querySelector(selector);
let email = "";
window.addEventListener("load", () => {
  $("#email").classList.remove("input_error");

  $("#subscribe_btn").addEventListener("click", () => {
    email = $("#email").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      $(".signup_page").style.display = "none";
      $(".success_page").style.display = "flex";
      $("#email_id").textContent = email;
    } else {
      $("#error").textContent = "Valid email required";
      $("#email").classList.add("input_error");
    }
  });

  $("#dismiss_btn").addEventListener("click", () => {
    $(".signup_page").style.display = "flex";
    $(".success_page").style.display = "none";
  });
});
