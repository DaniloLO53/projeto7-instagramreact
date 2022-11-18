import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Tests do componente Usuario, responsável pela barra de topo do componente SideBar e onde ocorre a edição das informações do usuário.', () => {
  it('Será validado se exite a div para colocar o nome do usuário', () => {
    render(<App />);
    const user = screen.getByTestId('user');
    expect(user).toBeInTheDocument();
  });
});
