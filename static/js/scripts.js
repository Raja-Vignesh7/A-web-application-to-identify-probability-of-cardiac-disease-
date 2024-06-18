// // function submit(){
// //     var name = document.getElementById("name").value;
// //     var age = document.getElementById("age").value;
// //     var height = document.getElementById("height").value;
// //     var weight = document.getElementById("weight").value;
// //     var glucose = document.getElementById("glucose").value;
// //     var ap_hi = document.getElementById("ap_hi").value;
// //     var ap_lo = document.getElementById("ap_lo").value;
// //     var cholesterol = document.getElementById("cholestrol").value;
// //     document.getElementById("nameOutput").innerText = name;
// //     document.getElementById("ageOutput").innerText = age;
// //     document.getElementById("heightOutput").innerText = height;
// //     document.getElementById("weightOutput").innerText = weight;
// //     document.getElementById("glucoseOutput").innerText = glucose;
// //     document.getElementById("ap_hiOutput").innerText = ap_hi;
// //     document.getElementById("ap_loOutput").innerText = ap_lo;
// //     document.getElementById("cholestrolOutput").innerText = cholesterol;
// // }
// var name;
// var age;
// var height;
// var weight;
// var glucose;
// var ap_hi;
// var ap_lo;
// var cholesterol;

// async function postInput(){
//     // document.getElementById("cholesterolOutput").innerText = "Cholesterol: " + cholesterol;
//     array = [age,height,weight,ap_hi,ap_lo,cholesterol,glucose]
//     // fetch(`/get_proba?array=${array}`)
//     // .then(response => response.json())
//     // .then(data =>{
//     //     if(data.have){
//     //         document.getElementById('Output').innerText = `Error: ${data.have}`;
//     //     }
//     //     else {
//     //         document.getElementById('outPut').textContent = 'Error data: ' + data.error;
//     //     }
//     // })
//     // .catch(error =>{
//     //     document.getElementById('outPut').innerText = 'Error: ' + error;
//     // });
//     try {
//         const response =await fetch('/get_probab', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ array: array }),
//         });
//         if (!response.ok) {
//             const errorMessage = await response.text();
//             throw new Error(errorMessage || 'Something went wrong');
//         }

//         const data =await response.json();
//         document.getElementById("Output").innerText = 'Success:', data.predicate;
//     } catch (error) {
//         document.getElementById("Output").innerText = 'Error: ' + error;
//     }
// }
// function submitForm() {
//     name = document.getElementById("name").value;
//     age = document.getElementById("age").value;
//     height = document.getElementById("height").value;
//     weight = document.getElementById("weight").value;
//     glucose = document.getElementById("glucose").value;
//     ap_hi = document.getElementById("ap_hi").value;
//     ap_lo = document.getElementById("ap_lo").value;
//     cholesterol = document.getElementById("cholesterol").value;

//     document.getElementById("nameOutput").innerText = "Name: " + name;
//     document.getElementById("ageOutput").innerText = "Age: " + age;
//     document.getElementById("heightOutput").innerText = "Height: " + height;
//     document.getElementById("weightOutput").innerText = "Weight: " + weight;
//     document.getElementById("glucoseOutput").innerText = "Glucose: " + glucose;
//     document.getElementById("bloodPressureOutput").innerText = "Blood Pressure: " + ap_hi + "/" + ap_lo;
//     document.getElementById("cholesterolOutput").innerText = "Cholesterol: " + cholesterol;
//     postInput();
// }
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
        document.getElementById("Output").innerText = 'Success: ' + data.predicate;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("Output").innerText = 'Error: ' + error.message;
    }
}

function submitForm() {
    name = document.getElementById("name").value;
    age = parseInt(document.getElementById("age").value);
    height = parseInt(document.getElementById("height").value);
    weight = parseInt(document.getElementById("weight").value);
    glucose = parseInt(document.getElementById("glucose").value);
    ap_hi = parseInt(document.getElementById("ap_hi").value);
    ap_lo = parseInt(document.getElementById("ap_lo").value);
    cholesterol = parseInt(document.getElementById("cholesterol").value);

    document.getElementById("nameOutput").innerText = "Name: " + name;
    document.getElementById("ageOutput").innerText = "Age: " + age;
    document.getElementById("heightOutput").innerText = "Height: " + height;
    document.getElementById("weightOutput").innerText = "Weight: " + weight;
    document.getElementById("glucoseOutput").innerText = "Glucose: " + glucose;
    document.getElementById("bloodPressureOutput").innerText = "Blood Pressure: " + ap_hi + "/" + ap_lo;
    document.getElementById("cholesterolOutput").innerText = "Cholesterol: " + cholesterol;

    postInput();
}
