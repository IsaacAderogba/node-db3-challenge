const db = require("../data/dbConfig");

module.exports = {
  find: function() {
    return db("schemes");
  },
  findById: function(id) {
    return db("schemes")
      .where({ id })
      .first();
  },
  findSteps: function(id) {
    return db("steps")
      .join("schemes", "schemes.id", "scheme_id")
      .select(
        "steps.id",
        "schemes.scheme_name",
        "steps.step_number",
        "steps.instructions"
      )
      .where("scheme_id", id);
  },
  add: function(scheme) {
    return db("schemes")
      .insert(scheme)
      .then(([id]) => this.findById(id));
  },
  update: function(changes, id) {
    return db("schemes")
      .where({ id })
      .update(changes)
      .then(count => (count > 0 ? this.findById(id) : null));
  },
  remove: async function(id) {
    const toBeDeleted = await this.findById(id);
    return db("schemes")
      .where({ id })
      .del()
      .then(() => toBeDeleted);
  }
};
