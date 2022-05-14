import React from 'react';

class Botao extends React.Component {
    render() {
        const backgroundColor = 'orange';
        return (
            <button style={{
                backgroundColor
            }}>
                Botão
            </button>
        )
    }
}

export default Botao;