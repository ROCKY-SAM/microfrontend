import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import(""),
  activeWhen: ["/"],
}); //https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js

registerApplication({
  name: "@sameeraTwo/navigation",
  app: () => System.import("@sameeraTwo/navigation"),
  activeWhen: ["/"],
});
registerApplication({
  name: "@sameeraTwo/appOne",
  app: () => System.import("@sameeraTwo/appOne"),
  activeWhen: ["/appOne"],
});
registerApplication({
  name: "@sameeraTwo/appTwo",
  app: () => System.import("@sameeraTwo/appTwo"),
  activeWhen: ["/appTwo"],
});
registerApplication({
  name: "@sameeraTwo/appThree",
  app: () => System.import("@sameeraTwo/appThree"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
