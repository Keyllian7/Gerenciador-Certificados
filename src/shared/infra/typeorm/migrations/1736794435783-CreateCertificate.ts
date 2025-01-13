import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCertificate1736794435783 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "certificate",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            default: "uuid_generate_v4()",
          },
          { name: "student", type: "varchar", isNullable: false },
          { name: "course", type: "varchar", isNullable: false },
          { name: "hours", type: "integer", isNullable: false },
          { name: "instructor", type: "varchar", isNullable: false },
          { name: "identification", type: "varchar", isNullable: false },
          { name: "date", type: "date", isNullable: false },
          { name: "city", type: "varchar", isNullable: false },
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
          { name: "deletedAt", type: "timestamp", isNullable: true },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("certificate");
  }
}
