export interface ICard {
	type: string
	name?: string
	color?: string
	description?: string
	position?: number
	property_details?: {
		price: number
		rent: number
		mortgage: number
		upgrade: number
		hotel_rents?: Array<number>
	}
}
