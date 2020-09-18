import React from "react";
import useDash, { DashContext } from "./DashProvider";
import DashHeader from "src/components/DashHeader";
import { Card, Col, Row } from "antd";
import CompoTemplate from "src/components/CompoTemplate";

function Dash() {
  const dashData = useDash();
  return (
    <DashContext.Provider value={dashData}>
      <DashHeader />
      <Row gutter={16}>
        <Col span={5}>
          <CompoTemplate />
        </Col>
        <Col span={14}>
          <Card />
        </Col>
        <Col span={5}>
          <Card title='组件配置' />
        </Col>
      </Row>
    </DashContext.Provider>
  );
}

export default Dash;
