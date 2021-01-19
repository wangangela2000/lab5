var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var name = request.query.name;
    var description = request.query.description;
    var imgUrl = "http://lorempixel.com/400/400/people";
    var input = {"name": name, "description": description, "imageURL": imgUrl};
    data.friends.push(input);
    response.render('index', data);
 }