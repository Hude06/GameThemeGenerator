let Genre = ["Shooter", "Real-time 3D adventures","Stealth","Metroidvania","Sports","Real-time tactics","JRPG","Sports-based fighting","Graphic adventures"]
let Theme = ["Cuberpunk", "Romance", "Prehistoric", "Nature", "Islands","Ancient Civilization","Underground","Medical","Space Travel"]
let Mechanic = ["Dodging", "Spelling", "Fighting", "Puzzle", "Voting","Fighting","Dancing","Logic","Resources"]


const GenreElement = document.getElementById("Genre");
const ThemeElement = document.getElementById("Theme");
const MechanicElement = document.getElementById("Mechanic");


function Run() {
    GenreElement.innerHTML = random_item(Genre);
    ThemeElement.innerHTML = random_item(Theme);
    MechanicElement.innerHTML = random_item(Mechanic);
}
function random_item(items){
    return items[Math.floor(Math.random()*items.length)];    
}
GenreElement.innerHTML = random_item(Genre);
ThemeElement.innerHTML = random_item(Theme);
MechanicElement.innerHTML = random_item(Mechanic);


