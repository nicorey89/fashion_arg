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
