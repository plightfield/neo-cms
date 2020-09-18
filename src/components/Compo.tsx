import React from "react";
import { Template } from "src/templates";
import { LayoutOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 130px;
  cursor: pointer;
  user-select: none;
  margin: 0.4em;
  transition: background-color 0.4s;
  &:hover {
    background-color: rgb(217, 223, 224);
  }
  img {
    width: 100%;
  }
  p {
    text-align: center;
    margin: 0;
  }
`;

/**
 * compo use to drag
 *
 * @param {{ template: Template }} props
 * @returns
 */
function Compo(props: { template?: Template }) {
  console.log(props.template);
  return (
    <Wrapper draggable>
      {props.template ? (
        <>
          <img src={props.template.configuration.image} alt='compo' />
          <p>{props.template.configuration.name}</p>
        </>
      ) : (
        <>
          <LayoutOutlined style={{ fontSize: "40px" }} />
          <p>新增布局</p>
        </>
      )}
    </Wrapper>
  );
}

export default Compo;
