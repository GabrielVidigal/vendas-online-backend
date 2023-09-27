import { PaymentType } from "src/payment-status/enums/payment-type.enum";
import { PaymentEntity } from "../entities/payment.entity";

export const paymentMock: PaymentEntity = {
    createdAt: new Date(),
    discount: 432,
    finalPrice: 6345634.45,
    id: 5432523,
    price: 5432112.4,
    statusId: PaymentType.Done,
    updatedAt: new Date(),
    type: '',
}