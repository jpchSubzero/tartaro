export const Functions = () => {

    const sum = () => {
        return 1 + 2;
    }

    const sum1 = (a: number, b: number): number => {
        return a + b;
    }

    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado es: {sum()}</span>
            <br />
            <span>El resultado 81 + 96 es: {sum1(81, 96)}</span>
        </>
    );
}
