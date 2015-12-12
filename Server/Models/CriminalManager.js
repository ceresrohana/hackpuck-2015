// Define as bibliotecas que iremos utilizar
var express = require('express');
var mongoose = require('Mongoose');
var Criminal = mongoose.model('Criminal');
 
// Busca um criminoso
exports.search = function(req, res) {
    // utilizaremos o mongoose para buscar todos os contatos no BD
    Criminal.find(function(err, contatos) {
    });
}
 
// Cria um criminoso
exports.create = function(data) {
    // Cria um criminoso
    Criminal.create({
        id : data['id'],
        crime : data['crime'],
        age : data['age'],
        country : data['country']
    }
 
});
 
// Deleta um criminoso
exports.delete = function(id) {
    // Remove o contato no Model pelo parâmetro _id
    Criminal.remove({
        _id : id
    }
});
 
// Edita um criminoso
exports.edit = function(id) {
    // Busca o criminodo no Model pelo parâmetro id
    Contato.findOne({
        _id : id
    }
});
 
