fetch("http://localhost:5500/index.json")
start();
 
// FONCTION PRINCIPALE DE L'APPLICATION
// Il faut la définir en “async” (asynchrone)
// car elle utilise fetch() (et “await” pour attendre une réponse)
async function start()
{
   const data = await getJson(); // Récupère le tableau json
   
   // Mélange le tableau json
   shuffleArray(data);
   
   // Affiche pour tester la première question dans la console
   console.log(data[0].question);
}
 
 
 
// Fonction de RÉCUPÉRATION DU FICHIER JSON contenant le quiz
// également en “async” car elle utilise fetch() et “await”
async function getJson()
{
   // Récupère les données avec la fonction fetch()
   // Ici le fichier s'appelle quiz.json et il est situé à la racine "/" du dossier projet
   const data = await fetch("http://localhost:5500/index.json");
 
   return data.json(); // Retourne les données au format Json
}
 
 
 
// Fonction de MÉLANGE ALÉATOIRE d’un tableau
function shuffleArray(array) {
   return array.sort(() => 0.5 - Math.random());
}
