//  IPO Wage calculator

// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  console.log("hi");
  //Input
  let NumberOfRegularHours1 = document.getElementById(
    "NumberOfRegularHours1-in"
  ).value;
  let NumberOfOvertimeHours2 = document.getElementById(
    "NumberOfOvertimeHours2-in"
  ).value;
  let Enterrateofpay3 = document.getElementById("Enterrateofpay3-in").value;

  // Process
  let total =
    NumberOfRegularHours1 * Enterrateofpay3 +
    (NumberOfOvertimeHours2 * 1.5 + Enterrateofpay3);

  //Output
  document.getElementById("output").innerHTML = total;
}
