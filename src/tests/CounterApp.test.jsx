import { CounterApp } from "../CounterApp"
import { render, screen, getByText, toBeTruthy, getByRole, fireEvent } from '@testing-library/react'

describe('Pruebas en el <CounterApp />', () => { 
    
    const initialValue = 100;

    test('debe de hacer match con el snapshot', () => { 
        
        const { container } = render( <CounterApp value={initialValue} /> );
        expect( container ).toMatchSnapshot();
     });

     test('debe de mostrar el valor inicial de 100 <CounterApp value={100}', () => { 
        
        render( <CounterApp value={value} /> );
        expect( screen.getByText(100) ).toBeTruthy();
     });

     test('debe de incrementar con el botón +1', () => { 
        
        render( <CounterApp value={initialValue} /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11') ).toBeTruthy();
     });

     test('debe de decrementar con el botón +1', () => { 
        
        render( <CounterApp value={initialValue} /> );
        fireEvent.click( screen.getByText('-1' ));
        screen.debug();
        expect( screen.getByText('9')).toBeTruthy();
     });

     test('debe de funcionar el botón de reset', () => { 
        
        render( <CounterApp value={initialValue} /> );
        fireEvent.click( screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        expect( screen.getByText(initialValue)).toBeTruthy();
     });

 })