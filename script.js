function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// @media (max-width: 768px) {
//   .section-container {
//     flex-direction: column;
//     align-items: center; /* Center align items */
//     text-align: center;  /* Center text */
//   }

//   .about__pic-container {
//     display: center;
//     justify-content: center;
//     margin-bottom: 2rem; /* Add spacing below image */
//   }

//   .about-pic {
//     width: 80%;  /* Make image responsive */
//     max-width: 300px;  /* Ensure it doesn't get too large */
//     border-radius: 50%; /* Make the image circular if needed */
//   }
// }