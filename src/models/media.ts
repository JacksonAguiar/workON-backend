import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import ProAccount from "./proAccount";

@Entity("medias")
class Media {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    pro_id: string;
   
    @Column()
    type: string;
   
    @Column()
    path: string;

    @ManyToOne(() => ProAccount)
    @JoinColumn({name:'pro_id'})
    proAccount: ProAccount;

}
export default Media;