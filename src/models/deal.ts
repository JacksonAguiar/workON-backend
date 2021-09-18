import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { uuid } from 'uuidv4';
import Project from './project';

@Entity("deals")
class Deal {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    project_id: string;

    @OneToOne(() => Project, project => project.deal)
    @JoinColumn({ name: 'project_id' })
    project: Project;

    @Column()
    days: number;

    @Column()
    rate: number;

    @Column()
    value: number;

    @Column()
    tasks: string;
}

export default Deal;