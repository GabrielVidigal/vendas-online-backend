import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { authorizantionToLoginPayload } from "src/utils/base-64-converter";

export const UserId = createParamDecorator((_, ctx: ExecutionContext) => {
    const { authorization } = ctx.switchToHttp().getRequest().headers;
    
    const loginPayLoad = authorizantionToLoginPayload(authorization)

    return loginPayLoad?.id;
})