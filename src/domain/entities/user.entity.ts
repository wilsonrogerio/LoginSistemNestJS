import { Utils } from "src/shared/utils/utils";
import { Entity } from "../shared/entity";

//Formato de entrada dos dados
export type UserCreateDto = {
    email: string;
    password: string;
}

export class User extends Entity {
    private constructor(
        id: string,
        private email: string,
        private password: string,
        updateAt: Date,
        createAt: Date
    ) {
        super(id, createAt, updateAt);
        this.validate();
    }

    public static create({ email, password }: UserCreateDto): User {
        const id = Utils.GenerateUUID();
        const hasedPassword = Utils.HashedPassword(password); // chamo a funcao de criar hash de senhas
        const createAt = new Date();
        const updateAt = new Date();

        return new User(id, email, hasedPassword, createAt, updateAt);
    }

    protected validate(): void { };

    public getEmail(): string {
        return this.email;
    }
    public getPassword(): string {
        return this.password;
    }
    
    // chamo a funcao de verificar a senha pasando a senha atual
    public comparePassword(aPassword : string): boolean{
        return Utils.ComparePassword(aPassword , this.password);
    }

}