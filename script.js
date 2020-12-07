let rng = null;
let value = document.getElementById("numberGiven");
let i = 1;

function miniJeu(e){
    if (e.key === "Enter") {
        if (i < 10) {
            document.getElementById("nbr" + i).innerText += " "+value.value;
            i++;
            if (value.value === rng.toString()){
                image.src = "gagne.png"
                image.style.opacity = "1";
                let y = 1;
                i = 1;
                while (y<=10){
                    document.getElementById("nbr" + y).innerText = "nbr"+y+":";
                    y++;
                }
                button.innerHTML = "Re-commencer";
                value.removeEventListener("click", miniJeu);
            }
            else if (value.value < rng){
                image.src = "grand.png"
                image.style.opacity = "1";
            }
            else if (value.value > rng){
                image.src = "petit.png"
                image.style.opacity = "1";
            }
            value.value = "";
        }
        else {
            image.src = "perdu.png"
            image.style.opacity = "1";
            let y = 1;
            i = 1;
            while (y<=10){
                document.getElementById("nbr" + y).innerText = "nbr"+y+":";
                y++;
            }
            value.value = "";
            button.innerHTML = "Re-commencer";
            value.removeEventListener("click", miniJeu);
        }
    }
}

let image = document.getElementById("image");
image.style.opacity = "0";

let button = document.getElementById("start");
button.addEventListener("click", () => {
    image.style.opacity = "0";
    rng = Math.trunc(Math.random() * 100);
    i = 1
    value.addEventListener("keypress", miniJeu);
});