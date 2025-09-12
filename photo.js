// Mobile nav toggle
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-nav-toggle]");
  if (t) {
    document.querySelector(".nav-links")?.classList.toggle("open");
  }
});

// Tableau d'images à afficher (les images sont dans le dossier "assets")
const imageNames = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg", // Remplace avec les noms des images de ton dossier
  "image5.jpg",
  "image6.jpg",
];

// Récupérer l'élément où afficher les images
const galleryContainer = document.getElementById("photoGallery");

// Fonction pour ajouter les images à la galerie
function loadGalleryImages() {
  imageNames.forEach((imageName) => {
    // Créer un élément div pour chaque image
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    // Créer une balise img et définir son attribut src
    const imageElement = document.createElement("img");
    imageElement.src = `assets/${imageName}`;
    imageElement.alt = `Image ${imageName}`;

    // Ajouter l'image à l'élément div
    galleryItem.appendChild(imageElement);

    // Ajouter le div à la galerie
    galleryContainer.appendChild(galleryItem);
  });
}

// Charger les images lors du chargement de la page
window.onload = loadGalleryImages;
