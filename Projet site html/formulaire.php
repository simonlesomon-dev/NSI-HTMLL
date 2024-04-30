<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>

    <body>
        <h1> Validation de votre formulaire.</h1>
        <p>Les données suivantes seront envoyées au serveur : <p></br>
            
            <?php
            if (!empty($_GET["reserver"])){
                // Si la date n'est pas une chaine vide alors on l'affiche.
                echo "<p>Vous avez réserver votre velo le : ".$_GET["reserver"]."</p>";
            }
            else{
                echo "<p> Vous n'avez pas saisi votre date de reservation.</p>";
            }

            if (isset($_GET["heures"])){
                echo "<p>votre réservation est a l'heure : ".$_GET["heures"]."</p>";
            }


            if (isset($_GET["velo_type"])){
                echo "<p>Votre vélo est : ".$_GET["velo_type"]."</p>";
            }
        ?>
    </body>
</html>
