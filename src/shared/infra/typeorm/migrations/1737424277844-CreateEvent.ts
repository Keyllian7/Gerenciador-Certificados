import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from "typeorm";

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
            default: "uuid_generate_v4()"
          },
          { name: "name", type: "varchar", isNullable: false },
          { name: "description", type: "varchar", isNullable: false },
          { name: "date", type: "date", isNullable: false },
          { name: "local", type: "varchar", isNullable: false },
          { name: "time", type: "time", isNullable: false },
          { name: "instructor", type: "varchar", isNullable: false },
          { name: "createdAt", type: "timestamp", default: "now()" },
          { name: "updatedAt", type: "timestamp", default: "now()" },
          { name: "deletedAt", type: "timestamp", isNullable: true }
        ]
      })
    );
    await queryRunner.createTable(
      new Table({
        name: "event_users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            default: "uuid_generate_v4()"
          },
          { name: "id_event", type: "uuid", isNullable: false },
          { name: "id_user", type: "uuid", isNullable: false },
          {
            name: "presence",
            type: "enum",
            enum: ["pending", "confirmed", "absent"],
            isNullable: false
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()"
          },
          { name: "deletedAt", type: "timestamp", isNullable: true }
        ]
      })
    );
    await queryRunner.createForeignKey(
      "event_users",
      new TableForeignKey({
        columnNames: ["id_event"],
        referencedColumnNames: ["id"],
        referencedTableName: "events",
        onDelete: "CASCADE"
      })
    );
    await queryRunner.createForeignKey(
      "event_users",
      new TableForeignKey({
        columnNames: ["id_user"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE"
      })
    );
    await queryRunner.createForeignKey(
      "events",
      new TableForeignKey({
        columnNames: ["instructor"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE"
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("event");
    await queryRunner.dropTable("event_users");
  }
}
