import { Button, Card, Form, Input } from "antd";
import React from "react";
import CardContainer from "src/components/CardContainer";
import { LoginOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.4em;
  letter-spacing: 0.1em;
  margin: 0;
`;

function Login() {
  const history = useHistory();
  return (
    <CardContainer>
      <Card title={<Title>内容管理系统 - 登录验证</Title>}>
        <Form layout='vertical'>
          <Form.Item label='用户名' name='username'>
            <Input placeholder='请输入用户名' />
          </Form.Item>
          <Form.Item label='密码' name='password'>
            <Input placeholder='请输入密码' type='password' />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              icon={<LoginOutlined />}
              onClick={() => {
                history.push("/dash");
              }}
              block
            >
              现在登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </CardContainer>
  );
}

export default Login;
