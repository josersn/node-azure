import { v4 as uuidV4 } from "uuid";
import { 
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn 
} from "typeorm";

@Entity("supplements")
class Supplement {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    dead_line?: boolean;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Supplement };
