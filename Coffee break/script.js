// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!name || !email || !phone || !message) {
    alert("Por favor, rellena todos los campos.");
    return;
  }
  if(!emailRegex.test(email)){
    alert("Introduce un email válido.");
    return;
  }
  alert("Formulario enviado correctamente!");
  this.reset();
});

// Galería modal
const modal = document.getElementById("modal");
const imgModal = document.getElementById("imgModal");
const caption = document.getElementById("caption");
const cerrar = document.getElementById("cerrar");

document.querySelectorAll(".imagenes img").forEach(img => {
  img.addEventListener("click", function(){
    modal.style.display = "flex";
    imgModal.src = this.src;
    caption.textContent = this.alt;
  });
});

cerrar.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if(e.target === modal) modal.style.display = "none";
});

// Google Maps
function initMap() {
  const ubicacion = { lat: 40.4168, lng: -3.7038 }; // Cambiar a ubicación real
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ubicacion
  });
  new google.maps.Marker({
    position: ubicacion,
    map: map
  });
}
