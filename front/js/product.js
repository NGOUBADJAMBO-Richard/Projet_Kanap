// Récupération de l'ID depuis l'URL
const params = new URLSearchParams(document.location.search);
const id = params.get("id");
// URL de votre API pour récupérer tous les produits
const apiUrl = "http://localhost:3000/api/products";

// Envoi de la requête à l'API pour récupérer tous les produits
fetch(apiUrl)
  .then((response) => {
    // Vérification de la réponse HTTP
    if (!response.ok) {
      throw new Error("La requête a échoué.");
    }
    // Concersion de la réponse en JSON
    return response.json();
  })
  .then((prducts) => {
    // Utilisation de la méthode find pour rechercher l'élément par son ID
    const product = product.find((product) => product._id === id);
    if (product) {
      console.log(product); // Affichage de l'élément trouvé

      const itemImage = document.querySelector(".itme_img");
      const ProductImage = document.createElement("img");
      ProductImage.setAttribute("alt", product.name + "" + "image");
      ProductImage.setAttribute("src", product.imageUrl);
      itemImage.appendChild(ProductImage);

      const title = document.getElementById("title");
      title.innerHTML = product.name;

      const price = document.getElementById("price");
    }
  });
