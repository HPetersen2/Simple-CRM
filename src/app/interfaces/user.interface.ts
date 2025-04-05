export class User {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    birthDate: Date | null;
    street: string | null;
    zipCode: number | null;
    city: string | null;

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.birthDate = new Date();
        this.street = "";
        this.zipCode = 0;
        this.city = "";
    }
}
