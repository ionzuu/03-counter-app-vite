import { string } from "prop-types";
import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {
    
    test('debe de retornar un string y un numero', () => {
        
        const [letters, numbers] = retornaArreglo();

        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe('number');

        expect( letters ).toStrictEqual( expect.any(String) );
        expect( numbers ).toStrictEqual( expect.any(Number) );
    });

});