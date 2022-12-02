POUR FAIRE VOS PUSH SUR GIT

-Votre répertoire "mon_projet" existe donc déjà, et il contient déjà des fichiers.
 Placez vous dans votre répertoire et exécutez la commande suivante:
  $ git init

-Pour ajouter tous les fichiers du répertoire:
 $ git add .

-Afficher le statut de votre git.
 $ git status

-Faire un commit.
 $ git commit my_file1 -m "ajout de la fonction md2html"

-Obtenir une liste de tous vos commit et de leurs commentaires
 $ git log

-Récupérer les modifications sur git:
 $ git pull origin "branchname"
-Pusher vos modifs sur git:
 $ git push origin "branchname"