import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProAccount1625940224563 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'proAccounts',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'description',
                        type: 'text',
                    },
                    {
                        name: 'quote',
                        type: 'varchar',
                    },
                    {
                        name: 'category',
                        type: 'varchar',
                    },
                    {
                        name: 'income',
                        type: 'money',
                    },
                    {
                        name: 'extra_taxes',
                        type: 'numeric',
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                        isNullable: false
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
        'proAccounts',
        new TableForeignKey({
            name:'ProAccountUser',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('proAccounts');
        await queryRunner.dropForeignKey('proAccounts','ProAccountUser');
    }

}
