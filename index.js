require('marko/node-require');

let express = require('express');
let markoExpress = require('marko/express');
const fs = require("fs");
const SimpleJsonStore = require('simple-json-store')
let app = express();
let port = 8800;
let bodyParser = require('body-parser');
let path = require('path');
let viewsDirectory = path.join(__dirname, '/server/views');
let publicDirectory = path.join(__dirname, '/public');
let numberOfComments = 0;
let comments = [];
const store = new SimpleJsonStore(path.join(publicDirectory,'data.json'), {places: []});
var multer  = require('multer');
var upload = multer({ dest: path.join(publicDirectory, 'uploads/') });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicDirectory));
app.use(markoExpress());

app.get('/', function(req, res) {
    let view = require(path.join(viewsDirectory, 'index.marko'));
    let places = store.get('places');
    let data = {
        title: "Home",
        places: places
    }
    res.marko(view, data);
});

app.get('/places/:id', function(req, res) {
    let view = require(path.join(viewsDirectory, 'place.marko'));
    let places = store.get('places');
    let place = places.find(places => parseInt(places.id) === parseInt(req.params.id));
    let data = {
        place: place,
        places: places
    }
    res.marko(view, data);
});

app.post('/places/:id', function(req, res) {
    let body = req.body;
    let places = store.get('places');
    let place = places.find(places => parseInt(places.id) === parseInt(req.params.id));
    res.redirect('/place');
});

app.get('/addplace', function(req, res) {
    let view = require(path.join(viewsDirectory, 'add.marko'));
    let data = {
        title: 'Add Place',
    };
    res.marko(view, data);
});

app.post('/addplace', upload.single('file'), function(req, res) {
    let body = req.body;
    let places = store.get('places');
    let input = {
        id: places.length+1,
        name: body.name,
        description: body.description,
        imageloc: "/images/" + req.file.originalname,
        gmaps: "",
        address: body.address,
        comments: []
    };

    places.push(input);
    const tempPath = req.file.path;
    const targetPath = path.join(publicDirectory, "/images/"+ req.file.originalname);
    console.log(targetPath);
    if (path.extname(req.file.originalname).toLowerCase() === ".jpg") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return console.log(err);
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return console.log(err);
      });
    }
    store.set({"places": places});
    res.redirect('/places/' + input.id);
});

app.listen(port, function(err) {
    if(err) {return console.error(err); }
    console.log('Listening to ' + port);
});
