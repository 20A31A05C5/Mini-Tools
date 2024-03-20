let outputScreen=document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}

function calculate() {
   try{ outputScreen.value = eval(outputScreen.value);}
   catch (err) {
       alert("Invalid equation!")
   }
}

function allClear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}


document.getElementById("btn").addEventListener("click", function() {
	var height_val = document.getElementById('height').value;
	var weight_val = document.getElementById('weight').value;
	var bmi = weight_val / (height_val / 100 * height_val / 100);
	var bmio = (bmi.toFixed(2));

	document.getElementById("result").innerHTML = "Your BMI is " + bmio;
});



