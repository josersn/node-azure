import { v4 as uuidV4 } from "uuid";

class Supplements {
    id?: string;

    admin?: boolean;
    email: string;
    dead_line?: boolean;
    created_at?: Date;
    updated_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.admin = false;
        }
    }
}

export { Supplements };
