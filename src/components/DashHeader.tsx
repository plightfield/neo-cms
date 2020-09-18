import {
  CarOutlined,
  LaptopOutlined,
  MobileOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import { Button, PageHeader, Radio, Space } from "antd";
import React, { useContext } from "react";
import { DashContext } from "src/pages/DashProvider";
import styled from "styled-components";

const Header = styled(PageHeader)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: white;
  padding: 0.2em 1em;
  user-select: none;
`;

function DashHeader() {
  const { currentPlatform, setCurrentPlatform } = useContext(DashContext);

  return (
    <div style={{ height: "60px" }}>
      <Header
        style={{ backgroundColor: "white", padding: ".2em 1em" }}
        title='配置中心'
        onBack={() => {
          console.log(123);
        }}
        extra={
          <Space>
            <Radio.Group
              value={currentPlatform}
              onChange={(e) => {
                setCurrentPlatform(e.target.value);
              }}
            >
              <Radio.Button value='pc'>
                <LaptopOutlined /> 电脑端
              </Radio.Button>
              <Radio.Button value='tablet'>
                <TabletOutlined /> 平板端
              </Radio.Button>
              <Radio.Button value='mobile'>
                <MobileOutlined /> 手机端
              </Radio.Button>
            </Radio.Group>
            <Button type='primary' icon={<CarOutlined />}>
              预览
            </Button>
          </Space>
        }
      />
    </div>
  );
}

export default DashHeader;
