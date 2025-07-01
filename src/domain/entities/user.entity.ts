import { Entity } from "../shared/entity";

//Formato de entrada dos dados
export type UserCreateDto = {
    email: string;
    password : string;
}

export class User extends Entity{
    private constructor(
        id : string,
        private email : string,
        private password : string,
        updateAt : Date,
        createAt : Date
    ){
        super(id,createAt,updateAt);
        this.validate();
    }

    public static create({email , password}: UserCreateDto):User {}
}