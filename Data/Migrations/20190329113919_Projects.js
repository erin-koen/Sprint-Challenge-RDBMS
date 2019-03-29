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
    tbl.boolean("completed").notNullable();
    // actions - json
    tbl.json("actions");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
