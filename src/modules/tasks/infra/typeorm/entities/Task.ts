import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("tasks")
class Task {
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    assigned_to: string;

    @Column()
    email: string;

    @Column()
    status: number;

    @Column()
    reOpen: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Task };
