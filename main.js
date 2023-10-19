document.getElementById("btn").addEventListener("click", btnClicked);
let num = 0;
function btnClicked() {
  let input1 = document.getElementById("input-1").value;
  let input2 = document.getElementById("input-2").value.toLowerCase();
  let input3 = document.getElementById("input-3").value;
  let input4 = document.getElementById("input-4").value;
  let output1 = document.getElementById("output-1");
  let output2 = document.getElementById("output-2");
  let output3 = document.getElementById("output-3");
  let output4 = document.getElementById("output-4");
  if (input1 === "plant cell") {
    output1.style.color = "green";
    output1.innerHTML = "Correct";
    num += 25;
  } else {
    output1.style.color = "red";
    output1.innerHTML = "Incorrect";
  }
  if (input2 === "mitochondria") {
    output2.style.color = "green";
    output2.innerHTML = "Correct";
    num += 25;
  } else {
    output2.style.color = "red";
    output2.innerHTML = "Incorrect";
  }
  if (input3 === "1") {
    output3.style.color = "green";
    output3.innerHTML = "Correct";
    num += 25;
  } else {
    output3.style.color = "red";
    output3.innerHTML = "Incorrect";
  }
  if (input4 === "Mr.Hogan" || input4 === "Mr.H") {
    output4.style.color = "green";
    output4.innerHTML = "Correct";
    num += 25;
  } else {
    output4.style.color = "red";
    output4.innerHTML = "Incorrect";
  }
  document.getElementById("msg").innerHTML = num;
  if (num > 50) {
    document.getElementById("comment").innerHTML = "Great job! ";
  } else {
    document.getElementById("comment").innerHTML = "Keep working!";
  }
}
