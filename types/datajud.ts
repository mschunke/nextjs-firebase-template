export type Tribunal = {
	label: string;
	value: string;
	type:
		| "Superior"
		| "Eleitoral"
		| "Militar"
		| "Federal"
		| "Estadual"
		| "Trabalhista";
	url: string;
};

export type DataJudResponse = {
	took: number;
	timed_out: boolean;
	_shards: {
		total: number;
		successful: number;
		skipped: number;
		failed: number;
	};
	hits: {
		total: {
			value: number;
			relation: string;
		};
		max_score: number;
		hits: Array<{
			_index: string;
			_type: string;
			_id: string;
			_score: number;
			_source: {
				numeroProcesso: string;
				classe: {
					codigo: number;
					nome: string;
				};
				sistema: {
					codigo: number;
					nome: string;
				};
				formato: {
					codigo: number;
					nome: string;
				};
				tribunal: string;
				dataHoraUltimaAtualizacao: string;
				grau: string;
				"@timestamp": string;
				dataAjuizamento: string;
				movimentos: Array<{
					complementosTabelados?: Array<{
						codigo: number;
						valor: number;
						nome: string;
						descricao: string;
					}>;
					codigo: number;
					nome: string;
					dataHora: string;
				}>;
				id: string;
				nivelSigilo: number;
				orgaoJulgador: {
					codigoMunicipioIBGE: number;
					codigo: number;
					nome: string;
				};
				assuntos: Array<{
					codigo: number;
					nome: string;
				}>;
			};
		}>;
	};
};

// Sample datajud response
// {
//   "took": 6679,
//   "timed_out": false,
//   "_shards": {
//       "total": 7,
//       "successful": 7,
//       "skipped": 0,
//       "failed": 0
//   },
//   "hits": {
//       "total": {
//           "value": 1,
//           "relation": "eq"
//       },
//       "max_score": 13.917725,
//       "hits": [
//           {
//               "_index": "api_publica_trf1",
//               "_type": "_doc",
//               "_id": "TRF1_436_JE_16403_00008323520184013202",
//               "_score": 13.917725,
//               "_source": {
//                   "numeroProcesso": "00008323520184013202",
//                   "classe": {
//                       "codigo": 436,
//                       "nome": "Procedimento do Juizado Especial Cível"
//                   },
//                   "sistema": {
//                       "codigo": 1,
//                       "nome": "Pje"
//                   },
//                   "formato": {
//                       "codigo": 1,
//                       "nome": "Eletrônico"
//                   },
//                   "tribunal": "TRF1",
//                   "dataHoraUltimaAtualizacao": "2023-07-21T19:10:08.483Z",
//                   "grau": "JE",
//                   "@timestamp": "2023-08-14T11:50:51.994Z",
//                   "dataAjuizamento": "2018-10-29T00:00:00.000Z",
//                   "movimentos": [
//                       {
//                           "complementosTabelados": [
//                               {
//                                   "codigo": 2,
//                                   "valor": 1,
//                                   "nome": "competência exclusiva",
//                                   "descricao": "tipo_de_distribuicao_redistribuicao"
//                               }
//                           ],
//                           "codigo": 26,
//                           "nome": "Distribuição",
//                           "dataHora": "2018-10-30T14:06:24.000Z"
//                       },
//                       ...
//                       {
//                           "codigo": 14732,
//                           "nome": "Conversão de Autos Físicos em Eletrônicos",
//                           "dataHora": "2020-08-05T01:15:18.000Z"
//                       }
//                   ],
//                   "id": "TRF1_436_JE_16403_00008323520184013202",
//                   "nivelSigilo": 0,
//                   "orgaoJulgador": {
//                       "codigoMunicipioIBGE": 5128,
//                       "codigo": 16403,
//                       "nome": "JEF Adj - Tefé"
//                   },
//                   "assuntos": [
//                       {
//                           "codigo": 6177,
//                           "nome": "Concessão"
//                       }
//                   ]
//               }
//           }
//       ]
//   }
// }
