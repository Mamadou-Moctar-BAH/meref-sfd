// Mobile nav toggle
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-nav-toggle]");
  if (t) {
    document.querySelector(".nav-links")?.classList.toggle("open");
  }
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    sendEmail(name, email, message);
    alert("Votre message a été envoyé.");

    // Reset the form
    document.getElementById("contact-form").reset();
  });

function sendEmail(name, email, message) {
  fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: "your_service_id", // Remplacez par votre ID de service
      template_id: "your_template_id", // Remplacez par votre ID de template
      user_id: "your_user_id", // Remplacez par votre ID utilisateur EmailJS
      template_params: {
        name: name,
        email: email,
        message: message,
      },
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Erreur lors de l'envoi de l'email");
      console.log("Email envoyé avec succès");
    })
    .catch((error) => {
      console.error("Erreur d'envoi d'email: ", error);
    });
}
