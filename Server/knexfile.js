;
const databaseData = {
    client: process.env.CLIENT || 'pg',
    connection: process.env.CONNECTION_DB || {
        host: 'localhost',
        port: '5433',
        user: 'facturation_user',
        password: '123456',
        database: 'facturation_system_db1'
    }
};

module.exports = {

    development: {
        migrations: {tableName: 'knex_migrations', directory: './database/migrations'},
        seeds: {directory: './database/seeds'},
        client: databaseData.client,
        connection: databaseData.connection

    },
};
