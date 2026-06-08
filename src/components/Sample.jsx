import styled from "styled-components";

const Button = styled.div`
    color: ${props=> props.dark ? 'white' : 'black'};
    background: ${props=> props.dark ? 'black' : 'white'};
    border: 1px solid black;
    width: 200px;
`;

export default function Sample(props) {
    return (
        <div>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
        </div>
    )
}