template_pjd47ds;
service_mbpx5ao;
kT_Ps3pkv36G7JdY2;

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector("modal__overlay--loading");
  const success = document.querySelector("modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_mbpx5ao",
      "template_pjd47ds",
      event.target,
      "kT_Ps3pkv36G7JdY2"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at James@TeamStein.com"
      );
    });
}
