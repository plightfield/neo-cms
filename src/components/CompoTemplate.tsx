import { Tabs } from "antd";
import React, { useContext } from "react";
import { DashContext } from "src/pages/DashProvider";
import styled from "styled-components";
import Compo from "./Compo";

const Wrapper = styled.div`
  background-color: white;
`;

const ContentSpace = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

function CompoTemplate() {
  const dashData = useContext(DashContext);
  return (
    <Wrapper>
      <Tabs defaultActiveKey='0'>
        <Tabs.TabPane tab='组件' key='0'>
          <ContentSpace>
            <Compo />
            {dashData.templates.map((el, key) => (
              <Compo key={key} template={el} />
            ))}
          </ContentSpace>
        </Tabs.TabPane>
        <Tabs.TabPane tab='模板' key='1'></Tabs.TabPane>
      </Tabs>
    </Wrapper>
  );
}

export default CompoTemplate;
