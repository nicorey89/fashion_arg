const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click",  () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
  
  navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });


function abrirModal() {
  document.querySelector("#modal").style.display = 'block';
}


function cerrarModal() {
  document.querySelector("#modal").style.display = 'none';
}

document.querySelector(".boton").addEventListener("click", function() {
  window.location.href = "https://fashion-arte.vercel.app";
});

// sistema de vestidos

document.addEventListener('DOMContentLoaded', function() {
  const dressRatings = document.querySelectorAll('.dress-rating');

  dressRatings.forEach((dressRating) => {
    const dresses = dressRating.querySelectorAll('.dress');
    
    dresses.forEach((dress, index) => {
      dress.addEventListener('click', function() {
        const rating = index + 1;
        setRating(dressRating, rating);
      });
    });
  });

  function setRating(dressRating, rating) {
    const dresses = dressRating.querySelectorAll('.dress');
    dresses.forEach((dress, index) => {
      if (index < rating) {
        dress.classList.add('filled');
      } else {
        dress.classList.remove('filled');
      }
    });
    // Aquí puedes enviar el valor de rating al servidor o realizar otras acciones con él
  }
});
