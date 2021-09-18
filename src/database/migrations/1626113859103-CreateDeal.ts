import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateDeal1626113859103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'deals',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'project_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    
                    {
                        name: 'days',
                        type: 'numeric',
                    },
                    {
                        name: 'rate',
                        type: 'numeric',
                    },
                    {
                        name: 'value',
                        type: 'money',
                    },
                    {
                        name: 'tasks',
                        type: 'varchar',
                    },
                    {
                        name: 'status',
                        type: 'varchar',
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
        'deals',
        new TableForeignKey({
            name:'DealProject',
            columnNames: ['project_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'projects',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('deals');
        await queryRunner.dropForeignKey('deals','DealProject');
    }

}
