const ChatTrilogo = require('../model/Schema');

const adc = (request, response) => {
    console.log("URL: " + request.url);
    const body = request.body;

    const novo = new ChatTrilogo(body);

    console.log(novo);
    //console.log("BODY: " + JSON.stringify(request.body));

    // const newCalled = new ChatTrilogo(body);
    // console.log(newCalled);
    novo.save((error, data) => {
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


module.exports = {
    adc
}

