interface PersonWithOutAddress {
    name: string,
    age: number
}

interface PersonWithAddress extends PersonWithOutAddress {
    address: Address
}

interface PersonWithAddressLocation extends PersonWithOutAddress {
    address: AddressLocation
}


interface Address {
    country: string,
    street: string,
    houseNumber: string
}

interface Location {
    latitude: number,
    longitude: number,
}

interface AddressLocation extends Address {
    location: Location
}

export const LiteralObjects = () => {

    const person1 = {
        name: 'Juan Pablo',
        age: 43,
        address: {
            country: 'Ecuador',
            street: 'Calle 1',
            houseNumber: '123-456'
        }
    };

    const person2 = {
        name: 'Juan Pablo',
        age: '43',
        address: {
            country: 'Ecuador',
            street: 'Calle 1',
            houseNumber: 123456
        }
    };

    // No acepta tipo numérico
    // person2.age = 43;

    // No existe la propiedad inexistente
    // person2.lastName = 'Correa';

    const person3:PersonWithOutAddress = {
        name: 'Juan Pablo',
        age: 43
    };

    const person4:PersonWithAddress = {
        name: 'Juan Pablo',
        age: 43,
        address: {
            country: 'Ecuador',
            street: 'Calle 1',
            houseNumber: '123456'
        }
    };

    const person5:PersonWithAddressLocation = {
        name: 'Juan Pablo',
        age: 43,
        address: {
            country: 'Ecuador',
            street: 'Calle 1',
            houseNumber: '123456',
            location: {
                latitude: 1.123345546456,
                longitude: 1.123345546456
            }
        }
    };

    return (
        <>
            <h3>Objectos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify(person1, null, 2) }
                </pre>
            </code>

            <code>
                <pre>
                    { JSON.stringify(person2, null, 2) }
                </pre>
            </code>

            <code>
                <pre>
                    { JSON.stringify(person3, null, 2) }
                </pre>
            </code>

            <code>
                <pre>
                    { JSON.stringify(person4, null, 2) }
                </pre>
            </code>

            <code>
                <pre>
                    { JSON.stringify(person5, null, 2) }
                </pre>
            </code>
        </>
    );
}
