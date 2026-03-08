'use strict';

const form = document.getElementById("ticketForm");
const table = document.getElementById("ticketTable");
const totalCost = document.getElementById("totalCost");

// PART I

class TicketItem {
    constructor(quantity, ticketType, movieTitle) {
        this.quantity = quantity;
        this.ticketType = ticketType;
        this.movieTitle = movieTitle;
    }

    cost() {
        let price = 0;

        switch (this.ticketType) {
            case "Regular":
                price = 10.00;
                break;
            case "Student":
                price = 8.00;
                break;
            case "VIP":
                price = 15.00;
                break;
        }

        return this.quantity * price;
    }

    tr(doc, index, orderInstance) {

        const tr = doc.createElement("tr");

        const tdQty = doc.createElement("td");
        tdQty.textContent = this.quantity;
        tr.appendChild(tdQty);

        const tdType = doc.createElement("td");
        tdType.textContent = this.ticketType;
        tr.appendChild(tdType);

        const tdMovie = doc.createElement("td");
        tdMovie.textContent = this.movieTitle;
        tr.appendChild(tdMovie);

        const tdDelete = doc.createElement("td");
        const btn = doc.createElement("button");
        btn.textContent = "Delete";

        btn.addEventListener("click", function () {
            orderInstance.delete(index);
            render();
        });

        tdDelete.appendChild(btn);
        tr.appendChild(tdDelete);

        return tr;
    }
}

// PART II

class Booking {

    constructor() {
        this.orderedItems = [];
    }

    add(item) {
        this.orderedItems.push(item);
    }

    delete(index) {
        this.orderedItems.splice(index, 1);
    }

    tbody(doc) {

        const tbody = doc.createElement("tbody");

        this.orderedItems.forEach((item, index) => {
            tbody.appendChild(item.tr(doc, index, this));
        });

        return tbody;
    }

    cost() {

        let total = 0;

        this.orderedItems.forEach(item => {
            total += item.cost();
        });

        return total;
    }
}

// PART III

const booking = new Booking();

function render() {

    const oldTbody = table.querySelector("tbody");

    if (oldTbody) {
        oldTbody.remove();
    }

    table.appendChild(booking.tbody(document));

    totalCost.textContent = "$" + booking.cost().toFixed(2);
}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const quantity = parseInt(form.quantity.value);
    const ticketType = form.ticketType.value;
    const movieTitle = form.movieTitle.value;

    const item = new TicketItem(quantity, ticketType, movieTitle);

    booking.add(item);

    render();

    form.reset();
});