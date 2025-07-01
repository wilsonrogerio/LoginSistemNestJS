export interface Validador<Input>{
    validate(Input : Input): void;
}