document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    container.classList.add("visible");
  });
  
  function fadeOut(event) {
    event.preventDefault();
    const container = document.querySelector(".container");
    container.classList.remove("visible");
    setTimeout(() => {
      window.location.href = event.target.href;
    }, 500);
  }