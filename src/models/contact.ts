import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Message from './message';
import ProAccount from './proAccount';
import Project from './project';
import User from './user';

@Entity("contacts")
class Contact {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    seen: boolean;

    @Column()
    pro_id: string;

    @Column()
    user_id: string;

    @Column()
    project_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'pro_id' })
    pro_account: User;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Project,{eager:true})
    @JoinColumn({ name: 'project_id' })
    project: Project;

    @OneToMany(() => Message, messages => messages.contact)
    messages: Message[];

}

export default Contact;