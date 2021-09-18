import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProject1626113848902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'projects',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'owner_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'pro_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'description',
                        type: 'text',
                    },
                    {
                        name: 'team',
                        type: 'bool',
                    },
                    {
                        name: 'status',
                        type: 'varchar',
                    },
                    {
                        name: 'category',
                        type: 'varchar',
                    },
                    {
                        name: 'url',
                        type: 'varchar',
                        isNullable:true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()'
                    },
                ]
            })
        );
        await queryRunner.createForeignKey(
        'projects',
        new TableForeignKey({
            name:'ProUserProject',
            columnNames: ['pro_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'proAccounts',
            onDelete: 'SET NULL',
        }));
        await queryRunner.createForeignKey(
        'projects',
        new TableForeignKey({
            name:'OwerUserProject',
            columnNames: ['owner_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('projects');
        await queryRunner.dropForeignKey('projects','ProUserProject');
        await queryRunner.dropForeignKey('projects','OwnerUserProject');
    }

}
