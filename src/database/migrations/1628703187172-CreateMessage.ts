import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateMessage1628703187172 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'messages',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                  
                    {
                        name: 'text',
                        type: 'text',
                    },
                    {
                        name: 'sent',
                        type: 'uuid',
                    },
                    {
                        name: 'to',
                        type: 'uuid',
                    },
                    {
                        name: 'contact_id',
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
            'messages',
            new TableForeignKey({
                name: 'ContactMessages',
                columnNames: ['contact_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'contacts',
                onDelete: 'CASCADE',
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('messages');
        await queryRunner.dropForeignKey('messages','contact_id');
    }

}
