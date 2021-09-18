import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Contact from './contact';

@Entity("messages")
class Message {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    text: string;

    @Column()
    sent: string;
    
    @Column()
    to: string;
  
    @Column()
    contact_id: string;

  
    @ManyToOne(() => Contact, contact => contact.messages)
    @JoinColumn({ name: 'contact_id' })
    contact: Contact;

}

export default Message;