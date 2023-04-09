import styled from "styled-components";
export const HEADER_HEIGHT = "2em";
export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${HEADER_HEIGHT};
  padding: 0 1em;
  background: white;
  box-shadow: 0 0 5mm rgba(0, 0, 0, 0.5);
`;
