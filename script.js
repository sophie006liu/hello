document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const expandedContainer = document.querySelector(".expanded-container");
  
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        // Clone the clicked card's content and append it to the expanded view container
        const expandedCard = card.cloneNode(true);
        expandedCard.classList.add("expanded-card");
        expandedCard.classList.remove("card"); // Remove the card class to avoid conflicting styles
        expandedContainer.innerHTML = ""; // Clear previous content
        expandedContainer.appendChild(expandedCard);
  
        // Show the expanded view container
        expandedContainer.style.display = "flex"; // Change to "flex" to center the expanded card
  
        // Get the hidden content element in the expanded view
        const hiddenContent = expandedCard.querySelector(".hidden-content");
  
        // Show the hidden content in the expanded view
        hiddenContent.style.display = "block";
      });
    });
  
    expandedContainer.addEventListener("click", () => {
      // Hide the expanded view container when clicking outside the expanded card
      expandedContainer.style.display = "none";
    });
  });
  