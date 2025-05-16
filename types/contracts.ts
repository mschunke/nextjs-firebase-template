import type { PAY_METHOD } from "./payments";

export type BaseContract = {
	clientIds: string[];
	clientNames: string[];
	mainCounselId: string;
	otherCounselIds?: string[];
	active: boolean;
	type: PAY_METHOD;
	signedDate: number;
};

export type MonthlyContract = BaseContract & {
	type: "monthly";
	startDate: number;
	endDate?: number;
	monthlyBilling: {
		amount: number;
		dueDay: number;
		latePaymentPct: number;
		latePaymentInterest: number;
		paymentMethod: PAY_METHOD;
		stripeSubscriptionId?: string;
	};
};

export type OneTimeContract = BaseContract & {
	type: "one-time";
	totalAmount: number;
	paymentSchedule: ContractPaymentSchedule[];
};

export type ContractPaymentSchedule = {
	amount: number;
	eventDue: string;
	notes?: string;
	dueDate?: number;
	paymentMethod: "invoice" | "credit_card";
	stripeInvoiceId?: string;
};

export type Contract = MonthlyContract | OneTimeContract;
