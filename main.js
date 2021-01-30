// ticket list function start
function ticketList(tickets, isIncrement) {
  const ticketInput = document.getElementById(tickets + "-count");
  const ticketCount = parseInt(ticketInput.value);
  let ticketNewCount = ticketCount;
  if (isIncrement == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (isIncrement == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }
  ticketInput.value = ticketNewCount;
  let ticketPrize = 0;
  if (tickets == "first-class-ticket") {
    ticketPrize = ticketNewCount * 150;
  }
  if (tickets == "economy-ticket") {
    ticketPrize = ticketNewCount * 100;
  }
  document.getElementById("tickets-prize").innerText = "$" + ticketPrize;
  totalTicketPrize();
}


// total ticket prize function start
function totalTicketPrize() {
  const firstClassTicketCount = getInputValue("first-class-ticket-count");
  const economyTicketCount = getInputValue("economy-ticket-count");

  const totalTicketPrize =
    firstClassTicketCount * 150 + economyTicketCount * 100;
  document.getElementById("tickets-prize").innerText = "$" + totalTicketPrize;

  const totalTicketVat = totalTicketPrize * 0.1;
  document.getElementById("tickets-vat").innerText = "$" + totalTicketVat;

  const totalTicketCost = totalTicketPrize + totalTicketVat;
  document.getElementById("total-ticket-cost").innerText =
    "$" + totalTicketCost;
}


//prize convert function start
function getInputValue(ticket) {
  const ticketInput = document.getElementById(ticket);
  const ticketCount = parseInt(ticketInput.value);
  return ticketCount;
}


//confirmation function start
document.getElementById("book-now").addEventListener("click", function () {
  const bookingTicket = document.getElementById("booking-ticket");
  bookingTicket.style.display = "none";
  const confirmationArea = document.getElementById("confirmation");
  confirmationArea.style.display = "block";
});
