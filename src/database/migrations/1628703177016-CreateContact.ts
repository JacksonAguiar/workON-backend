import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateContact1628703177016 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'contacts',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'pro_id',
                        type: 'uuid',
                    },
                    {
                        name: 'seen',
                        type: 'bool',
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                    },
                    {
                        name: 'project_id',
                        type: 'uuid',
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
            'contacts',
            new TableForeignKey({
                name: 'UserProContact',
                columnNames: ['pro_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }));
        await queryRunner.createForeignKey(
            'contacts',
            new TableForeignKey({
                name: 'UserContact',
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }));
        await queryRunner.createForeignKey(
            'contacts',
            new TableForeignKey({
                name: 'ProjectContact',
                columnNames: ['project_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'projects',
                onDelete: 'CASCADE',
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('contacts');
        await queryRunner.dropForeignKey('contacts','UserProContact');
        await queryRunner.dropForeignKey('contacts','UserContact');
        await queryRunner.dropForeignKey('contacts','ProjectContact');
    }

}
