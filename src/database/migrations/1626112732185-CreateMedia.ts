import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateMedia1626112732185 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'medias',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },
                    {
                        name: 'path',
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
        'medias',
        new TableForeignKey({
            name:'ProUserMedia',
            columnNames: ['pro_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'proAccounts',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('medias');
        await queryRunner.dropForeignKey('medias','ProUserMedias');
    }

}
