function get() {
  let dat = document.getElementById("dates").value;

  if (!dat) {
    alert("Please select a valid date.");
    return;
  }

  let birthDate = new Date(dat);
  let today = new Date();

  let curYear = today.getFullYear();
  let curMonth = today.getMonth() + 1;
  let curDate = today.getDate();

  let year = birthDate.getFullYear();
  let month = birthDate.getMonth() + 1;
  let date = birthDate.getDate();

  // Calculate year difference
  let ageYear = curYear - year;
  let ageMonth = curMonth - month;
  let ageDay = curDate - date;

  if (ageDay < 0) {
    ageDay += 30;
    ageMonth--;
  }

  if (ageMonth < 0) {
    ageMonth += 12;
    ageYear--;
  }

  let totalMonths = ageYear * 12 + ageMonth;
  let totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

  document.getElementById("yearResult").innerText = `Age in Years: ${ageYear}`;
  document.getElementById("monthResult").innerText = `Age in Months: ${totalMonths}`;
  document.getElementById("dayResult").innerText = `Age in Days: ${totalDays}`;
}
