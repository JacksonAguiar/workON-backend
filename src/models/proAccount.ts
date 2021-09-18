import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { uuid } from 'uuidv4';
import Certification from './certification';
import Contact from './contact';
import Project from './project';
import Tag from './tag';
import User from './user';

@Entity("proAccounts")
class ProAccount {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    user_id: string;


    @Column()
    quote: string;

    @Column()
    category: string;

    @Column()
    description: string;

    @Column()
    income: number;

    @Column()
    extra_taxes: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => User, user => user.proAccount, { cascade: true })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => Tag, tag => tag.proAccount, { eager: true })
    tags: Tag[];

    @OneToMany(() => Project, project => project.proAccount, { eager: true, })
    projects: Project[];

    @OneToMany(() => Certification, certification => certification.proAccount, { eager: true })
    certifications: Certification[];
}

export default ProAccount;