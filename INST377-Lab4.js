// Alert Me Function
function alertMe() {
    var name = document.getElementById("nameInput").value;  // Make sure 'value' is used
    if (name) {
        alert("Hi " + name + "!");
    } else {
        alert("Please enter your name.");
    }
}

// Change Color Function
function changeColor() {
    if (document.getElementById('body').style.backgroundColor == 'powderblue') {
        document.getElementById('body').style.backgroundColor = 'darkseagreen';
    } else {
        document.getElementById('body').style.backgroundColor = 'powderblue';
    }
}

// Validate Text Function
function validateText() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (!validation.test(text)) {
        textInput.value = '';
    } else {
        alert("How about ... nah");
    }
}

// Add Text
function addText() {
    var heading = document.getElementById("mainHeading");
    heading.innerHTML +=" - Add Text"
}