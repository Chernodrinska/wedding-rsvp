const envelope = document.getElementById("envelope");
const flap = document.querySelector(".envelope-flap");
const ticket = document.getElementById("ticket");
const openRsvp = document.getElementById("openRsvp");
const form = document.getElementById("rsvpForm");
const invite = document.querySelector(".invite");

let opened = false;

envelope.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  flap.style.transform = "rotateX(180deg)";

  setTimeout(() => {
    ticket.style.bottom = "20px";
  }, 300);
});

openRsvp.addEventListener("click", (e) => {
  e.stopPropagation();
  invite.classList.add("hidden");
  form.classList.remove("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("RSVP sent! (Next step: save to Google Sheets)");
});
