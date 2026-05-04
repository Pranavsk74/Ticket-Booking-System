// Initialize icons on page load
lucide.createIcons();

// State Variables
let activeMode = 'bus';
let selectedTicket = null;
let selectedSeat = null;

// DOM Elements
const tabBus = document.getElementById('tab-bus');
const tabTrain = document.getElementById('tab-train');
const searchText = document.getElementById('search-text');
const searchBtn = document.getElementById('search-btn');

const featuresSec = document.getElementById('features-section');
const resultsSec = document.getElementById('results-section');
const seatSec = document.getElementById('seat-section');
const successSec = document.getElementById('success-section');

// Tab Switching Utility
function switchTab(mode) {
  activeMode = mode;
  searchText.textContent = mode === 'bus' ? 'Search Buses' : 'Search Trains';
  
  if (mode === 'bus') {
    tabBus.className = "flex-1 flex items-center justify-center gap-2 py-4 font-medium text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/30";
    tabTrain.className = "flex-1 flex items-center justify-center gap-2 py-4 font-medium text-slate-500 hover:bg-slate-50";
  } else {
    tabTrain.className = "flex-1 flex items-center justify-center gap-2 py-4 font-medium text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/30";
    tabBus.className = "flex-1 flex items-center justify-center gap-2 py-4 font-medium text-slate-500 hover:bg-slate-50";
  }
}

// Attach Tab Listeners
tabBus.addEventListener('click', () => switchTab('bus'));
tabTrain.addEventListener('click', () => switchTab('train'));

// Search Button Logic
searchBtn.addEventListener('click', () => {
  const from = document.getElementById('input-from').value;
  const to = document.getElementById('input-to').value;

  if (!from || !to) {
    alert("Please enter 'From' and 'To' cities!");
    return;
  }

  // Hide features, show results
  featuresSec.classList.add('hidden');
  seatSec.classList.add('hidden');
  resultsSec.classList.remove('hidden');

  // Hardcoded Mock Data
  const mockResults = [
    { id: 1, operator: activeMode === 'bus' ? "Express Lines Bus Service" : "Intercity Fast Train", time: "08:00 AM", duration: "6h 30m", price: activeMode === 'bus' ? 850 : 1200 },
    { id: 2, operator: activeMode === 'bus' ? "Night Owl Sleepers" : "Midnight Express", time: "11:00 PM", duration: "7h 00m", price: activeMode === 'bus' ? 1200 : 1800 }
  ];

  const listDiv = document.getElementById('results-list');
  listDiv.innerHTML = '';

  mockResults.forEach(ticket => {
    const d = document.createElement('div');
    d.className = "bg-white rounded-xl shadow-md border border-slate-100 p-6 flex justify-between items-center";
    d.innerHTML = `
      <div>
        <h4 class="font-bold text-lg text-slate-800">${ticket.operator}</h4>
        <div class="text-sm text-slate-500 mt-1">${ticket.time} • ${ticket.duration}</div>
      </div>
      <div class="text-right">
        <div class="text-2xl font-black text-slate-900 mb-2">₹${ticket.price}</div>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium select-ticket-btn">Select Seats</button>
      </div>
    `;
    // Attach click listener completely bound correctly to the individual ticket
    d.querySelector('.select-ticket-btn').onclick = () => openSeatPicker(ticket, from, to);
    listDiv.appendChild(d);
  });
});

// Interactive Seat Generation & Layout
function openSeatPicker(ticket, from, to) {
  selectedTicket = ticket;
  selectedSeat = null;

  resultsSec.classList.add('hidden');
  seatSec.classList.remove('hidden');

  document.getElementById('seat-route').textContent = `${from} to ${to}`;
  document.getElementById('seat-meta').textContent = `${ticket.operator} • ${ticket.time}`;
  document.getElementById('summary-seat').textContent = '-';
  document.getElementById('summary-price').textContent = '₹0';
  document.getElementById('book-btn').disabled = true;

  const grid = document.getElementById('seat-grid');
  grid.innerHTML = '';
  
  // Render total of 30 mock seats
  for(let i=1; i<=30; i++) {
    const btn = document.createElement('button');
    const isBooked = i % 4 === 0; // Simple logic to randomly mark every 4th seat as booked
    
    btn.textContent = i;
    btn.className = `seat-btn h-10 w-10 md:h-12 md:w-12 rounded-t-lg border-2 flex items-center justify-center font-medium ${isBooked ? 'seat-booked' : 'seat-available'}`;
    
    // Only attach click function if the seat is open
    if(!isBooked) {
      btn.onclick = () => selectSeat(btn, i, ticket.price);
    }
    grid.appendChild(btn);
  }
}

// Interacting with a single seat
function selectSeat(clickedBtn, seatNo, price) {
  // Clear any previously clicked seat styles
  document.querySelectorAll('#seat-grid .seat-selected').forEach(btn => {
    btn.classList.remove('seat-selected');
    btn.classList.add('seat-available');
  });

  // Assign "selected" state to clicked seat
  clickedBtn.classList.remove('seat-available');
  clickedBtn.classList.add('seat-selected');
  
  // Save selections and update UI Summary
  selectedSeat = seatNo;
  document.getElementById('summary-seat').textContent = `Seat ${seatNo}`;
  document.getElementById('summary-price').textContent = `₹${price}`;
  document.getElementById('book-btn').disabled = false;
}

// User hits Cancel/Back returning to the search list
document.getElementById('back-to-results').onclick = () => {
  seatSec.classList.add('hidden');
  resultsSec.classList.remove('hidden');
};

// User concludes booking process
document.getElementById('book-btn').onclick = () => {
  seatSec.classList.add('hidden');
  document.getElementById('search-section').classList.add('hidden');
  successSec.classList.remove('hidden');
  
  const from = document.getElementById('input-from').value;
  const to = document.getElementById('input-to').value;
  
  document.getElementById('success-desc').innerHTML = `Your trip from <strong>${from}</strong> to <strong>${to}</strong> is confirmed. You booked <strong>Seat ${selectedSeat}</strong>.`;
};
