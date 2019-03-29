
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([
        {id: 1, name: 'rowValue1', description:'fajdklafd', completed: 0, actions:[]},
        {id: 2, name: 'fsdgfds', description:'dfagfadb', completed: 0, actions:[]},
        {id: 3, name: 'vzcxvz', description:'fajdkdsfaslafd', completed: 0, actions:[]},
        {id: 4, name: 'dsfgfs', description:'sdfda', completed: 0, actions:[]},
        {id: 5, name: 'dsgsds', description:'gre', completed: 0, actions:[]},
      ]);
    };
