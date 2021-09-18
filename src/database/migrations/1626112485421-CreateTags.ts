import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTags1626112485421 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tags',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
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
        'tags',
        new TableForeignKey({
            name:'ProUserTags',
            columnNames: ['pro_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'proAccounts',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tags');
        await queryRunner.dropForeignKey('tags','ProUserTags');
    }

}
