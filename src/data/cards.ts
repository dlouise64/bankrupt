import colour from './colors'

const cards = [
	{
		type: 'draw',
		name: '?',
		color: colour.white,
		type_color: colour.purple,
		description: 'Draw a Chance card',
		position: 5,
		draw_name: 'Chance'
	},
	{
		type: 'place',
		name: 'Rio',
		color: colour.green,
		property_details: {
			price: 160,
			rent: 18,
			mortgage: 80,
			upgrade: 90,
			hotel_rents: [70, 180, 280]
		},
		position: 6
	},
	{
		type: 'tax',
		name: 'Tax',
		color: colour.white,
		type_color: colour.purple,
		description: 'Pay 7% of your assets to the bank when you land on this card',
		position: 7
	},
	{
		type: 'place',
		name: 'Madrid',
		color: colour.green,
		property_details: {
			price: 160,
			rent: 18,
			mortgage: 80,
			upgrade: 90,
			hotel_rents: [70, 180, 280]
		},
		position: 8
	},
	{
		type: 'utility',
		name: 'Water works',
		color: colour.white,
		type_color: colour.beige,
		property_details: {
			price: 120,
			rent: 12,
			mortgage: 60,
			upgrade: 80
		},
		position: 9
	},

	{
		type: 'jail',
		name: 'Jail',
		position: 10,
		color: colour.white,
		type_color: colour.purple,
		description: 'Go to Jail'
	},
	{
		type: 'utility',
		name: 'Electricity',
		color: colour.white,
		type_color: colour.beige,
		property_details: {
			price: 80,
			rent: 8,
			mortgage: 40,
			upgrade: 60
		},
		position: 4
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'place',
		name: 'Paris',
		color: colour.blue,
		property_details: {
			price: 200,
			rent: 22,
			mortgage: 100,
			upgrade: 120,
			hotel_rents: [90, 225, 350]
		},
		position: 11
	},
	{
		type: 'place',
		name: 'Delhi',
		color: colour.yellow,
		property_details: {
			price: 100,
			rent: 12,
			mortgage: 50,
			upgrade: 70,
			hotel_rents: [50, 125, 200]
		},
		position: 3
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'place',
		name: 'London',
		color: colour.blue,
		property_details: {
			price: 200,
			rent: 22,
			mortgage: 100,
			upgrade: 120,
			hotel_rents: [90, 225, 350]
		},
		position: 12
	},
	{
		type: 'utility',
		name: 'Airlines',
		color: colour.white,
		type_color: colour.beige,
		property_details: {
			price: 60,
			rent: 5,
			mortgage: 30,
			upgrade: 40
		},
		position: 2
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'tax',
		name: 'Tax',
		color: colour.white,
		type_color: colour.purple,
		description: 'Pay 7% of your assets to the bank when you land on this card',
		position: 13
	},
	{
		type: 'place',
		name: 'Sydney',
		color: colour.yellow,
		property_details: {
			price: 100,
			rent: 12,
			mortgage: 50,
			upgrade: 70,
			hotel_rents: [50, 125, 200]
		},
		position: 1
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'place',
		name: 'Moscow',
		color: colour.turq,
		property_details: {
			price: 240,
			rent: 30,
			mortgage: 120,
			upgrade: 150,
			hotel_rents: [125, 310, 450]
		},
		position: 14
	},
	{
		type: 'start',
		name: 'Start',
		position: 0,
		color: colour.white,
		type_color: colour.purple
	},
	{
		type: 'place',
		name: 'Dubai',
		color: colour.orange,
		property_details: {
			price: 180,
			rent: 20,
			mortgage: 90,
			upgrade: 110,
			hotel_rents: [80, 200, 320]
		},
		position: 19
	},
	{
		type: 'place',
		name: 'Vegas',
		color: colour.orange,
		property_details: {
			price: 180,
			rent: 20,
			mortgage: 90,
			upgrade: 110,
			hotel_rents: [80, 200, 320]
		},
		position: 18
	},

	{
		type: 'utility',
		name: 'Railway',
		color: colour.white,
		type_color: colour.beige,
		property_details: {
			price: 140,
			rent: 15,
			mortgage: 70,
			upgrade: 100
		},
		position: 17
	},

	{
		type: 'place',
		name: 'Tokyo',
		color: colour.turq,
		property_details: {
			price: 240,
			rent: 30,
			mortgage: 120,
			upgrade: 150,
			hotel_rents: [125, 310, 450]
		},
		position: 16
	},
	{
		type: 'draw',
		name: '?',
		color: colour.white,
		type_color: colour.purple,
		description: 'Draw a Community card',
		position: 15,
		draw_name: 'Community'
	}
]

export default cards
