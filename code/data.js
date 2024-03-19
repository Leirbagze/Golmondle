var nbGolmons=11;

var tableau =
[
    {
      "golnom": "Yan",
      "sexe": "masculin",
      "QI": 84,
      "racisme": 70,
      "rank_babyfoot": 5,
      "humour": "gênant",
      "DC": 72
    },
    {
      "golnom": "Sylvain",
      "sexe": "masculin",
      "QI": 85,
      "racisme": 40,
      "rank_babyfoot": 6,
      "humour": "solide",
      "DC": 40
    },
    {
      "golnom": "Gabriel",
      "sexe": "masculin",
      "QI": 150,
      "racisme": 80,
      "rank_babyfoot": 4,
      "humour": "😐",
      "DC": 8
    },
    {
      "golnom": "Paul",
      "sexe": "masculin",
      "QI": 90,
      "racisme": 76,
      "rank_babyfoot": 1,
      "humour": "suicide",
      "DC": 100
    },
    {
      "golnom": "Gabin",
      "sexe": "masculin",
      "QI": 75,
      "racisme": 94,
      "rank_babyfoot": 2,
      "humour": "masterclass",
      "DC": 80
    },
    {
      "golnom": "Clementine",
      "sexe": "masculin",
      "QI": 120,
      "racisme": 79,
      "rank_babyfoot": 7,
      "humour": "😐",
      "DC": 65
    },
    {
      "golnom": "Etienne",
      "sexe": "masculin",
      "QI": 135,
      "racisme": 15,
      "rank_babyfoot": 8,
      "humour": "solide",
      "DC": 40
    },
    {
      "golnom": "Rayan",
      "sexe": "masculin",
      "QI": 2,
      "racisme": 9,
      "rank_babyfoot": 3,
      "humour": "solide",
      "DC": 90
    },
    {
      "golnom": "Mael",
      "sexe": "masculin",
      "QI": 115,
      "racisme": 65,
      "rank_babyfoot": 11,
      "humour": "gênant",
      "DC": 30
    },
    {
      "golnom": "Quentin",
      "sexe": "masculin",
      "QI": 95,
      "racisme": 100,
      "rank_babyfoot": 10,
      "humour": "gênant",
      "DC": 70
    },
    {
      "golnom": "Nylan",
      "sexe": "masculin",
      "QI": 95,
      "racisme": 65,
      "rank_babyfoot": 9,
      "humour": "rigolo",
      "DC": 75
    }
]

var date = new Date();
console.log(date.toLocaleDateString("fr-FR"));

function nGdJ(){
  var dateJour = Math.floor(new Date().getTime()/(1000*60*60*24));
  var dateRef = dateJour % nbGolmons;
  console.log("date jours : " + dateJour);
  console.log("date ref : " + dateRef);
  Math.seedrandom(dateRef);  // On prend la date du jour modulo 11 pour avoir une date de reset
  let liste = new Array(nbGolmons);
  let randint;
  for (let i=0;i<nbGolmons;i++){
    randint = Math.floor(Math.random()*(liste.length));
    liste[i] = tableau[randint].golnom;
  }
  return liste;
}
console.log("fonction : " + nGdJ());

console.log(nGdJ());
var golmonDuJour = tableau[0];