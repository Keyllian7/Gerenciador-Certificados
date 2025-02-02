import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1738518700429 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        default: "uuid_generate_v4()"
                    },
                    { name: "name", type: "varchar", isNullable: false },
                    { name: "email", type: "varchar", isNullable: false },
                    { name: "password", type: "varchar", isNullable: false },
                    { name: "createdAt", type: "timestamp", default: "now()" },
                    { name: "updatedAt", type: "timestamp", default: "now()" },
                    { name: "deletedAt", type: "timestamp", isNullable: true },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
