import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1698681393695 implements MigrationInterface {
    name = 'NewMigrations1698681393695'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`surname\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`age\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`age\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`surname\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }

}
