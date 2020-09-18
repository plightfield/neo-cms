import { Col, Row } from "antd";
import React from "react";
import { Template } from "src/templates";

export interface RowContainerProps {
  items: Template[];
  height?: number;
}

function ColContent(props: { content: Template }) {
  return <div>this is content</div>;
}

function RowContainer(props: RowContainerProps) {
  return (
    <Row>
      {props.items.map((item, key) => (
        <Col key={key}>
          <ColContent content={item} />
        </Col>
      ))}
    </Row>
  );
}

export default RowContainer;
