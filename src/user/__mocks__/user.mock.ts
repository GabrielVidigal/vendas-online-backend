import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enum/user-type.enum";

export const userEntityMock: UserEntity = {
    cpf: '123456123',
    createdAt: new Date(),
    email: 'emailmock@email.com',
    id: 34242,
    name: 'nameMock',
    password: 'largePassword',
    phone: '32131231231',
    typeUser: UserType.User,
    updatedAt: new Date(),
}