import { SpecialtyInterface } from './specialty.interface';

export interface OfferInterface {
    id: number,
    title: string,
    description: string,
    paymentAmount: number,
    startDate: Date,
    endDate: Date,
    monthDuration: number,
    specialty: SpecialtyInterface,
    active: boolean
}