function Affichage_velo(selectedValue) {
    var imageContenue = document.getElementById("velo_image");
    var imageDestination = ""; 

    if (selectedValue === 'velo_electrique') {
        imageDestination = 'elec.jpg';
    } else if (selectedValue === 'vtt') {
        imageDestination = 'vtt2.jpg';
    } else if (selectedValue === 'velo_de_ville') {
        imageDestination = 'velo_de_ville.jpg';
    }

    imageContenue.src = imageDestination;
}
