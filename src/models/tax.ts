import { uuid } from 'uuidv4';

class User {
    id: String;
    country: String;
    rate_payment: String;

    constructor({ country, rate_payment
    }: Omit<User, 'id'>) {
        this.id = uuid();
        this.country = country;
        this.rate_payment = rate_payment;
    }
}

export default User;