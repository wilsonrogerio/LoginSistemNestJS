import { User } from "../entities/user.entity";
import { Validador } from "../shared/validators/validator";
import { UserZodValidator } from "../validators/user.zod.validator";

export class UserValidatorFactory{
    public static create(): Validador<User>{
        return UserZodValidator.create();
    }
}