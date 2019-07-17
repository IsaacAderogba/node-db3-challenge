const db = require('../data/dbConfig');

module.exports = {
  find: function() {
    return db('schemes');
  },
  findById: function(schemeId) {
    return db('schemes').where({schemeId}).first();
  },
  findSteps: function(schemeId) {
    return db('steps')
      .join('schemes', 'schemes.id', 'scheme_id')
      .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
      .where('scheme_id', schemeId);

  }
}