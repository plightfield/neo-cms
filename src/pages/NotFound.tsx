import React from "react";
import CardContainer from "src/components/CardContainer";
import { Button, Card, Result } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();
  return (
    <CardContainer>
      <Card>
        <Result
          status='404'
          title='页面未找到'
          subTitle='当前页面不存在，请退回其他页面再试'
          extra={
            <Button
              type='primary'
              icon={<HomeOutlined />}
              onClick={() => {
                history.push("/dash");
              }}
              block
            >
              返回首页
            </Button>
          }
        ></Result>
      </Card>
    </CardContainer>
  );
}

export default NotFound;
