exports.up = function(knex) {
  return knex.schema.createTable("actions", function(tbl) {
    //id, autoincrementing
    tbl.increments();
    //description, string, required
    tbl.string("description", 256).notNullable();
    //notes, string
    tbl.string("notes", 256);
    //completed, boolean, required
    tbl.boolean("completed").notNullable();
    //project_id, foreignkey from project, required. Alpha version will just be an integer, think i can figure out how to make it a string
    tbl
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .ondelete("CASCADE")
      .onUdate("CASCADE");
  });
};

exports.down = function(knex) {};
