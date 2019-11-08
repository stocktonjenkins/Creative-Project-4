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
    },
    methods: {
        async saveUserData() {
            try {
                const response = await axios.post("/write-new-user", {
                    firstName: this.attendee.firstName,
                    lastName: this.attendee.lastName,
                    sizeParty: this.attendee.sizeParty
                });
            }
            catch (error) {
                console.log(error);
            }
            console.log(this.attendee.firstName);
            console.log(this.attendee.lastName);
            console.log(this.attendee.sizeParty);
        },
        getRSVPList() {
            var url = "/get-rsvp-list";
            fetch(url)
                .then((data) => {

                })
                .then((json) => {

                });
        },
        submitted() {
            swal("Success!", "We'll see you at Taco Tuesday! 🌮", "success");
            console.log("submitted");
            document.getElementById('tacoForm').reset();
        },
    }
});
