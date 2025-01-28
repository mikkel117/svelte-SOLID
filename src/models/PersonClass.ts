export abstract class Person {
    name: string;
    address: string;
    role: string;
    
    constructor(name: string, address: string, role: string){
        this.name = name;
        this.address = address;
        this.role = role;
    }
}