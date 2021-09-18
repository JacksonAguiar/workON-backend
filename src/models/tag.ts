import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { uuid } from 'uuidv4';
import ProAccount from './proAccount';
@Entity("tags")
class Tag {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    pro_id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => ProAccount, tags => Tag)
    @JoinColumn({ name: 'pro_id' })
    proAccount: ProAccount;

}

export default Tag;