import { ZodError } from "zod";

export class ZodUtils{
    //Essa funcao e um modelo pre definido para exibir os erros do Zod
    public static formatZodErros(error : ZodError): string{
        const message = error.issues
        .map((issues) => `${issues.path.join('.')} : ${issues.message}`)
        .join(';\n ');
        return message;
    }
}