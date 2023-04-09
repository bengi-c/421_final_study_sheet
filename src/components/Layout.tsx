import styled from "styled-components";
import {HEADER_HEIGHT} from "./PageHeader";

export const PageColumns = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 2mm;
margin-top: ${HEADER_HEIGHT};
`;


export const TwoColumn = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 2mm;`;

export const PageSection = styled.section`
margin-bottom: 2em;
`;

export const LeftRight = styled.div`
display: flex;
justify-content: space-between;
`;

export const CompactCard = styled.div`
padding: 1mm;
margin: 0;
background: white;
box-shadow: 0 0 1mm rgba(0, 0, 0, 0.5);
  line-height: 0.9;
  font-size: 65%;
  font-weight: 500;
  min-height: 10px;
  max-height: 25px;
  height: min-content;
  
  & > code {
    margin: 0;
  }
  
`;
