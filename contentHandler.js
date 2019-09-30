const fs = require('fs');
function canHandleRequest(req){
    return req.url.startsWith('/ladieswear');
}

exports.canHandleRequest = canHandleRequest;


function contentHandler(req, res){
    fs.readFile(req.url.substr(1), (error, data) => {
        if(error){
            res.status(404).json("Error: File not found " + error);
            return;
        }
        res.json(data);
    });
}

exports.contentHandler = contentHandler;