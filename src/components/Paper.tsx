import styled from "styled-components";

export const A4Paper = styled.div`
    width: 8.5in;
    height: 11in;
    padding: 4mm;
    background: white;
    font-size: 80%;
    box-shadow: 0 0 5mm rgba(0, 0, 0, 0.5);
    @media print {
        box-shadow: none;
        margin: 0;
    }
  position: relative;
  color: black;
`;
