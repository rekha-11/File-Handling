const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
// const UploadRouter = require('./controller/upload')

const app = express();

app.use(cors())

app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/upload', upload.single('uploadItem'), function (req, res) {
    res.status(200).json({
        message: 'File Uploaded'
    })
  })

// app.use("/api", UploadRouter);
console.log('Hellow World')
module.exports = app;