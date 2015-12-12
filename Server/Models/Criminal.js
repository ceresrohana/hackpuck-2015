// Criminal.js
var mongoose = require('Mongoose');
 
// Cria um novo Schema com os campos que iremos utilizar no model do Criminal
var CriminalSchema = new mongoose.Schema({
    id: String, // ID correspodente da 
    crime: String,
    age: Number,
    country: String
});
 
//Define o model Criminal
mongoose.model('Criminal', CriminalSchema);