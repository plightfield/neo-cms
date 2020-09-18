const modules = (require as any).context(".", false);
const templates: { name: string; content: string }[] = [];
const variables: { name: string; content: any }[] = [];
modules.keys().forEach((key: string) => {
  if (/\.ejs$/.test(key)) {
    templates.push({
      name: key.match(/(?<=\/).*(?=\.ejs)/)?.[0] || "",
      content: modules(key).default,
    });
  }
  if (/\.ts$/.test(key) && key !== "./index.ts") {
    variables.push({
      name: key.match(/(?<=\/).*(?=\.ts)/)?.[0] || "",
      content: modules(key).default,
    });
  }
});

const result: {
  name: string;
  style: string;
  content: string;
  script: string;
  variables: string;
}[] = [];

for (let item of templates) {
  if (!variables.find((el) => el.name === item.name)) {
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
    variables: variables.find((el) => el.name === item.name)?.content || {},
  });
}
console.log(result);

export default result;
