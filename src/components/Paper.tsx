import styled from "styled-components";

export const A4Paper = styled.div`
  width: 8.5in;
  height: 11in;
  padding: 4mm;
  background: white;
  font-size: 12.8px;
  box-shadow: 0 0 5mm rgba(0, 0, 0, 0.5);
  @media print {
    box-shadow: none;
    margin: 0;
    display: block;
  }
  position: relative;
  color: black;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
  display: block;
  margin: 0 auto;
  object-fit: contain;
`;
