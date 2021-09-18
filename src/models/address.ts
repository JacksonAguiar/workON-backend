import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import User from './user';

@Entity('addresses')
class Address {

    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    country: string;
    
    @Column()
    state: string;
    
    @Column()
    street: string;

    @Column()
    zipcode: string;
    
    @Column()
    user_id: string;
    
    @OneToOne(() => User)
    @JoinColumn({name:'user_id'})
    user: User;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

}

export default Address;