import { Callout } from "./Layout";
import styled from "styled-components";

export const WarningBox = styled(Callout)`
  background: linear-gradient(45deg, rgb(87, 20, 20) 0%, rgb(0, 0, 0) 100%);
  color: white;
  display: flex;

  &:before {
    content: "‼️";
    font-size: 1.5em;
    margin-right: 0.5em;
    display: inline-block;
  }
`;

export const InfoBox = styled(Callout)`
  background: rgb(255, 253, 251);
  display: flex;

  &:before {
    content: "💡";
    font-size: 1.5em;
    margin-right: 0.5em;
    display: inline-block;
  }
`;

export const MetaBox = styled(Callout)`
  background: rgb(253, 244, 249);
  display: flex;

  &:before {
    content: "📝";
    font-size: 1.5em;
    margin-right: 0.5em;
    display: inline-block;
  }
`;
