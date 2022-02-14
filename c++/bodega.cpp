#include <iostream>
using namespace std;
int main() {

	int cod = 0;
	int tipo = 0;
	string tipoCc = "";
	string estante = "";
	float pesoP = 0;
	
	do {
		cout << "Digite el codigo de su bodega: ";
		cin >> cod;
	} while (cod < 168 || (cod > 500 && cod < 1000));

	if(cod >= 168 && cod <= 500) {
		tipo = 1;
		tipoCc = "BODEGA SUR";
	}

	if(cod > 1000) {
		tipo = 2;
		tipoCc = "BODEGA NORTE";
	}

	cout << "Digite el peso de su paquete: ";
	cin >> pesoP;

	if (tipo == 1) {
		if (pesoP < 48) {
			estante = "A";
		} else {
			estante = "B";
		}
	}

	if (tipo == 2) {
		if(pesoP < 68) {
			estante = "A";
		} else {
			estante = "B";
		}
	}

	cout << "Tu bodega es la " << tipoCc << endl;
	cout << "Tu estante es el " << estante;

	return 0;
}
