function Affichage_velo(selectedValue) {
    var imageContenue = document.getElementById("velo_image");
    var imageDestination = ""; 

    if (selectedValue === 'velo_electrique') {
        imageDestination = 'elec.jpg';
	document.getElementById("description").innerHTML ="Un vélo électrique est un cycle doté de pédales et d'un moteur électrique auxiliaire et embarquant une source d'énergie, généralement une batterie rechargeable. L'essor de ce produit est récent et certains concepts peuvent varier selon les législations régionales";
    } else if (selectedValue === 'vtt') {
        imageDestination = 'vtt2.jpg';
	document.getElementById("description").innerHTML = "Le vélo tout-terrain, souvent abrégé en VTT, parfois appelé vélo de montagne par traduction de l'anglais mountain bike, est un vélo destiné à une utilisation sur terrain accidenté, hors des routes goudronnées. Il sert pour diverses activités de loisirs individuelles et collectives ainsi que pour des pratiques sportives réglementées par l'Union cycliste internationale. Les pratiquants peuvent être nommés « vététistes », « enduristes » ou « pilotes » en fonction du type de pratique";
    } else if (selectedValue === 'velo_de_ville') {
        imageDestination = 'velo_de_ville.jpg';
	document.getElementById("description").innerHTML = "Un VTC est comme son nom l'indique un vélo tout chemin. Combinant le vélo de ville et le VTT, on l’appelle également vélo hybride. En effet, il permet à la fois de rouler sur une route de ville (pavés et bétons) et prendre de temps en temps des chemins pas trop cassants (graviers et terre). Il est surtout parfait pour les balades en famille, cependant ils ne peuvent pas être utilisés pour des activités sportives (trail, cross-country, enduro) comme les VTTs";
    }

    imageContenue.src = imageDestination;
}
