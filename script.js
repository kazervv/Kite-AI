const checkbox = document.getElementById('holo-check');
const statusText = document.querySelector('.status-text');
const idEl = document.getElementById('id');
const quantumEl = document.getElementById('quantum');
const synchEl = document.getElementById('synch');
const kiteEl = document.getElementById('kite');

let isProcessing = false;

checkbox.addEventListener('change', function() {
  if (this.checked) {
    activateSystem();
  } else {
    deactivateSystem();
  }
});

function activateSystem() {
  if (isProcessing) return;
  isProcessing = true;

  // Step 1: Summon ID
  setTimeout(() => {
    animateText(idEl);
  }, 100);

  // Step 2: Quantum verify from 0% to 100%
  let quantumPercent = 0;
  const interval = setInterval(() => {
    quantumPercent += 2;
    quantumEl.textContent = `Verifying: ${quantumPercent.toFixed(1)}%`;
    animateText(quantumEl);
    if (quantumPercent >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        // Step 3: Change SYNCH to SUCCESSFUL
        synchEl.textContent = "Completed";
        animateText(synchEl);
      }, 50);
    }
  }, 50);

  // Step 4: Show KITE AI
  setTimeout(() => {
    animateText(kiteEl);
  }, 3000);

  // Step 5: Update main status
  setTimeout(() => {
    statusText.textContent = "SYSTEM ACTIVATED";
    statusText.style.color = "#8a7469";
    statusText.style.textShadow = "0 0 5px #8a7469";
  }, 3500);

  // Step 6: Activate frequency bars
  setTimeout(() => {
    const bars = document.querySelectorAll('.frequency-bar');
    bars.forEach(bar => {
      bar.style.height = "35px";
    });
  }, 2500);
    // Step 7: show button
  setTimeout(() => {
  document.querySelector('.button').style.display = 'block';
}, 3500);
}

function deactivateSystem() {
  // Reset everything
  idEl.textContent = "KITE AI";
  quantumEl.textContent = "QUANTUM VERIFY: 0%";
  synchEl.textContent = "SYNCH: PENDING";
  kiteEl.textContent = "FLY HIGH!";

  // Hide all texts
  document.querySelectorAll('.data-text').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";
  });

  // Reset status
  statusText.textContent = "SYSTEM DEACTIVATED";
  statusText.style.color = "#f4efe7";
  statusText.style.textShadow = "0 0 5px #8a7469";

  // Reset bars
  const bars = document.querySelectorAll('.frequency-bar');
  bars.forEach(bar => {
    bar.style.height = "5px";
  });
  // hide button
  document.querySelector('.button').style.display = 'none';

  isProcessing = false;
}

function animateText(el) {
  el.style.opacity = "1";
  el.style.transform = "translateY(0)";
}

// take elemen "Click Here"
const clickHere = document.querySelector('.click-here');

if (clickHere) {
  clickHere.addEventListener('click', function() {
    this.style.opacity = '0';
    this.style.pointerEvents = 'none'; // f cant click again
    setTimeout(() => {
      this.style.display = 'none'; // GONE FROM DOM
    }, 300); // delay 
  });
}

// GET Continue
const continueButton = document.querySelector('.button');

if (continueButton) {
  continueButton.addEventListener('click', function() {
    // MOVE PAGE
    window.location.href = 'another/fix.html'; 
  });
}

if (continueButton) {
  continueButton.addEventListener('click', function() {
    
    setTimeout(function() {
      window.location.href = 'another/fix.html';
    }, 2000); // delay (500ms = 0.5 seconds)
  });
}