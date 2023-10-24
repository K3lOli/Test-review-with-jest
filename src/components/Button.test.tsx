import { render, screen } from '@testing-library/react'
import Button from './Button'
import { fireEvent } from '@testing-library/react';

describe('Button Component', () => {
    it('should render with red background when disabled', () => {
        render(<Button onClick={() => {}} disabled={false}>Click me</Button>);

        const button = screen.getByRole('button', { name: /click me/i });

        expect(button).toHaveStyle({ backgroundColor: 'blue ' });
    });

    it('should call onclick function when clicked', () => {
        //jest.fn é uma função monitorável pelo jest
        const onClick = jest.fn();
        render(<Button onClick={onClick} disabled>Click me</Button>);

        const button = screen.getByRole('button', { name: /click me/i });

        fireEvent.click(button);

        // expect(onClick).toHaveBeenCalled();
        expect(onClick).toHaveBeenCalledWith(10);
    });
});