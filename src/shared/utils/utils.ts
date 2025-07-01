import * as bcrypt from 'bcrypt';

export class Utils{
    public static GenerateUUID(): string{
        return crypto.randomUUID()
    }

    //Gerar a senha com hash
    public static HashedPassword(password : string ) : string{
        const salt = this.GenSalt();
        const passwordHashed = bcrypt.hashSync(password , salt);
        return passwordHashed;
    }

    //Verificar se a senha pasada confere com a salva
    public static ComparePassword( password : string , hasedPassword): boolean{
        return bcrypt.compareSync(password , hasedPassword )
    }
    // Gerado de carecteres para o hash da senha
    private static GenSalt(): string{
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        return salt;
    }
}