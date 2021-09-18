import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreateUsers1623678833588 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
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
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'type',
                        type: 'varchar'
                    },
                    {
                        name: 'profile_img',
                        type: 'varchar'
                    },
                    {
                        name: 'uid',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'register_done',
                        type: 'bool',
                    },
                    {
                        name: 'provider',
                        type: 'varchar',
                    },
                    {
                        name: 'birth_date',
                        type: 'timestamp',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default:'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default:'now()'
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
