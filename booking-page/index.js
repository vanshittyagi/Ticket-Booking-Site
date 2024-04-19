// DOM elements
const dates = document.querySelector(".dates");
const timings = document.querySelector(".timings");
const seatBtnSection = document.querySelector(".seat-btn-section");
const seatQuan = document.querySelector(".seat-quan");
const seatType = document.querySelector(".seat-type");

// Date variables
const currentDate = new Date();
const oneDayAhead = 24 * 60 * 60 * 1000;

const days = {
  1: "Sun",
  2: "Mon",
  3: "Tue",
  4: "Wed",
  5: "Thu",
  6: "Fri",
  7: "Sat",
};

const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

// Rendering Dates from today to next 7 days (today is highlighted by default)

dates.innerHTML = "";
for (let i = 0; i < 7; i++) {
  // ternary operator below
  const activeOrNot = i === 0 ? "active-date" : "";
  const date = new Date(Date.now() + oneDayAhead * i);

  const finalDateHtml = `<div class="date ${activeOrNot}">
            ${days[date.getDay() + 1]} <br />
            <span class="day"> ${date.getDate()} </span><br />
            ${months[date.getMonth() + 1]}
         </div>`;

  dates.insertAdjacentHTML("beforeEnd", finalDateHtml);
}

// Rendering Timings
const movieTimings = [
  "8:15 AM",
  "11:30 AM",
  "2:40 AM",
  "3:30 AM",
  "8:00 AM",
  "11:10 AM",
];

timings.innerHTML = "";

movieTimings.forEach((mt) => {
  const timingHtml = `<div class="timing">
  <p>${mt}</p>
  </div>`;
  timings.insertAdjacentHTML("beforeend", timingHtml);
});

//Rendering Seat Quantity
const seatQuantity = 10;
seatQuan.innerHTML = "";

for (let i = 1; i <= seatQuantity; i++) {
  const activeOrNot = i === 2 ? "active-seat" : "";
  const seatHtml = `<div class="seat ${activeOrNot}">${i}</div>`;
  seatQuan.insertAdjacentHTML("beforeend", seatHtml);
}

//Rendering Seat Types and prices
const seatTypes = {
  Normal: 210,
  Premium: 310,
  VIP: 450,
};

seatType.innerHTML = "";

Object.entries(seatTypes).forEach((st) => {
  const seatTypeHtml = `<div class="normal">
  <p>${st[0]}</p>
  <p>Rs. ${st[1]}</p>
</div>`;
  seatType.insertAdjacentHTML("beforeend", seatTypeHtml);
});

// Activating Dates (on click highlight)
const date = document.querySelectorAll(".date");

date.forEach((d, i) => {
  d.addEventListener("click", () => {
    const activatedDate = document.querySelector(".active-date");
    activatedDate.classList.remove("active-date");
    d.classList.add("active-date");
  });
});

// Activating Timings (on click highlight)
const timing = document.querySelectorAll(".timing");

timing.forEach((t) => {
  t.addEventListener("click", () => {
    seatBtnSection.classList.remove("hidden");
    const activatedTime = document.querySelector(".active-time");
    //short circuit operator below
    activatedTime && activatedTime.classList.remove("active-time");
    t.classList.add("active-time");
  });
});

// Activating Seats Quantity (on click highlight)
const seat = document.querySelectorAll(".seat");

seat.forEach((s) => {
  s.addEventListener("click", () => {
    const activatedSeat = document.querySelector(".active-seat");
    activatedSeat.classList.remove("active-seat");
    s.classList.add("active-seat");
  });
});

// MODEL POPUP FOR SEAT QUANTITY
const seatBtn = document.querySelector(".seat-btn");
const model = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

seatBtn.addEventListener("click", (e) => {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener('DOMContentLoaded',function(){
  const urlParms = new URLSearchParams(window.location.search);
  const movieName = urlParms.get('movieName');
  const movieId = urlParms.get('movieId');

  // if(moviename){
  //   document.querySelector('.thank you p').textContent = moviename
  // }

  if(movieName && movieId){
  document.getElementById('first-movie').textContent = ` ${decodeURIComponent(movieName)}`
  }
})


// document.getElementById('first-movie').text