import { SpecialtyInterface } from './specialty.interface';
export interface FreelancerInterface{
    id: number,
    username: string,
    email: string,
    firstname: string,
    lastname: string,
    webPage: string,
    facebookLink: string,
    instagramLink: string,
    twitterLink: string,
    imageUrl: string,
    birthDat: Date,
    phone: string,
    description: string,
    specialty: SpecialtyInterface,
    profession: string
}
