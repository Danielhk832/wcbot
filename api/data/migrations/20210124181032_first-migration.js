exports.up = async (knex) => {
  await knex.schema.createTable("words", (words) => {
    words.increments("word_id");
    words.string("word").notNullable();
    words.integer("value").notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("words");
};
