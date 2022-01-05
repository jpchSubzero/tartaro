import { ProductResponse } from "./interfaces/product-response.interface";

export const productResponse: ProductResponse = {
    "$id": "1",
    "success": true,
    "result": {
        "$id": "2",
        "$values": [
            {
                "$id": "3",
                "code": "PROD001",
                "externalCode": "EXT_PROD001",
                "name": "Seguro sin límites\r\n",
                "description": "No importa si decides contratar este seguro por un mes o por un año, todos los meses pagarás un único valor mensualizado.\r\n",
                "issuesPolicyMother": true,
                "insuranceTypeId": "460cc702-619b-4ed9-b7da-629000b9d412",
                "insuranceCarrierId": "341232dc-e1b7-4d13-b62f-d66b4fa3986c",
                "contractTypeId": "92b081c7-ce5e-4c60-a14b-cf0fff125567",
                "isActive": true,
                "linkTC": "string",
                "exclusions": {
                    "$id": "4",
                    "$values": [
                        {
                            "$id": "5",
                            "code": "EXCL001",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Tu auto tiene más de 15 años de fabricación.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb",
                            "priority": 1,
                            "id": "9b69981b-6e06-4481-5fb3-08d9be92194e"
                        },
                        {
                            "$id": "6",
                            "code": "EXCL002",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"El siniestro tiene un valor menor al deducible mínimo. Ej: Si tu auto está asegurado por $20.000 y tu siniestro tuvo un costo de $150, la aseguradora no cubre el accidente porque el valor mínimo del deducible es $200. Consulta este valor en la sección de \\\"Deducibles\\\".\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb",
                            "priority": 2,
                            "id": "eaccef60-c5e9-4bfc-5fb4-08d9be92194e"
                        },
                        {
                            "$id": "7",
                            "code": "EXCL003",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Tu auto tiene un valor comercial menor a $10.000.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb",
                            "priority": 3,
                            "id": "a5c1c681-b4c5-431b-5fb5-08d9be92194e"
                        },
                        {
                            "$id": "8",
                            "code": "EXCL004",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"El conductor y asegurado es menor a 18 años o mayor a 70 años.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb",
                            "priority": 4,
                            "id": "65ab4ce5-b62b-4c8f-5fb6-08d9be92194e"
                        },
                        {
                            "$id": "9",
                            "code": "EXCL005",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Usas tu auto con un fin comercial, como alquiler o taxi.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb",
                            "priority": 1,
                            "id": "14b2530e-635b-48c4-c2d4-08d9bf2542c1"
                        },
                        {
                            "$id": "10",
                            "code": "EXCL006",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Transitas con tu auto por playas, ríos, esteros o realizas actividades 4x4.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb",
                            "priority": 6,
                            "id": "bf0fcfb1-ed8f-4703-c2d5-08d9bf2542c1"
                        },
                        {
                            "$id": "11",
                            "code": "EXCL007",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Realizas reparaciones o cualquier cambio de pieza de tu vehículo, antes de recibir la autorización de la aseguradora.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb",
                            "priority": 7,
                            "id": "0ddad56e-0964-48ee-c2d6-08d9bf2542c1"
                        },
                        {
                            "$id": "12",
                            "code": "EXCL008",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Tu auto sufre cualquier daño ocasionado por el uso inapropiado o alteración del combustible.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb",
                            "priority": 8,
                            "id": "3fe130cf-724a-4aab-c2d7-08d9bf2542c1"
                        },
                        {
                            "$id": "13",
                            "code": "EXCL009",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"La información sobre el siniestro es falsa, exagerada o llegas a un acuerdo con terceros antes de recibir la autorización de la aseguradora.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb",
                            "priority": 9,
                            "id": "3e46d5c6-cd00-4d21-c2d8-08d9bf2542c1"
                        }
                    ]
                },
                "benefits": {
                    "$id": "14",
                    "$values": []
                },
                "deductibles": {
                    "$id": "15",
                    "$values": [
                        {
                            "$id": "16",
                            "code": "DEDU001",
                            "name": "Pérdida parcial del vehículo por choque\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si tu accidente es catalogado como pérdida parcial, debes asumir el VALOR MÁS ALTO de las siguientes tres opciones:\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"ol\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"li\",\"Text\":\"10% del valor del siniestro.\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"li\",\"Text\":\"1% del valor asegurado del vehículo.\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"li\",\"Text\":\"$200\",\"Attr\":{},\"Children\":[]}]}]}\r\n",
                            "isActive": true,
                            "priority": 1,
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb"
                        },
                        {
                            "$id": "17",
                            "code": "DEDU002",
                            "name": "Pérdida total del vehículo por choque\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si tu accidente es catalogado como pérdida total, debes asumir el 10% del valor del siniestro. \",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "isActive": true,
                            "priority": 2,
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb"
                        },
                        {
                            "$id": "18",
                            "code": "DEDU003",
                            "name": "Pérdida total del vehículo por robo CON dispositivo satelital\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si tu accidente es catalogado como pérdida total y cuentas con dispositivo satelital, debes asumir el 5% del valor del siniestro. \",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "isActive": true,
                            "priority": 3,
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb"
                        },
                        {
                            "$id": "19",
                            "code": "DEDU004",
                            "name": "Pérdida total del vehículo por robo SIN dispositivo satelital\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si el valor asegurado de tu vehículo es MAYOR a $30.000, debes asumir el 20% del valor del siniestro. Si el valor de tu vehículo es MENOR $30.000, debes asumir el 10% del valor del siniestro.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "isActive": true,
                            "priority": 4,
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb"
                        }
                    ]
                },
                "coverages": {
                    "$id": "20",
                    "$values": [
                        {
                            "$id": "21",
                            "code": "COBE001",
                            "name": "Protección total\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Tu auto está totalmente cubierto ante cualquier daño parcial o total, ya sea por accidente o robo. Además, también cuentas con esta protección en toda la Comunidad Andina, es decir en Bolivia, Colombia y Perú.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 1,
                            "isActive": true,
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb"
                        },
                        {
                            "$id": "22",
                            "code": "COBE002",
                            "name": "Accidentes Personales a Ocupantes del vehículo\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si a causa de un accidente, tú y/o tus acompañantes quedan incapacitados o fallecen, la aseguradora pagará hasta $5.000 por cada afectado. Aplica para máximo 5 ocupantes.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 2,
                            "isActive": true,
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb"
                        },
                        {
                            "$id": "23",
                            "code": "COBE003",
                            "name": "Muerte accidental del titular\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si un accidente ocasiona el fallecimiento del titular del seguro, los herederos legales reciben $10.000.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 3,
                            "isActive": true,
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb"
                        },
                        {
                            "$id": "24",
                            "code": "COBE004",
                            "name": "Lesiones a Ocupantes del vehículo",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si a causa de un accidente, tú y/o tus acompañantes sufren alguna lesión, la aseguradora pagará hasta $3.000 por cada afectado. Aplica para máximo 5 ocupantes.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 4,
                            "isActive": true,
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb"
                        },
                        {
                            "$id": "25",
                            "code": "COBE005",
                            "name": "Gastos de Grúa y Transporte del vehículo\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si sufres un accidente o cualquier avería, cuentas con un monto de hasta $250 adicionales al monto que cubre la \\\"Asistencia vehicular 24/7\\\", para movilizar tu vehículo. Consulta este monto en la sección de \\\"Asistencias\\\".\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 5,
                            "isActive": true,
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb"
                        },
                        {
                            "$id": "26",
                            "code": "COBE006",
                            "name": "Protección jurídica en proceso penal\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Cuentas con $1.000 para gastos de procesos penales en caso de accidente. Este valor se devuelve por reembolso.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 6,
                            "isActive": true,
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb"
                        },
                        {
                            "$id": "27",
                            "code": "COBE007",
                            "name": "Responsabilidad Civil\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Cuentas con un límite de hasta $30.000 para cubrir los daños ocasionados a terceras personas o a sus bienes luego de un accidente.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 7,
                            "isActive": true,
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb"
                        },
                        {
                            "$id": "28",
                            "code": "COBE008",
                            "name": "Amparo Patrimonial\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Estás cubierto si causas un accidente tipificado como culpa grave (por desatender las señales o normas de tránsito, carecer de licencia, tener la licencia caducada o estar bajo efectos de bebidas embriagantes).\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 8,
                            "isActive": true,
                            "productId": "4683f67e-b616-ecfe-0387-3a00bda4bcfb"
                        }
                    ]
                },
                "requirements": {
                    "$id": "29",
                    "$values": []
                },
                "periodicityPayments": {
                    "$id": "30",
                    "$values": []
                },
                "paymentModes": {
                    "$id": "31",
                    "$values": []
                },
                "assistances": {
                    "$id": "32",
                    "$values": [
                        {
                            "$id": "33",
                            "name": "Auto sustituto\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Recibe un auto sustituto por 10 días en pérdidas parciales y 20 días en pérdidas totales, cuando el valor del siniestro sea mayor a $1.000 y la reparación de tu auto supere los 3 días. La gama del auto sustituto dependerá del valor asegurado de tu vehículo:\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"ul\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"li\",\"Text\":\"Vehículos con un valor asegurado de $0 a $20.000: Gama baja.\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"li\",\"Text\":\"Vehículos con un valor asegurado de $20.001 a $40.000: Gama media.\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"li\",\"Text\":\"Vehículos con un valor asegurado de $40.001 en adelante: Gama alta.\",\"Attr\":{},\"Children\":[]}]}]}\r\n",
                            "code": "ASIS001",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 1,
                            "products": {
                                "$id": "34",
                                "$values": [
                                    {
                                        "$ref": "3"
                                    }
                                ]
                            },
                            "id": "c81a92cf-cf25-3532-84b8-3a00c8506d1a"
                        },
                        {
                            "$id": "35",
                            "name": "Asistencia vehicular 24/7\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Cuentas con auxilio mecánico para averías leves como llantas bajas, falta de combustible, batería baja, llaves dentro del auto y traslado de ambulancia. Recibe hasta $300 para gastos de grúa y transporte del vehículo.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "code": "ASIS002",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 2,
                            "products": {
                                "$id": "36",
                                "$values": [
                                    {
                                        "$ref": "3"
                                    }
                                ]
                            },
                            "id": "39f867b1-aed6-b1d6-771e-3a00c850db1a"
                        },
                        {
                            "$id": "37",
                            "name": "Ángel guardián\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Cuentas con un chofer para regresar a tu domicilio desde eventos o reuniones sociales.\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Límite de movilización: 50 kilómetros o 2 horas de distancia. Aplica para máximo 5 eventos al año.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "code": "ASIS003",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 3,
                            "products": {
                                "$id": "38",
                                "$values": [
                                    {
                                        "$ref": "3"
                                    }
                                ]
                            },
                            "id": "85a9e4c1-27c0-3658-5530-3a00c8521159"
                        },
                        {
                            "$id": "39",
                            "name": "Documentos protegidos\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Recibe hasta $100 en caso de pérdida o robo de tus documentos (cédula, matrícula o licencia), sin importar el lugar donde suceda el incidente. Aplica para 1 evento al año.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "code": "ASIS004",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 4,
                            "products": {
                                "$id": "40",
                                "$values": [
                                    {
                                        "$ref": "3"
                                    }
                                ]
                            },
                            "id": "f99d0cbf-f260-c5bc-ed7b-3a00cc39e42b"
                        },
                        {
                            "$id": "41",
                            "name": "Llave Protegida\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Recibe hasta $150 para reemplazar tu llave, reparar la cerradura de la puerta principal o requerir un cerrajero para abrir la puerta de tu vehículo. Aplica para 1 evento al año.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "code": "ASIS005",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 5,
                            "products": {
                                "$id": "42",
                                "$values": [
                                    {
                                        "$ref": "3"
                                    }
                                ]
                            },
                            "id": "1912b9c7-ca8d-8924-b371-3a00cc3a447d"
                        },
                        {
                            "$id": "43",
                            "name": "Asistencia legal\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Cuentas con asesoría legal de manera telefónica o presencial en caso de sufrir un accidente. La asistencia presencial aplica para Quito, Guayaquil, Cuenca y Ambato. \",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "code": "ASIS006",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 6,
                            "products": {
                                "$id": "44",
                                "$values": [
                                    {
                                        "$ref": "3"
                                    }
                                ]
                            },
                            "id": "901096c1-37f3-ed16-10ad-3a00cc3a98b3"
                        },
                        {
                            "$id": "45",
                            "name": "Asistencia para emergencias en el hogar\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Cuentas con servicios de cerrajería, vidriería, electricidad y plomería para reparar cualquier eventualidad en tu casa.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "code": "ASIS007",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 7,
                            "products": {
                                "$id": "46",
                                "$values": [
                                    {
                                        "$ref": "3"
                                    }
                                ]
                            },
                            "id": "5a29653e-0510-07a4-6d14-3a00cc3aff94"
                        }
                    ]
                },
                "channels": {
                    "$id": "47",
                    "$values": [
                        {
                            "$id": "48",
                            "code": "BANCO01",
                            "name": "Banco del Pichincha",
                            "description": "Descripción Banco del Pichincha",
                            "isActive": true,
                            "countryId": "92868ba1-76fb-4b34-8751-ddd874ee8bba",
                            "currencyId": "2cfd94c4-3e53-47f8-9f71-6d74099779e7",
                            "channelsWays": {
                                "$id": "49",
                                "$values": []
                            },
                            "channelContacts": {
                                "$id": "50",
                                "$values": []
                            },
                            "products": null,
                            "id": "73b6ac58-aa85-42b2-bf74-1583999ae14e"
                        },
                        {
                            "$id": "51",
                            "code": "BANCO02",
                            "name": "Banco General Rumiñahui",
                            "description": "Descripción Banco General Rumiñahui",
                            "isActive": true,
                            "countryId": "92868ba1-76fb-4b34-8751-ddd874ee8bba",
                            "currencyId": "2cfd94c4-3e53-47f8-9f71-6d74099779e7",
                            "channelsWays": {
                                "$id": "52",
                                "$values": []
                            },
                            "channelContacts": {
                                "$id": "53",
                                "$values": []
                            },
                            "products": null,
                            "id": "b7e1322f-16ea-4876-887c-8370eea43df2"
                        }
                    ]
                },
                "id": "4683f67e-b616-ecfe-0387-3a00bda4bcfb"
            },
            {
                "$id": "54",
                "code": "PROD002",
                "externalCode": "EXT_PROD002",
                "name": "Seguro por kilómetros\r\n",
                "description": "Contrata el plan que mejor se ajuste a los kilómetros que recorres, manteniendo las mejores coberturas y beneficios.\r\n",
                "issuesPolicyMother": true,
                "insuranceTypeId": "460cc702-619b-4ed9-b7da-629000b9d412",
                "insuranceCarrierId": "341232dc-e1b7-4d13-b62f-d66b4fa3986c",
                "contractTypeId": "92b081c7-ce5e-4c60-a14b-cf0fff125567",
                "isActive": true,
                "linkTC": "string",
                "exclusions": {
                    "$id": "55",
                    "$values": [
                        {
                            "$id": "56",
                            "code": "EXCL010",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Tu auto tiene más de 15 años de fabricación.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06",
                            "priority": 10,
                            "id": "b25d31e6-58ec-47ba-c2d9-08d9bf2542c1"
                        },
                        {
                            "$id": "57",
                            "code": "EXCL011",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"El siniestro tiene un valor menor al deducible mínimo. Ej: Si tu auto está asegurado por $15.000 y tu siniestro tuvo un costo de $100, la aseguradora no te cubre porque el valor mínimo del deducible es $150. Consulta este monto en la sección de \\\"Deducibles\\\".\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06",
                            "priority": 11,
                            "id": "368f07b3-67e8-4752-c2da-08d9bf2542c1"
                        },
                        {
                            "$id": "58",
                            "code": "EXCL012",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Tu auto tiene un valor comercial menor a $10.000.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06",
                            "priority": 12,
                            "id": "d56eddc0-1de0-4fab-c2db-08d9bf2542c1"
                        },
                        {
                            "$id": "59",
                            "code": "EXCL013",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"El conductor y asegurado es menor a 18 años o mayor a 80 años.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06",
                            "priority": 13,
                            "id": "e741211c-2355-40a2-c2dc-08d9bf2542c1"
                        },
                        {
                            "$id": "60",
                            "code": "EXCL014",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Usas tu auto con un fin comercial, como alquiler o taxi.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06",
                            "priority": 14,
                            "id": "37b32b3f-e453-46ce-c2dd-08d9bf2542c1"
                        },
                        {
                            "$id": "61",
                            "code": "EXCL015",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Transitas con tu auto por playas, ríos, esteros o realizas actividades 4x4.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06",
                            "priority": 15,
                            "id": "96d79e10-80a2-4cb3-c2de-08d9bf2542c1"
                        },
                        {
                            "$id": "62",
                            "code": "EXCL016",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Realizas reparaciones o cualquier cambio de pieza de tu vehículo, antes de recibir la autorización de la aseguradora.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06",
                            "priority": 16,
                            "id": "f202c76e-b441-45a9-c2df-08d9bf2542c1"
                        },
                        {
                            "$id": "63",
                            "code": "EXCL017",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Tu auto sufre cualquier daño ocasionado por el uso inapropiado o alteración del combustible.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06",
                            "priority": 17,
                            "id": "3ecb1596-ec12-4839-c2e0-08d9bf2542c1"
                        },
                        {
                            "$id": "64",
                            "code": "EXCL018",
                            "name": "Sin nombre",
                            "isActive": true,
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"La información sobre el siniestro es falsa, exagerada o llegas a un acuerdo con terceros antes de ser autorizado por la aseguradora.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "coverageId": "00000000-0000-0000-0000-000000000000",
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06",
                            "priority": 18,
                            "id": "c9b49d9a-b077-476d-c2e1-08d9bf2542c1"
                        }
                    ]
                },
                "benefits": {
                    "$id": "65",
                    "$values": []
                },
                "deductibles": {
                    "$id": "66",
                    "$values": [
                        {
                            "$id": "67",
                            "code": "DEDU006",
                            "name": "Pérdida parcial del vehículo por choque\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si tu accidente es catalogado como pérdida parcial, debes asumir el VALOR MÁS ALTO de las siguientes tres opciones:\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"ol\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"li\",\"Text\":\"10% del valor del siniestro.\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"li\",\"Text\":\"1% del valor asegurado del vehículo.\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"li\",\"Text\":\"Deducible mínimo, dependiendo del valor asegurado de tu vehículo. Revisa la siguiente tabla.\",\"Attr\":{},\"Children\":[]}]},{\"NodeType\":\"Element\",\"Tag\":\"h4\",\"Text\":\"Tabla de Responsabilidad Civil\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"table\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"tbody\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Valor asegurado del vehículo\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Límite Responsabilidad Civil\",\"Attr\":{},\"Children\":[]}]},{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Menor o igual a $15000\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"$150\",\"Attr\":{},\"Children\":[]}]},{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Entre $15001 y $20000\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"$200\",\"Attr\":{},\"Children\":[]}]},{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Entre $20001 y $25000\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"$250\",\"Attr\":{},\"Children\":[]}]},{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Entre $25001 y $35000\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"$300\",\"Attr\":{},\"Children\":[]}]},{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Entre $35001 y $50000\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"$350\",\"Attr\":{},\"Children\":[]}]},{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Entre $50001 y $120000\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"$500\",\"Attr\":{},\"Children\":[]}]}]}]}]}\r\n",
                            "isActive": true,
                            "priority": 6,
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06"
                        },
                        {
                            "$id": "68",
                            "code": "DEDU005",
                            "name": "Pérdida total del vehículo por choque o robo\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si tu accidente es catalogado como pérdida total, debes asumir el 15% del valor del siniestro.  \",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "isActive": true,
                            "priority": 5,
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06"
                        }
                    ]
                },
                "coverages": {
                    "$id": "69",
                    "$values": [
                        {
                            "$id": "70",
                            "code": "COBE009",
                            "name": "Protección total\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Tu auto está totalmente cubierto ante cualquier daño parcial o total, ya sea por accidente o robo. Además, también cuentas con esta protección en toda la Comunidad Andina, es decir en Bolivia, Colombia y Perú.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 9,
                            "isActive": true,
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06"
                        },
                        {
                            "$id": "71",
                            "code": "COBE010",
                            "name": "Accidentes Personales a Ocupantes del vehículo\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si a causa de un accidente, tú y/o tus acompañantes quedan incapacitados o fallecen, la aseguradora pagará hasta $5.000 por cada afectado. Aplica para máximo 5 ocupantes.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 10,
                            "isActive": true,
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06"
                        },
                        {
                            "$id": "72",
                            "code": "COBE011",
                            "name": "Muerte accidental del titular\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si un accidente ocasiona el fallecimiento del titular del seguro, los herederos legales reciben $10.000.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 11,
                            "isActive": true,
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06"
                        },
                        {
                            "$id": "73",
                            "code": "COBE012",
                            "name": "Lesiones a Ocupantes del vehículo\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si a causa de un accidente, tú y/o tus acompañantes sufren alguna lesión, la aseguradora pagará hasta $3.000 por cada afectado. Aplica para máximo 5 ocupantes.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 12,
                            "isActive": true,
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06"
                        },
                        {
                            "$id": "74",
                            "code": "COBE013",
                            "name": "Gastos de Grúa y Transporte del vehículo\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Si sufres un accidente o cualquier avería, cuentas con un monto de hasta $200 adicionales al monto que cubre la \\\"Asistencia vehicular 24/7\\\", para movilizar tu vehículo. Consulta este monto en la sección de \\\"Asistencias\\\".\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 13,
                            "isActive": true,
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06"
                        },
                        {
                            "$id": "75",
                            "code": "COBE014",
                            "name": "Protección jurídica en proceso penal\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Cuentas con $1.000 para gastos de procesos penales en caso de accidente. Este valor se devuelve por reembolso.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 14,
                            "isActive": true,
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06"
                        },
                        {
                            "$id": "76",
                            "code": "COBE015",
                            "name": "Amparo Patrimonial\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Estás cubierto si causas un accidente tipificado como culpa grave (por desatender las señales o normas de tránsito, carecer de licencia o tener la licencia caducada).\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 15,
                            "isActive": true,
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06"
                        },
                        {
                            "$id": "77",
                            "code": "COBE016",
                            "name": "Responsabilidad Civil\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Cuentas con un monto límite, dependiendo del valor asegurado de tu vehículo, para cubrir los daños ocasionados a terceras personas o a sus bienes luego de un accidente.  Revisa la tabla para saber este monto.\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"h4\",\"Text\":\"Tabla de Responsabilidad Civil\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"table\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"tbody\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Valor asegurado del vehículo\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Límite Responsabilidad Civil\",\"Attr\":{},\"Children\":[]}]},{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Menor o igual a $15000\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Hasta $15000\",\"Attr\":{},\"Children\":[]}]},{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Entre $15001 y $20000\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Hasta $20000\",\"Attr\":{},\"Children\":[]}]},{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Entre $20001 y $25000\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Hasta $30000\",\"Attr\":{},\"Children\":[]}]},{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Entre $25001 y $30000\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Hasta $40000\",\"Attr\":{},\"Children\":[]}]},{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Entre $35001 y $50000\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Hasta $50000\",\"Attr\":{},\"Children\":[]}]},{\"NodeType\":\"Element\",\"Tag\":\"tr\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Entre $50001 y $120000\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"td\",\"Text\":\"Hasta $75000\",\"Attr\":{},\"Children\":[]}]}]}]}]}\r\n",
                            "limitValueMin": 0.00,
                            "limitValueMax": 0.00,
                            "limitEventMin": 0,
                            "limitEventMax": 0,
                            "priority": 16,
                            "isActive": true,
                            "productId": "f6716735-f892-924a-058e-3a00cba28f06"
                        }
                    ]
                },
                "requirements": {
                    "$id": "78",
                    "$values": []
                },
                "periodicityPayments": {
                    "$id": "79",
                    "$values": []
                },
                "paymentModes": {
                    "$id": "80",
                    "$values": []
                },
                "assistances": {
                    "$id": "81",
                    "$values": [
                        {
                            "$id": "82",
                            "name": "Auto sustituto\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Recibe un auto sustituto por 10 días en pérdidas parciales y 20 días en pérdidas totales, cuando el valor del siniestro sea mayor a $1.000 y la reparación de tu auto supere los 3 días. La gama del auto sustituto dependerá del valor asegurado de tu vehículo:\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"ul\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"li\",\"Text\":\"Vehículos con un valor asegurado de $0 a $20.000: Gama baja.\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"li\",\"Text\":\"Vehículos con un valor asegurado de $20.001 a $40.000: Gama media.\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"li\",\"Text\":\"Vehículos con un valor asegurado de $40.001 en adelante: Gama alta.\",\"Attr\":{},\"Children\":[]}]}]}\r\n",
                            "code": "ASIS008",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 8,
                            "products": {
                                "$id": "83",
                                "$values": [
                                    {
                                        "$ref": "54"
                                    }
                                ]
                            },
                            "id": "dff884c2-22b3-5cef-13f8-3a00ccf5c06f"
                        },
                        {
                            "$id": "84",
                            "name": "Asistencia vehicular 24/7\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Cuentas con auxilio mecánico para averías leves como llantas bajas, falta de combustible, batería baja, llaves dentro del auto y traslado de ambulancia. Recibe hasta $300 para gastos de grúa y transporte del vehículo.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "code": "ASIS009",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 9,
                            "products": {
                                "$id": "85",
                                "$values": [
                                    {
                                        "$ref": "54"
                                    }
                                ]
                            },
                            "id": "40493b23-196e-6ac4-f741-3a00ccf628b5"
                        },
                        {
                            "$id": "86",
                            "name": "Ángel guardián\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Cuentas con un chofer para regresar a tu domicilio desde eventos o reuniones sociales.\",\"Attr\":{},\"Children\":[]},{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Límite de movilización: 50 kilómetros o 2 horas de distancia. Aplica para máximo 5 eventos al año.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "code": "ASIS010",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 10,
                            "products": {
                                "$id": "87",
                                "$values": [
                                    {
                                        "$ref": "54"
                                    }
                                ]
                            },
                            "id": "a4688806-7657-d480-2d0f-3a00ccf69faf"
                        },
                        {
                            "$id": "88",
                            "name": "Documentos protegidos\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Recibe hasta $100 en caso de pérdida o robo de tus documentos (cédula, matrícula o licencia), sin importar el lugar donde suceda el incidente. Aplica para 1 evento al año.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "code": "ASIS011",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 11,
                            "products": {
                                "$id": "89",
                                "$values": [
                                    {
                                        "$ref": "54"
                                    }
                                ]
                            },
                            "id": "79be0d2d-ccac-56ee-a9d6-3a00ccf716ca"
                        },
                        {
                            "$id": "90",
                            "name": "Llave Protegida\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Recibe hasta $150 para reemplazar tu llave, reparar la cerradura de la puerta principal o requerir un cerrajero para abrir la puerta de tu vehículo. Aplica para 1 evento al año.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "code": "ASIS012",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 12,
                            "products": {
                                "$id": "91",
                                "$values": [
                                    {
                                        "$ref": "54"
                                    }
                                ]
                            },
                            "id": "ce3f1a33-6ae8-0b9d-9eaf-3a00ccf79462"
                        },
                        {
                            "$id": "92",
                            "name": "Asistencia legal\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Cuentas con asesoría legal de manera telefónica o presencial en caso de sufrir un accidente. La asistencia presencial aplica para Quito, Guayaquil, Cuenca y Ambato. \",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "code": "ASIS013",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 13,
                            "products": {
                                "$id": "93",
                                "$values": [
                                    {
                                        "$ref": "54"
                                    }
                                ]
                            },
                            "id": "dffae7aa-2b56-a117-8b4b-3a00ccf806b6"
                        },
                        {
                            "$id": "94",
                            "name": "Asistencia para emergencias en el hogar\r\n",
                            "description": "{\"NodeType\":\"Element\",\"Tag\":\"body\",\"Text\":null,\"Attr\":{},\"Children\":[{\"NodeType\":\"Element\",\"Tag\":\"p\",\"Text\":\"Cuentas con servicios de cerrajería, vidriería, electricidad y plomería para reparar cualquier eventualidad en tu casa.\",\"Attr\":{},\"Children\":[]}]}\r\n",
                            "code": "ASIS014",
                            "isActive": true,
                            "minEvents": 0,
                            "maxEvents": 0,
                            "priority": 14,
                            "products": {
                                "$id": "95",
                                "$values": [
                                    {
                                        "$ref": "54"
                                    }
                                ]
                            },
                            "id": "821b5c2e-4f2d-2e3b-6e3e-3a00ccf8617f"
                        }
                    ]
                },
                "channels": {
                    "$id": "96",
                    "$values": [
                        {
                            "$id": "97",
                            "code": "BANCO01",
                            "name": "Banco del Pichincha",
                            "description": "Descripción Banco del Pichincha",
                            "isActive": true,
                            "countryId": "92868ba1-76fb-4b34-8751-ddd874ee8bba",
                            "currencyId": "2cfd94c4-3e53-47f8-9f71-6d74099779e7",
                            "channelsWays": {
                                "$id": "98",
                                "$values": []
                            },
                            "channelContacts": {
                                "$id": "99",
                                "$values": []
                            },
                            "products": null,
                            "id": "73b6ac58-aa85-42b2-bf74-1583999ae14e"
                        }
                    ]
                },
                "id": "f6716735-f892-924a-058e-3a00cba28f06"
            }
        ]
    },
    "error": null,
    "targetUrl": "",
    "unAuthorizedRequest": true
}