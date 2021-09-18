import { uuid } from 'uuidv4';

class Team {
    id: String;
    project_id: String;
    account_pro_id: String;


    constructor({ project_id, account_pro_id }: Omit<Team, 'id'>) {
        this.id = uuid();
        this.project_id = project_id;
        this.account_pro_id = account_pro_id;

    }
}

export default Team;