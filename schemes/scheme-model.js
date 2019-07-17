const db = require('../data/dbConfig');

module.exports = {
  find: function() {
    return db('schemes');
  },
  findById: function(schemeId) {
    return db('schemes').where({schemeId}).first();
  },
  findSteps: function(schemeId) {

  }
}