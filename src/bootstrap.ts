import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "classinSpace",
    entry: "//localhost:3000/",
    container: "#container",
    activeRule: "/client/cloud/cs",
  },
]);

start({
  prefetch: false,
});

// 1. CSS 主应用子应用相互覆盖
