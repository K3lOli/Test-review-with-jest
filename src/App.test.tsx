import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const sum = (a: number, b: number) => {
    return a + b
}
 
//teste de integração já que está testando o funcionamento do App de acordo com o componente Button

describe('App Component', () => {
    it('should sum correctly', () => {
        expect(sum(4, 4)).toBe(8);
    });

    it('should render App with hello message', () => {
        render(<App />);

        screen.getByText('Hello world!');
    });

    it('should change message on button click', () => {
        render(<App />)

        screen.getByText("Let's learn more about testing in React");

        const button = screen.getByText(/change message/i);

        fireEvent.click(button);

        screen.getByText(/outra mensagem/i);
        //Se a getByText não acha o elemento ela falha o teste
        //Se a queryByText não acha o elemento ela retorna null não falhando o teste
        const oldMessage = screen.queryByText("Let's learn more about testing in React")

        expect(oldMessage).not.toBeInTheDocument();

        expect(oldMessage).toBeNull();
    })
})

export default {};