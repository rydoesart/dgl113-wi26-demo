'use strict';

const form = document.getElementById("ticketform")
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
                price = 10.00
                break;
            case "Student":
                price = 8.00
                break;
            case "VIP":
                price = 15.00
                break;
        }

        return this.quantity * price;
    }

    tr( doc, index, orderInstance) {

        const tr = doc.createElement("tr");

        const tdQty = doc.createElement('td');
        tdQty.textContent = this.quantity;
        tr.appendchild(tdQty);

        const tdType = doc.createElement('td');
        tdType.textContent = this.ticketType;
        tr.appendchild(tdType);

        
        const tdMovie = doc.createElement('td');
        tdMovie.textContent = this.movieTitle;
        tr.appendchild(tdMovie);

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
    constructor() {
        
    }
    
}



// PART III — Connect to DOM



// Render Function

