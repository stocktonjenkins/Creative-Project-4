const express = require('express');
const router = express();
var fs = require('fs');
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({
    extended: false
}));



// parse application/json
router.use(bodyParser.json());

router.use(express.static('public'));

router.post('/write-new-user', (req, res) => {
    let line = req.body.firstName + " " + req.body.lastName + " " + req.body.sizeParty + "\n";

    fs.appendFile('rsvpForm.txt', line, (err) => {
        if (err) throw err;
        // console.log('saved file.');
    });
});

router.get('/get-guest-list', (req, res) => {
    let guestList = [];
    var list = fs.readFileSync('rsvpForm.txt', 'utf8');
    let lines = list.split("\n");
    console.log("lines: ", lines);

    lines.forEach(line => {
        let elements = line.split(" ");
        let guest = {
            firstName: elements[0],
            lastName: elements[1],
            sizeParty: elements[2]
        };
        guestList.push(guest);
    });
    guestList.pop();
    // console.log("guest list: ", guestList);
    res.send(guestList);
});

router.listen(3010, () => console.log('Server is listening on port 3010.'));
