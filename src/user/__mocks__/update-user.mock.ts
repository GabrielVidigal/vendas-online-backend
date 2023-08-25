import { UpdatePasswordDTO } from "../dtos/update-password.dto";

export const updatePasswordMock: UpdatePasswordDTO = {
    lastPassword: 'abc',
    newPassword: 'fdasfas',
}

export const updatePasswordInvalidMock: UpdatePasswordDTO = {
    lastPassword: 'fdasfas',
    newPassword: 'fasdfasdf'
}