document.addEventListener("DOMContentLoaded", () => {
    // Search Functionality
    const searchBtn = document.querySelector(".search-btn");
    searchBtn.addEventListener("click", () => {
      const item = document.querySelector(".search-bar input:nth-child(1)").value.trim();
      const location = document.querySelector(".search-bar input:nth-child(2)").value.trim();
  
      if (item && location) {
        alert(`Searching for "${item}" in "${location}"...`);
      } else {
        alert("Please enter both item and location.");
      }
    });
  
    // Newsletter Subscription
    const subscribeBtn = document.querySelector(".subscribe-btn");
    subscribeBtn.addEventListener("click", () => {
      const emailInput = document.querySelector(".newsletter-form input").value.trim();
  
      if (validateEmail(emailInput)) {
        alert("Thank you for subscribing!");
      } else {
        alert("Please enter a valid email address.");
      }
    });
  
    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    // Smooth Scrolling for Nav Links
    document.querySelectorAll("nav ul li a").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        if (targetId) {
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  