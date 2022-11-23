import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 

    test('getHeoresByIdAsync debe de retornarn un heroe', (done) => { 
        
        const id = 1;
        getHeroeByIdAsync( id )
        .then( hero => {
            expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC'});

        });
        done();
     });

     test('getHeoresByIdAsync debe de obtener un error s heroe no existe', (done) => { 
        
        const id = 100;
        getHeroeByIdAsync( id )
        .then( hero =>{
            expect( hero ).toBeFalsy();
            done();
        })
        .catch( error => {
            console.log(error);
            done();
        });
     });

 });