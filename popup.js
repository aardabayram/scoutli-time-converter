// Three Fields = Hours + Minutes + Seconds
// Takes those inputs to convert to seconds
// Returns the seconds to the user

// popup.js
document.addEventListener('DOMContentLoaded', function () {
    const convertBtn = document.getElementById('convertBtn');
  
    convertBtn.addEventListener('click', function () {
      // Retrieve input values
      const hours = parseInt(document.getElementById('hours').value) || 0;
      const minutes = parseInt(document.getElementById('minutes').value) || 0;
      const seconds = parseInt(document.getElementById('seconds').value) || 0;
  
      // Convert to seconds
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  
      // Display result
      const resultElement = document.getElementById('result');
      resultElement.textContent = `Total seconds: ${totalSeconds}`;
    });
  });
  