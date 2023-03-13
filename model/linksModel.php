<?php
# Connexion à la DB
try{
    $db = mysqli_connect(DB_HOST,DB_LOGIN,DB_PWD,DB_NAME,DB_PORT);
    mysqli_set_charset($db,DB_CHARSET);
}catch(Exception $e){
    exit($e->getMessage());
}
# chargement de tous les objets

// requête en variable texte contenant du MySQL
$sqlMail = "SELECT `titre`, `description`,`image`, `url` FROM `liens` ;";

// exécution de la requête avec un try / catch
try {
    $queryLiens = mysqli_query($db, $sqlMail);
}catch(Exception $e){
    # arrêter le script et afficher l'erreur (de type SQL)
    exit(utf8_encode($e->getMessage()));
}


# on compte le nombre de mails récupérés
$nbLiens = mysqli_num_rows($queryLiens);

# on convertit les valeurs récupérés en tableaux associatifs intégrés dans un tableau indexé
$lienDB = mysqli_fetch_all($queryLiens,MYSQLI_ASSOC);



# on efface les données récupérées pas un SELECT (bonnes pratiques)
mysqli_free_result($queryLiens);
# fermeture de connexion  (bonnes pratiques)
mysqli_close($db); 