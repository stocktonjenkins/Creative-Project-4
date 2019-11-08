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
        fetchREST() {
            console.log("Made fetch");
        }
    }
});