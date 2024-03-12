class PetDemon
{
    posX; posY;
    state; state_time_out;
    last_state;
    div;
}

function initializeOnePet(parent)
{
    addStylesheetToHeader("Effects/Pets/pet_stylesheet.css");

    // Create new link specific theme
    let div = document.createElement('div');
    div.classList.add("Pet");
    parent.appendChild(div);
}

//window.addEventListener("load", function(event) {
//    initializeOnePet(document.body);
//},false);