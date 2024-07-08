export type ParticipantT = {
	id: string;
	name: string;
	participated: string,
	wins: string,
	losses: string,
	attendance: string,
	image?: string;
	alt?: string;
};

type Column = {
	name: string;
	items: ParticipantT[];
};

export type Columns = {
	[key: string]: Column;
};
