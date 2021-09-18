import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import ProAccount from "./proAccount";

@Entity("certifications")
class Certification {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    pro_id: string;

    @Column()
    title: string;

    @Column()
    institute: string;

    @Column()
    year: String;

    @ManyToOne(() => ProAccount, pro => pro.certifications)
    @JoinColumn({ name: 'pro_id' })
    proAccount: ProAccount;

}
export default Certification;