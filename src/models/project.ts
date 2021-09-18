import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Deal from './deal';
import ProAccount from './proAccount';
import Task from './tasks';
import User from './user';

@Entity("projects")
class Project {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    owner_id: string;

    @Column()
    pro_id: string;

    @Column()
    title: string;
    
    @Column()
    team: boolean;

    @Column()
    description: string;

    @Column()
    status: string;

    @Column()
    category: string;

    @Column()
    url: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => Deal, deal => deal.project)
    deal: Deal

    @OneToMany(() => Task, task => task.project)
    tasks: Task[];

    @ManyToOne(() => ProAccount, pro=>pro.projects)
    @JoinColumn({ name: 'pro_id' })
    proAccount: ProAccount;
    
    @ManyToOne(() => User, user => user.projects, {eager:true})
    @JoinColumn({ name: 'owner_id' })
    owner: User;

}

export default Project;