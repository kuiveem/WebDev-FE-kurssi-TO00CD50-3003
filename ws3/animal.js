function showTable() {

    let animal = "Sealion";
    let habitat = "Coastal waters";
    let diet = "Fish and squid";

    let table = `
        <table class="display">
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Habitat</th>
                    <th>Diet</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
            </tbody>
        </table>
    `;

    document.querySelector("#tableContainer").innerHTML = table;
}

const exercise2 = document.querySelector("#exercise2");

exercise2.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});



const exercise1 = document.querySelector("#exercise1");

exercise1.addEventListener("click", function() {
    exercise1.innerHTML = "Bye bye mouse!";
    exercise1.style.color = "red";
});




const feedback = document.querySelector("#feedback");
const charcount = document.querySelector("#charcount");
const status = document.querySelector("#status");
const preview = document.querySelector("#preview");



feedback.addEventListener("focus", function() {

    status.textContent = "You are writing about sealions!";
    feedback.style.backgroundColor = "#e8f8f9";

});



feedback.addEventListener("blur", function() {

    status.textContent = "";
    feedback.style.backgroundColor = "";

});



feedback.addEventListener("input", function() {

    let text = feedback.value;

    
    charcount.textContent = text.length + "/200";

    // Update preview
    if (text.length > 0) {
        preview.textContent = text;
    } else {
        preview.textContent = "(Your sealion feedback will appear here)";
    }

});


const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function(event) {

    // Stop the form from refreshing the page
    event.preventDefault();

    let text = feedback.value;
    let length = text.length;

    // Check if feedback is too short
    if (length < 10) {

        status.textContent = "Your feedback must contain at least 10 characters.";
        status.style.color = "red";

        return;
    }

    // Check if feedback is too long
    if (length > 200) {

        status.textContent = "Your feedback cannot contain more than 200 characters.";
        status.style.color = "red";

        return;
    }

    // Feedback is valid
    status.textContent = "Thank you for your feedback!";
    status.style.color = "green";

    // Clear the textarea
    feedback.value = "";

    // Reset character count
    charcount.textContent = "0/200";

    // Reset preview
    preview.textContent = "(Your sealion feedback will appear here)";

});


const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

document.addEventListener("keydown", function(event) {

    console.log(event);

    keyinfo.textContent =
        "Pressed key: " + event.key +
        " | Key code: " + event.code;

    // Show the pressed key in the keybox
    keybox.textContent = event.key;

});