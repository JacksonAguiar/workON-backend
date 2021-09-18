import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany, JoinColumn, ManyToMany } from 'typeorm';
import Contact from './contact';
import ProAccount from './proAccount';
import Project from './project';

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    uid: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    type: string;

    @Column()
    profile_img: string;

    @OneToOne(() => ProAccount, pro=> pro.user)
    proAccount: ProAccount;

    @Column()
    provider: string;

    @OneToMany(() => Project, project => project.owner)
    projects: Project[];

    @Column()
    birth_date: string;

    @Column()
    register_done: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export default User;