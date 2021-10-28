function showPicture1() {
    var sourceOfPicture = "../image/carte_graphique_msi.jpg";
    var img = document.getElementByClass('picture')
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";
  } 