exports.up = function(knex) {
  return knex.schema.createTable("actions", function(tbl) {
    //id, autoincrementing
    tbl.increments();
    //description, string, required
    tbl.string("description", 256).notNullable();
    //notes, string
    tbl.string("notes", 256).notNullable();
    //completed, boolean - loosey goosey right now, need to figure out a way to restrict to 1 and 0 on api - probably a conditional - 'if completed, send 1, else 0'
    tbl.integer("completed").defaultTo(0);
    //project_id, foreignkey from project, required. Not nullable. 
    tbl
      .integer("project_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("actions");
};
