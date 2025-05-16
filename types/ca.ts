export type Certificate = {
	name: string;
	doc: number;
	docType: "cpf" | "cnpj" | "unknown";
	locality: string;
	state: string;
	country: string;
	validity: {
		start: string;
		end: string;
	};
	issuer: {
		name: string;
		country: string;
		authority: string;
	};
};

// SUBJECT
// {
// 	type: '2.5.4.6',
// 	value: 'BR',
// 	valueTagClass: 19,
// 	name: 'countryName',
// 	shortName: 'C'
// },
// {
// 	type: '2.5.4.10',
// 	value: 'ICP-Brasil',
// 	valueTagClass: 19,
// 	name: 'organizationName',
// 	shortName: 'O'
// },
// {
// 	type: '2.5.4.8',
// 	value: 'SC',
// 	valueTagClass: 19,
// 	name: 'stateOrProvinceName',
// 	shortName: 'ST'
// },
// {
// 	type: '2.5.4.7',
// 	value: 'JARAGUA DO SUL',
// 	valueTagClass: 19,
// 	name: 'localityName',
// 	shortName: 'L'
// },
// {
// 	type: '2.5.4.11',
// 	value: '34189547000107',
// 	valueTagClass: 19,
// 	name: 'organizationalUnitName',
// 	shortName: 'OU'
// },
// {
// 	type: '2.5.4.11',
// 	value: 'Secretaria da Receita Federal do Brasil - RFB',
// 	valueTagClass: 19,
// 	name: 'organizationalUnitName',
// 	shortName: 'OU'
// },
// {
// 	type: '2.5.4.11',
// 	value: 'RFB e-CNPJ A1',
// 	valueTagClass: 19,
// 	name: 'organizationalUnitName',
// 	shortName: 'OU'
// },
// {
// 	type: '2.5.4.11',
// 	value: 'videoconferencia',
// 	valueTagClass: 19,
// 	name: 'organizationalUnitName',
// 	shortName: 'OU'
// },
// {
// 	type: '2.5.4.3',
// 	value: 'INTERCODE CONSULTORIA EM TECNOLOGIA DA INFORMACAO:47036651000103',
// 	valueTagClass: 19,
// 	name: 'commonName',
// 	shortName: 'CN'
// }
