import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from "typeorm";

export class CreateCertificate1737424277845 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "certificate",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            default: "uuid_generate_v4()"
          },
          { name: "student", type: "uuid", isNullable: false },
          { name: "event", type: "uuid", isNullable: false },
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
      "certificate",
      new TableForeignKey({
        columnNames: ["student"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE"
      })
    );

    await queryRunner.createForeignKey(
      "certificate",
      new TableForeignKey({
        columnNames: ["event"],
        referencedColumnNames: ["id"],
        referencedTableName: "events",
        onDelete: "CASCADE"
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("certificate");
  }
}
