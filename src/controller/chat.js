const chatTrilogo = require('../model/schemaChat');


const creatRoom = (request, response) => {
    console.log(request.url);
    const body = request.body;

    const newContent = new chatTrilogo(body);

    newContent.save((error, data) => {
        if (error) {
            return response.status(500).send({ message: "Error" });
        } else {
            return response.status(200).send({
                message: "Successfully Post",
                data
            });
        }
    })
}

const chatMessages = (request, response) => {
    console.log(request.url);
    const id = request.params.id;

    chatTrilogo.find({ticket_id:id},(error, data) => {
        if (error) {
            return response.status(500).send({ message: "Error" });
        } else {
            return response.status(200).send({
                message: `Chat: ${id}`,
                data
            });
        }
    })
}


module.exports = {
    creatRoom,
    chatMessages
}

