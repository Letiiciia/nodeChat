const loginTrilogo = require('../model/schemaAuthor');


const author_chat = (request, response) => {
    console.log(request.url);
    const body = request.body;

    const newAuthor = new loginTrilogo(body);

    newAuthor.save((error, login) => {
        if(error) {
            return response.status(500).send({message: "Error"});
        }else{
            return response.status(200).send({
                message: "Successfully Post",
                login
            });
        }
    });
}

const getAuthors = (request, response) => {
    console.log(request.url);
    
    loginTrilogo.find((error, authors) => {
        if(error){
            return response.status(500).status({message: "Error"});
        }else{
            return response.status(200).send({
                message: "All authors",
                authors
            });
        }
    });
}


module.exports = {
    author_chat,
    getAuthors
}