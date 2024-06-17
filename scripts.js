// function submit(){
//     var name = document.getElementById("name").value;
//     var age = document.getElementById("age").value;
//     var height = document.getElementById("height").value;
//     var weight = document.getElementById("weight").value;
//     var glucose = document.getElementById("glucose").value;
//     var ap_hi = document.getElementById("ap_hi").value;
//     var ap_lo = document.getElementById("ap_lo").value;
//     var cholesterol = document.getElementById("cholestrol").value;
//     document.getElementById("nameOutput").innerText = name;
//     document.getElementById("ageOutput").innerText = age;
//     document.getElementById("heightOutput").innerText = height;
//     document.getElementById("weightOutput").innerText = weight;
//     document.getElementById("glucoseOutput").innerText = glucose;
//     document.getElementById("ap_hiOutput").innerText = ap_hi;
//     document.getElementById("ap_loOutput").innerText = ap_lo;
//     document.getElementById("cholestrolOutput").innerText = cholesterol;
// }
function submitForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var glucose = document.getElementById("glucose").value;
    var ap_hi = document.getElementById("ap_hi").value;
    var ap_lo = document.getElementById("ap_lo").value;
    var cholesterol = document.getElementById("cholesterol").value;

    document.getElementById("nameOutput").innerText = "Name: " + name;
    document.getElementById("ageOutput").innerText = "Age: " + age;
    document.getElementById("heightOutput").innerText = "Height: " + height;
    document.getElementById("weightOutput").innerText = "Weight: " + weight;
    document.getElementById("glucoseOutput").innerText = "Glucose: " + glucose;
    document.getElementById("bloodPressureOutput").innerText = "Blood Pressure: " + ap_hi + "/" + ap_lo;
    document.getElementById("cholesterolOutput").innerText = "Cholesterol: " + cholesterol;
}
