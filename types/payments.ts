export type PAY_METHOD = "invoice" | "credit_card" | "pix" | "manual";

export type AccountsReceivable = {
	stripeInvoiceId?: string;
	dueDate?: number;
	amount: number;
	status: "pending" | "paid";
	paymentDate?: number;
	paymentMethod: PAY_METHOD;
	notes?: string;
	sourceContractId: string;
	createdAt: number;
	createdBy: string;
};
