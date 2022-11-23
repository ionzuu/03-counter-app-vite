import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    
    test('getHeroeById debe de retornar un heroe por Id', () => {
        
        const id = 1;
        const hero = getHeroeById(id);

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' })
        
    })
    
    test('getHeroeById debe de retornar undefined si no existe', () => {
        
        const id = 100;
        const hero = getHeroeById(id);

        expect( hero ).toBe( undefined )
    
    })

    test('Debe de retornar un arreglo con los heroes de DC', () => {
    
        const owner = "DC";
        const hero = getHeroesByOwner(owner);

        expect( hero.length ).toBe(3);
        expect(hero).toEqual(hero.filter( (hero) => hero.owner === owner ))
        console.log(hero);
    })

    
    test('Debe de retornar un arreglo con los heroes de Marvel', () => {
    
        const owner = "Marvel";
        const hero = getHeroesByOwner(owner);

        expect( hero.length ).toBe(2);
        expect(hero).toEqual(hero.filter( (hero) => hero.owner === owner ));
        console.log(hero);
    })

})