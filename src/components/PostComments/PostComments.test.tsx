import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComments', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários usando data-testid', () => {
        render(<PostComments />);

        const commentInput = screen.getByTestId('comment-input');
        const commentButton = screen.getByTestId('comment-button');

        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(commentButton);

        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(commentButton);

        const commentItems = screen.getAllByTestId('comment-item');

        expect(commentItems).toHaveLength(2);
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});