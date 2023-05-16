export interface IDay {
	id: number;
	created_at: string;
	date: string;
	workingTime: number;
	isExtraPaid: boolean;
	workplace: string;
	workTimeStart: string;
	workTimeEnd: string;
}

export interface ICar {
	created_at: string | null;
	id: number;
	vehicleBrand: string | null;
	vehicleRegistrationNumber: string | null;
}
