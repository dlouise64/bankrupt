export default interface ICard {
	handleLandedOnCard?: any
	type?: string
	color?: string
	name?: string
	property_details?: {
		price?: number
	}
	type_color?: string
	card: any
	onClick?: any
	handlePreviewCard?: any
	position?: number
}
