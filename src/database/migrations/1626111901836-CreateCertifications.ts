import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCertifications1626111901836 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'certifications',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'institute',
                        type: 'varchar',
                    },
                    {
                        name: 'year',
                        type: 'varchar',
                    },
                    {
                        name: 'pro_id',
                        type: 'uuid',
                        isNullable: false
                    },
                ]
            })
        );
        await queryRunner.createForeignKey(
        'certifications',
        new TableForeignKey({
            name:'ProUserCertifications',
            columnNames: ['pro_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'proAccounts',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('certifications');
        await queryRunner.dropForeignKey('certifications','ProUserCertifications');
    }

}
