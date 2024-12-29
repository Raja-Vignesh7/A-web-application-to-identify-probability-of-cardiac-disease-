var name;
var age;
var height;
var weight;
var glucose;
var ap_hi;
var ap_lo;
var cholesterol;

async function postInput() {
    const array = [age, height, weight, ap_hi, ap_lo, cholesterol, glucose];

    try {
        const response = await fetch('/get_probab', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ array: array }),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage || 'Something went wrong');
        }

        const data = await response.json();
        const imgSrc = `data:image/png;base64,${data.image}`;   
        document.getElementById("Output").innerText = 'Severity: ' + data.predicate;
        // document.getElementById("Image").scr = imgsrc;
        img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'ResultImage';
        img.width = 650;
        img.height = 250;
        var container = document.getElementById("Image");
        container.innerHTML = '';
        container.append(img);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("Output").innerText = 'Error: ' + error.message;
    }
}

// function submitForm() {
//     const errorMessage =  [];
//     name = document.getElementById("name").value;
//     age = parseInt(document.getElementById("age").value);
//     height = parseInt(document.getElementById("height").value);
//     weight = parseInt(document.getElementById("weight").value);
//     glucose = parseInt(document.getElementById("glucose").value);
//     ap_hi = parseInt(document.getElementById("ap_hi").value);
//     ap_lo = parseInt(document.getElementById("ap_lo").value);
//     cholesterol = parseInt(document.getElementById("cholesterol").value);
//     alert("error message");
//     if (!name) errorMessages.push("Name is required.");
//     if (isNaN(age) || age <= 0) errorMessage.push("Please enter a valid age.");
//     if (isNaN(height) || height <= 0) errorMessage.push("Please enter a valid height.");
//     if (isNaN(weight) || weight <= 0) errorMessage.push("Please enter a valid weight.");
//     if (isNaN(glucose) || glucose <= 0) errorMessage.push("Please enter a valid glucose level.");
//     if (isNaN(ap_hi) || ap_hi <= 0) errorMessage.push("Please enter a valid systolic blood pressure (ap_hi).");
//     if (isNaN(ap_lo) || ap_lo <= 0) errorMessage.push("Please enter a valid diastolic blood pressure (ap_lo).");
//     if (isNaN(cholesterol) || cholesterol <= 0) errorMessage.push("Please enter a valid cholesterol level.");

//     if(errorMessage.length>0){
//         alert(errorMessage.join("\n"));
//         return;
//     }
//     postInput();
// }
function submitForm() {
    const errorMessages = [];
    
    name = document.getElementById("name").value;
    age = parseInt(document.getElementById("age").value);
    height = parseInt(document.getElementById("height").value);
    weight = parseInt(document.getElementById("weight").value);
    glucose = parseInt(document.getElementById("glucose").value);
    ap_hi = parseInt(document.getElementById("ap_hi").value);
    ap_lo = parseInt(document.getElementById("ap_lo").value);
    cholesterol = parseInt(document.getElementById("cholesterol").value);

    // Validation
    if (!name) errorMessages.push("Name is required.");
    if (isNaN(age) || age <= 0) errorMessages.push("Please enter a valid age.");
    if (isNaN(height) || height <= 0) errorMessages.push("Please enter a valid height.");
    if (isNaN(weight) || weight <= 0) errorMessages.push("Please enter a valid weight.");
    if (isNaN(glucose) || glucose <= 0) errorMessages.push("Please enter a valid glucose level.");
    if (isNaN(ap_hi) || ap_hi <= 40 || ap_hi>=200) errorMessages.push("Please enter a valid systolic blood pressure (ap_hi).");
    if (isNaN(ap_lo) || ap_lo <= 40 || (ap_lo>=150) || ap_lo>ap_hi) errorMessages.push("Please enter a valid diastolic blood pressure (ap_lo).");
    if (isNaN(cholesterol) || cholesterol <= 50 || cholesterol>=300) errorMessages.push("Please enter a valid cholesterol level.");

    // Display errors if any
    if (errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
        return; // Stop execution if there are errors
    }

    // Proceed if all validations pass
    postInput();
}
