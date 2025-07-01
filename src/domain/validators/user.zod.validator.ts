import { z } from "zod";
import { User } from "../entities/user.entity";
import { Validador } from "../shared/validators/validator";
import { ZodUtils } from "src/shared/utils/zod.utils";
import { ValidatorDomainException } from "../shared/exceptions/validator.domain.exception";

export class UserZodValidator implements Validador<User>{
    private constructor(){}

    public static create(): UserZodValidator{
        return new UserZodValidator();
    }

    public  validate(input: User):void{
        try {
            //chamo o schema passando os dados recebidos
            this.getZodSchema().parse(input)
        } catch (error) {
            //verifico se foi um erro nos dados recebidos no schema
            if(error instanceof z.ZodError){
                const message = ZodUtils.formatZodErros(error);
                throw new ValidatorDomainException(
                    `Error while validating user ${input.getId()} : ${message}`,
                    `Os dados para criacao do usuario estao invalido ${message}`,
                    UserZodValidator.name,
            )
            }
        }

    }

    //Formato esperado do usuario
    private getZodSchema(){
        //Schema de validacao dos dados - oque deve ser recebido na criacao do usuario
        const zodSchema = z.object({
            id : z.string().uuid(),
            email : z.string().email(),
            password : z.string().min(8),
            createAt: z.date(),
            updateAt: z.date()
        });
        return zodSchema;
    }
}