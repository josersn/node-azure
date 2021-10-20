import { createConnection } from "typeorm";

createConnection({
    type: "postgres",
    port: 5432,
    host: "wind-database.postgres.database.azure.com", 
    username: "azure@wind-database",
    password: "Wind@2021",
    database: "wind", 
    migrations: [__dirname + "/../shared/infra/typeorm/migrations/*.js"],
    entities: [__dirname + "/../modules/**/model/*.js"],
    cli: {
        "migrationsDir": __dirname + "/../shared/infra/typeorm/migrations"
    }
});