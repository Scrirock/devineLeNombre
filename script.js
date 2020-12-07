let rng = null;
let value = document.getElementById("numberGiven");
let i = 1;

let p = document.createElement("p");
p.innerHTML = "Nombre déja donné";
document.getElementById("showAllNumber").append(p);


let image = document.getElementById("image");
image.style.opacity = "0";


function miniJeu(e) {
    if (e.key === "Enter") {
        if (parseInt(value.value) === parseInt(value.value)) {
            if (i < 10) {
                let p = document.createElement("p");
                p.innerHTML = value.value;
                document.getElementById("showAllNumber").append(p);
                i++;
                if (value.value === rng.toString()) {
                    image.src = "gagne.png"
                    image.style.opacity = "1";
                    i = 1;
                    button.innerHTML = "Re-commencer";
                    value.removeEventListener("click", miniJeu);
                } else if (value.value < rng) {
                    image.src = "grand.png"
                    image.style.opacity = "1";
                } else if (value.value > rng) {
                    image.src = "petit.png"
                    image.style.opacity = "1";
                }
                value.value = "";
            }
            else {
                image.src = "perdu.png"
                image.style.opacity = "1";
                value.value = "";
                button.innerHTML = "Re-commencer";
                value.removeEventListener("click", miniJeu);
            }
        }
        else {
            alert("entrez un nombre!")
            value.value = "";
        }
    }
}

let button = document.getElementById("start");
button.addEventListener("click", () => {
    image.style.opacity = "0";
    rng = Math.trunc(Math.random() * 100);
    i = 1;
    value.addEventListener("keypress", miniJeu);
    document.getElementById("showAllNumber").innerHTML = ""
    let p = document.createElement("p");
    p.innerHTML = "Nombre déja donné";
    document.getElementById("showAllNumber").append(p);
});