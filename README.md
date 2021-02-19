API NodeJs basée sur le framework Express :

Api de blakjak gardant l'historique des derniéres parties jouées et proposant le premier choix à faire avec à terme un ratio de victoire/défaite suite au choix suivi.

---------------------------------------------------------------------

Route API : http://localhost:8000/

CARDS:

GET - /cards - - - retourne toutes les cartes 

GET - /cards/:id - - - retourne la carte selectionné


GAMES:

GET - /games - - - retourne toutes les parties jouées

GET - /games/:id - - - retourne la partie jouée selectionnée

POST - /games - un Objet JSON {Games} - retourne un historique de parti et la creer

USERS:

POST - /signup - un Objet JSON {user} - creer l'utilisateur

POST - /login - un id et un mdp - se connecte


----------------------------------------------------------------------

MODEL MONGODB:

Games :         
    date : {type : Date, default: Date.now },
    result : {type : String, required: true },
    meCards : {type : Object, required: true },
    bankCards : {type : Object, required: true }

Cards : 
    name : {type : String, required: true },
    value: {type : Number, required: true },
    color: {type : String, required: true },
    sign: {type : String, required: true }

Users :
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }