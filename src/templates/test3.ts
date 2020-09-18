import { Input } from "antd";
import { Configuration } from ".";
import image from "src/assets/test.jpg";

const config: Configuration = {
  name: "测试表单3",
  description: "仅仅是用来测试",
  image,
  variables: [
    {
      label: "测试",
      name: "test",
      element: Input,
      elementProps: {},
      initialValue: "",
      trigger: "onChange",
      valuePropName: "value",
      description: "测试输入框",
    },
  ],
};

export default config;
