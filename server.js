const express = require('express')

const app = express()

//making a function to convert the uppercase to lowercase
//lowercase - uppercase
function lowerUpper(data){
    return rawData.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toLowerCase() : match.toUpperCase();
    });
}

function decryptQueryParams(req,res,next){
   //Here we will convert the upper case into lower case and
   //lower case into upper case
   for(q in req.query){
       let data = req.query[q]
       data = lowerUpper(data)
       req.query[q] = data

   }
   next()

}

function decodeQueryBase64(req,res,next){
    for(q in req.query){
        let data = req.query[q]
        data = new Buffer(data,'base64').toString('ascii')
        req.query[q] = data


    }
    next()
}

app.get('/eval', decodeQueryBase64, (req,res) => {
    console.log(req.query)
})

app.use('/encode',express.static(__dirname + '/public'))

app.listen(4545, () =>{
    console.log('server started on http://localhost:4545')
})