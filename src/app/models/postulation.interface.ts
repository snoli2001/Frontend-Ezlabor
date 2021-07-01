import {FreelancerInterface} from "./Frelancer.interface";
import {OfferInterface} from "./offer.interface";

export interface PostulationInterface {
  id: number,
  desiredPayment: number,
  description: string,
  freelancer: FreelancerInterface,
  offer: OfferInterface
}
