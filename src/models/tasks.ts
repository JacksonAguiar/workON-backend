import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { uuid } from 'uuidv4';
import ProAccount from './proAccount';
import Project from './project';
@Entity("tasks")
class Task {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    done: boolean;

    @Column()
    project_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Project, project => project.tasks)
    @JoinColumn({ name: 'project_id' })
    project: Project;

}

export default Task;