export abstract class Person {
    id: number;
    name: string;
    address: string;
    role: string;
    
    constructor(id: number, name: string, address: string, role: string){
        this.id = id;
        this.name = name;
        this.address = address;
        this.role = role;
    }
}