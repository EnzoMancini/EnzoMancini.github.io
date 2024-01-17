document.addEventListener("DOMContentLoaded", function() {
    var progressBar = document.getElementById("progressBar");
  
    window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;
      var documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      var scrollPercentage = (scrollPosition / documentHeight) * 100;
  
      // Limiter la valeur à 100% pour éviter des problèmes d'affichage
      scrollPercentage = Math.min(scrollPercentage, 100);
  
      // Mettez à jour la largeur de la barre de progression
      progressBar.style.width = scrollPercentage + "%";
    });
  });