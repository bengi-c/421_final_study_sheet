import {Callout} from "./Layout";
import styled from "styled-components";

export const WarningBox = styled(Callout)`
  background: rgba(255, 221, 221, 0.3);
  display: flex;

  &:before {
    content: "‼️";
    font-size: 1.5em;
    margin-right: 0.5em;
    display: inline-block;
  }
`

export const InfoBox = styled(Callout)`
  background: rgb(255, 253, 251);
  display: flex;

  &:before {
    content: "💡";
    font-size: 1.5em;
    margin-right: 0.5em;
    display: inline-block;
  }
`
