import React from 'react';

import styled from 'styled-components';

const BasicFlex = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const BasicFlexItem = styled.div`
  margin-right: 10px
`

function BFlex(props) {
    return (
        <BasicFlex>
            {props.children.map((flexItem) => {
                return (<BasicFlexItem>{flexItem}</BasicFlexItem>)
            })}
        </BasicFlex>
    );
}

export default BFlex;