import { Migrations, Database, sql } from "expo-sqlite-orm";
import { DBNAME, DBTABLES } from "../DBonfig";

const statements = {
    "00000001_create_leavehistory":
        sql` CREATE TABLE IF NOT EXISTS ${DBTABLES.LEAVEHISTORY} 
        (
            id INTEGER PRIMARY KEY NOT NULL,
            month INTEGER NOT NULL,
            cl_taken TEXT NOT NULL,
            pl_taken TEXT NOT NULL,
            timestamp INTEGER NOT NULL
        );`
};

export class DBMigrations {
    database;
    constructor() {
        this.database = Database.instance(DBNAME);
    }
    static async migrate() {
        const migrations = new Migrations(DBNAME, statements);
        console.log("migrated 1");
        return await migrations.migrate();
    }
}