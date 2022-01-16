exports.up = async (knex) => {
  await knex.schema.createTable("words", (words) => {
    words.increments("word_id");
    words.string("word", 200).notNullable();
    words.integer("value");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("words");
};
