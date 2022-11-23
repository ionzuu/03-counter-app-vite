import { render } from "@testing-library/react"
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp />', () => { 
    
    test('debe de hacer match con el snapshot', () => { 
        
        const title = 'Hola soy el title test';
        const { container } = render( <FirstApp title={ title } /> );
        
        //expect( container ).toMatchSnapshot();

     })

     test('debe de mostrar el titulo en un h1', () => { 
        
        const title = 'Hola, soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={title} /> )
        expect( getByText(title) ).toBeTruthy();

        expect( getByTestId('test-title').innerHTML ).toContain(title);

        // const h1 = container.querySelector('h1'); 
        // expect( h1.innerHTML).toContain( title );
      });

      test('debe de mostrar el subtitulo enviado por props', () => { 
        
        const title = 'Hola, soy Goku';
        const subTitle = 'Soy un sub';
        const { getAllByText } = render(
          <FirstApp 
            title={title} 
            subTitle={ subTitle }
          />
        );
        expect( getAllByText(subTitle).length ).toBe(2);

       });


 })