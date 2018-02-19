import { Reviews } from './review';

export class Product {
	name: string;
	pic: string;
	description: string;
	type: string;
	cost: number;
	review: Reviews[];
}