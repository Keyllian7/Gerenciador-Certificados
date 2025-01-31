import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEvents1737424277844 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "events",
                columns: [
                    {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    default: "uuid_generate_v4()",
                    },
                    { name: 'name', type: 'varchar', isNullable: false },
                    { name: "description", type: "varchar", isNullable: false },
                    { name: "date", type: "date", isNullable: false },
                    { name: "local", type: "varchar", isNullable: false },
                    { name: "time", type: "time", isNullable: false },
                    { name: "createdAt", type: "timestamp", default: "now()" },
                    { name: "updatedAt", type: "timestamp", default: "now()" },
                    { name: "deletedAt", type: "timestamp", isNullable: true },
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("event");
    }

}
