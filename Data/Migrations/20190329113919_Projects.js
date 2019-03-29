exports.up = function(knex) {
  return knex.schema.createTable("projects", function(tbl) {
    //id, autoincrementing
    tbl.increments();
    //name, string, unique, required
    tbl
      .string("name", 128)
      .notNullable()
      .unique();
    //description, string, unique, required
    tbl
      .string("description", 256)
      .notNullable()
      .unique();
    //completed, boolean (returns 1 for true 0 for false), required
    //is there a way to restrict this to 1 or 0?
    tbl.integer("completed").defaultTo(0);
    // actions - json
    tbl.json("actions");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
