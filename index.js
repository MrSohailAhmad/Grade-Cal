const calcy = () => {
  let OOP = document.getElementById("oop").value;
  let dataStr = document.getElementById("data_str").value;
  let algoo = document.getElementById("algo").value;
  let oprSys = document.getElementById("os").value;
  let fPro = document.getElementById("final_pro").value;
  let grades = "";
  //   //////////////////////////
  let totalGrade =
    parseFloat(OOP) +
    parseFloat(dataStr) +
    parseFloat(algoo) +
    parseFloat(oprSys) +
    parseFloat(fPro);
  // ///////////////
  var perc = (totalGrade * 100) / 500;
  alert(totalGrade);
  alert(perc);
  //   ///////////////////////////////////
  debugger;
  if (perc <= 100 && perc >= 80) {
    grades = "A";
  } else if (perc <= 79 && perc >= 70) {
    grades = "B";
  } else if (perc <= 69 && perc >= 60) {
    grades = "C";
  } else if (perc <= 59 && perc >= 50) {
    grades = "D";
  } else if (perc < 50) {
    grades = "FAIL";
  }
  //   //////////////////////

  document.getElementById(
    "result"
  ).innerHTML = `Your Total marks is : ${totalGrade} out of 500 and Percentage is ${perc}% and Your grade is ${grades}`;
};
