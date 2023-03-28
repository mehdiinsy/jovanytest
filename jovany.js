
//======================================================================== partie class etapes 1 et 2

class animal {
    toiletteur = "jovany"


    constructor(type,nom,sexe,rdv) {

        this.type= type
        this.nom= nom
        this.sexe= sexe
        this.rdv= rdv


    }




}


const ratatouillette = new animal("rongeur","ratatouillette","femelle","avecrdv");
const samba = new animal("chatte","samba","femelle","sansrdv");
const gribouille = new animal("chat","gribouille","male","avecrdv");
const linux = new animal("chien","linux","male","sansrdv");
const hathena = new animal("chienne","hathena","femelle","avecrdv");
const holiwood = new animal("chien","holiwood","male","avecrdv");

//7
const hamtaro = new animal("rongeur","hamtaro","male","avecrdv");

//=============================================================================partie tableau


//3 
let patient = ["ratatouillette","samba","gribouille","linux","hathena","holiwood"];

//4
console.log(patient);

//5
console.log(holiwood);


//6
patient.pop();
console.log(patient);


//7
patient.push("hamtaro")
console.log(patient)


//8 et 9
patient.forEach(animaux=> {
    console.log(animaux)
});
// je n'ai pas trouve la solution pour la condition "avec rdv" dans la boucle forEach


























