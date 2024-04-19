const seatNum = document.querySelectorAll(".seat-num:not(.sold)");

const paymentEl = document.querySelector(".pay");


const ticketsQuantity = [1, 2];
const ticketsLength = ticketsQuantity.length;

let paymentAmount = ticketsQuantity[ticketsLength - 1];

seatNum.forEach((sn, i) => {
  sn.addEventListener("click", () => {
    paymentEl.classList.remove("hidden");
    const activatedSeats = document.querySelectorAll(".active-seat");

    activatedSeats &&
      activatedSeats.forEach((as) => {
        as.classList.remove("active-seat");
      });

    ticketsQuantity.forEach((tq) => {
      seatNum[i + tq - 1].classList.add("active-seat");

      if (seatNum[i + tq - 1].closest(".vip"))
        paymentAmount = 450 * ticketsQuantity[ticketsLength - 1];
      if (seatNum[i + tq - 1].closest(".premium"))
        paymentAmount = 310 * ticketsQuantity[ticketsLength - 1];
      if (seatNum[i + tq - 1].closest(".normal"))
        paymentAmount = 210 * ticketsQuantity[ticketsLength - 1];
    });
    document.querySelector(".pay a").textContent = `Pay Rs.${paymentAmount}`;
  });
});

