/*global Vue*/
/*global fetch*/
/*global swal*/

var app = new Vue({
   el: '#app',
    data: {
        attendee: {
            firstName: '',
            lastName: '',
            sizeParty: ''
        },
        guestList: '',
        numberOfGuests: 0,
        peopleString: '',
    },
    methods: {
        fetchREST() {
            var url = '/get-guest-list';
            fetch(url)
              .then(data => {
                  return data.json();
              })
              .then(json => {
                  console.log('json: ', json);
                  this.displayGuestList(json);
              });
        },
        displayGuestList(guestList) {
            var tableString = 
            "<table class='table'>" +
                "<thead>" +
                "<tr>" +
                    "<th scope='col'>Party #</th>" +
                    "<th scope='col'>First Name</th>" +
                    "<th scope='col'>Last Name</th>" +
                    "<th scope='col'>Size of Party</th>" +
                "</tr>"+
                "</thead>" +
                "<tbody>";
            let counter = 1;
                guestList.forEach(guest => {
                   tableString = tableString +
                        "<tr>" +
                            "<th scope='row'>" + counter + "</th>" +
                            "<td>" + guest.firstName + "</td>" + 
                            "<td>" + guest.lastName + "</td>" +
                            "<td>" + guest.sizeParty + "</td>" +
                        "</tr>";
                    counter++;
                    this.numberOfGuests += parseInt(guest.sizeParty);
                });
            if(this.numberOfGuests > 1 || this.numberOfGuests == 0) {
                this.peopleString = " people are ";
            } else {
                this.peopleString = " person is ";
            }
                
            tableString += "</tbody> </table>";
            document.getElementById("guestListTable").innerHTML = tableString;
        }
    }
});