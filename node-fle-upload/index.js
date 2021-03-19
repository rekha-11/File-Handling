const http = require('http')

const PORT = process.env.PORT || 6000
http.createServer(require('./app.js')).listen(PORT, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('Server Started... PORT', PORT)
    }
})