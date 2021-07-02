import {FreelancerInterface} from "./Frelancer.interface";
import {OfferInterface} from "./offer.interface";

export interface PostulationInterface {
  id: number,
  desiredPayment: number,
  description: string,
  freelancerId: number,
  firstname: string,
  lastname: string,
  state: string,
  offer: OfferInterface
}
