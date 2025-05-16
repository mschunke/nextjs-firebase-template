export type Case = {
	clientId: string;
	clientName: string;
	mainCounselId: string;
	otherCounselIds?: string[];
	active: boolean;
	contractId: string;
	startDate: number;
	endDate?: number;
	movements: CaseMovement[];
};

export type CaseMovement = {
	date: number;
	description: string;
	amount: number;
	type: "income" | "expense";
};
