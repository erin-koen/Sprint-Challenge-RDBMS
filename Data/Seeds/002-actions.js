exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').insert([
        {id: 1, description: 'rowValue1', notes:'fajsfdsdklafd', completed: 0, project_id:1},
        {id: 2, description: 'fsdgfds', notes:'dfagfadb', completed: 0, project_id:2},
        {id: 3, description: 'vzcxvz', notes:'fajdkdsfaslafd', completed: 0, project_id:2},
        {id: 4, description: 'dsfgfs', notes:'sdfda', completed: 0, project_id:3},
        {id: 5, description: 'asd', notes:'fajdklafd', completed: 0, project_id:3},
      ]);
    };
