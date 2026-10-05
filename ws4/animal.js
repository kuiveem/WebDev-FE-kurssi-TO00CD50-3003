const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function() {

    if (animalTable.style.display === "none") {
        animalTable.style.display = "table";
    } else {
        animalTable.style.display = "none";
    }

});


const taskOneHeading = document.querySelector("#taskOneHeading");
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");


changeHeadingButton.addEventListener("click", function() {

    taskOneHeading.textContent = "Updated heading!";

});


changeStyleButton.addEventListener("click", function() {

    taskOneHeading.classList.toggle("highlight");

});


// Change animal text
changeTextButton.addEventListener("click", function() {

    animalText.textContent =
        "Sea lions are intelligent, social and very playful marine mammals.";

});


const animalContent = document.querySelector("#animalContent");


// Create heading
const animalHeading = document.createElement("h3");

animalHeading.textContent = "Animal of the Day";

animalHeading.classList.add("animal-heading");



const animalParagraph = document.createElement("p");

animalParagraph.textContent =
    "The sea lion is today's animal. Sea lions are excellent swimmers and can move quickly both in and out of the water.";

    

const newAnimalImage = document.createElement("img");

newAnimalImage.src = "img/goober.jpg";

newAnimalImage.alt = "Sealion chilling";


animalContent.append(
    animalHeading,
    animalParagraph,
    newAnimalImage
);


const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");



hideAnimalButton.addEventListener("click", function() {

    animalContent.style.display = "none";

});



showAnimalButton.addEventListener("click", function() {

    animalContent.style.display = "block";

});




const animalSelect = document.querySelector("#animalSelect");

const animalName = document.querySelector("#animalName");

const animalImage = document.querySelector("#animalImage");

const animalDescription =
    document.querySelector("#animalDescription");


animalSelect.addEventListener("change", function() {

    const selectedAnimal = animalSelect.value;


    if (selectedAnimal === "sealion") {

        animalName.textContent = "Sealion";

        animalImage.src = "img/goober.jpg";

        animalImage.alt = "Sealion chilling";

        animalDescription.textContent =
            "Sea lions are playful marine mammals that live near coastal areas.";

    }


    // Elephant
    else if (selectedAnimal === "elephant") {

        animalName.textContent = "Elephant";

        animalImage.src = "img/elephant.jpg";

        animalImage.alt = "Elephant";

        animalDescription.textContent =
            "Elephants are the world's largest land animals.";

    }


    // Tiger
    else if (selectedAnimal === "tiger") {

        animalName.textContent = "Tiger";

        animalImage.src = "img/tiger.jpg";

        animalImage.alt = "Tiger";

        animalDescription.textContent =
            "Tigers are large cats and skilled hunters.";

    }


    // Penguin
    else if (selectedAnimal === "penguin") {

        animalName.textContent = "Penguin";

        animalImage.src = "img/penguin.jpg";

        animalImage.alt = "Penguin";

        animalDescription.textContent =
            "Penguins are birds that are excellent swimmers.";

    }

});


animalImage.addEventListener("mouseenter", function() {

    animalImage.classList.add("image-highlight");

});


animalImage.addEventListener("mouseleave", function() {

    animalImage.classList.remove("image-highlight");

});



const animalForm = document.querySelector("#animalForm");

const observationTableBody =
    document.querySelector("#observationTableBody");


animalForm.addEventListener("submit", function(event) {

  
    event.preventDefault();


    const observationAnimal =
        document.querySelector("#observationAnimal").value;

    const observationLocation =
        document.querySelector("#observationLocation").value;

    const observationDate =
        document.querySelector("#observationDate").value;



    if (
        observationAnimal === "" ||
        observationLocation === "" ||
        observationDate === ""
    ) {

        alert("Please fill in all fields.");

        return;
    }


    const newRow = document.createElement("tr");


    const animalCell = document.createElement("td");
    const locationCell = document.createElement("td");
    const dateCell = document.createElement("td");


    animalCell.textContent = observationAnimal;

    locationCell.textContent = observationLocation;

    dateCell.textContent = observationDate;


   
    newRow.append(
        animalCell,
        locationCell,
        dateCell
    );


    observationTableBody.append(newRow);


    animalForm.reset();

});