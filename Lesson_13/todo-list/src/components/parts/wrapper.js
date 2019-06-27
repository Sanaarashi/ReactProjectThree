import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
    position: absolute;
    width: 650px;
    height: 300px;

    background: rgba(255, 255, 255, 0.67);
    border-radius: 8px;
    top: 20%;
    left: 30%;
`;

const Wrapper = () => {
    return (
        <Block>
        </Block>
    )
}

export default Wrapper;