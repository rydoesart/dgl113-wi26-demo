'use strict';

<<<<<<< Updated upstream
const form = document.getElementById("ticketform")
=======
<<<<<<< HEAD
const form = document.getElementById("ticketForm")
=======
const form = document.getElementById("ticketform")
>>>>>>> 20fa1cde8e15ae773409fa03020b90e7e5f1130a
>>>>>>> Stashed changes
const table = document.getElementById("ticketTable")
const totalCost =  document.getElementById("totalCost")

// Step-by-Step Solution — PART I

class TicketItem {
    constructor( quantity, ticketType, movieTitle) {
        this.quantity = quantity;
        this.ticketType = ticketType;
        this.movieTitle = movieTitle;
    }

    cost() { 
        let price = 0;

        switch(this.ticketType){
            case "Regular":
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
                price = 10.00;
                break;
            case "Student":
                price = 8.00;
                break;
            case "VIP":
                price = 15.00;
=======
>>>>>>> Stashed changes
                price = 10.00
                break;
            case "Student":
                price = 8.00
                break;
            case "VIP":
                price = 15.00
<<<<<<< Updated upstream
=======
>>>>>>> 20fa1cde8e15ae773409fa03020b90e7e5f1130a
>>>>>>> Stashed changes
                break;
        }

        return this.quantity * price;
    }

    tr( doc, index, orderInstance) {

        const tr = doc.createElement("tr");

        const tdQty = doc.createElement('td');
        tdQty.textContent = this.quantity;
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
        tr.appendChild(tdQty);

        const tdType = doc.createElement('td');
        tdType.textContent = this.ticketType;
        tr.appendChild(tdType);
=======
>>>>>>> Stashed changes
        tr.appendchild(tdQty);

        const tdType = doc.createElement('td');
        tdType.textContent = this.ticketType;
        tr.appendchild(tdType);
<<<<<<< Updated upstream
=======
>>>>>>> 20fa1cde8e15ae773409fa03020b90e7e5f1130a
>>>>>>> Stashed changes

        
        const tdMovie = doc.createElement('td');
        tdMovie.textContent = this.movieTitle;
<<<<<<< Updated upstream
        tr.appendchild(tdMovie);
=======
<<<<<<< HEAD
        tr.appendChild(tdMovie);
=======
        tr.appendchild(tdMovie);
>>>>>>> 20fa1cde8e15ae773409fa03020b90e7e5f1130a
>>>>>>> Stashed changes

        const tdDelete = doc.createElement('td');
        const btn = doc.createElement('button');
       btn.textContent = "Delete"

       btn.addEventListener("click", function() {
        orderInstance.delete(index);
        render();
       });

       tdDelete.appendChild(btn);
       tr.appendChild(tdDelete);

       return tr;

    }

}



// Step-by-Step Solution — PART II

class Booking {
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
    constructor() {
        
    }
    
}
<<<<<<< Updated upstream
=======
>>>>>>> 20fa1cde8e15ae773409fa03020b90e7e5f1130a
>>>>>>> Stashed changes

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


// PART III — Connect to DOM

const booking = new Booking();

// Render Function

function render() {

    const oldTbody = table.querySelector("tbody");

    if (oldTbody) {
        oldTbody.remove();
    }

    table.appendChild(booking.tbody(document));

    totalCost.textContent = "$" + booking.cost().toFixed(2);
}

form.addEventListener("submit", function(e){

    e.preventDefault();

    const quantity = parseInt(form.quantity.value);
    const ticketType = form.ticketType.value;
    const movieTitle = form.movieTitle.value;

    const item = new TicketItem(quantity, ticketType, movieTitle);

    booking.add(item);

    render();

    form.reset();

});