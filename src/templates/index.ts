import { Rule } from "antd/lib/form";

const modules = (require as any).context(".", false);
const templates: { name: string; content: string }[] = [];
const configurations: { name: string; content: any }[] = [];

/**
 * configuration that template will obtain
 *
 * @export
 * @interface Configuration
 */
export interface Configuration {
  // maybe chinese
  name: string;
  // how this component work
  description: string;
  // thumbnail image
  image: string;
  variables: {
    label: string;
    name: string;
    element: any;
    elementProps?: { [key: string]: any };
    initialValue?: any;
    trigger?: string;
    valuePropName?: string;
    rules?: Rule[];
    // how this form item work
    description?: string;
  }[];
}

export interface Template {
  name: string;
  style: string;
  content: string;
  script: string;
  configuration: Configuration;
}

modules.keys().forEach((key: string) => {
  if (/\.ejs$/.test(key)) {
    templates.push({
      name: key.match(/(?<=\/).*(?=\.ejs)/)?.[0] || "",
      content: modules(key).default,
    });
  }
  if (/\.ts$/.test(key) && key !== "./index.ts") {
    configurations.push({
      name: key.match(/(?<=\/).*(?=\.ts)/)?.[0] || "",
      content: modules(key).default,
    });
  }
});

const result: Template[] = [];

for (let item of templates) {
  if (!configurations.find((el) => el.name === item.name)) {
    throw new Error(`${item.name} shold config a same name ts file`);
  }
  const style =
    item.content.match(/(?<=<style>)[\d\D]+(?=<\/style>)/g)?.join("\n") || "";
  const content =
    item.content.match(/(?<=<body>)[\d\D]+(?=<\/body>)/g)?.join("\n") || "";
  const script =
    item.content.match(/(?<=<script>)[\d\D]+(?=<\/script>)/g)?.join(";") || "";
  result.push({
    name: item.name,
    style,
    content,
    script,
    configuration:
      configurations.find((el) => el.name === item.name)?.content || {},
  });
}

export default result;
