import { v4 as uuidv4 } from 'uuid';
import { Columns } from "../types";
import avatar from '../assets/images/avatar.jpeg'

const participants: any = [];

for (let i = 0; i < 24; i++) {
	participants.push({
		id: uuidv4(),
		name: `Aryan${i+1}`,
		image: avatar,
		alt: "task image",
		participated: '10',
		wins: '3',
		losses: '7',
		attendance: '75',
	},)
	
}

export const Board: Columns = {
	participants: {
		name: 'participants',
		items: participants
	},
	roomA1: {
		name: 'Team A1',
		items: [
		]
	},
	roomA2: {
		name: 'Team A2',
		items: [
		]
	},
	roomB1: {
		name: 'Team B1',
		items: [
		]
	},
	roomB2: {
		name: 'Team B2',
		items: [
		]
	},
	roomC1: {
		name: 'Team C1',
		items: [
		]
	},
	roomC2: {
		name: 'Team C2',
		items: [
		]
	},
	roomD1: {
		name: 'Team D1',
		items: [
		]
	},
	roomD2: {
		name: 'Team D2',
		items: [
		]
	},
};
