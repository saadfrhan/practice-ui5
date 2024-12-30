sap.ui.define(
  ["sap/ui/core/UIComponent"],
  function (UIComponent) {
    return UIComponent.extend("myapp.Component", {
      metadata: {
        manifest: "json"
      },
      init: function () {
        UIComponent.prototype.init.apply(this);

        const router = this.getRouter();
        router.initialize();
      },
      destroy: function () {}
    });
  }
);

// createContent: function () {

//   const appView = new sap.ui.view({
//     id: "app-view",
//     viewName: "myapp.view.Main",
//     type: "XML"
//   });

//   const appContainer = appView.byId("app-container");

//   const view1 = new sap.ui.view({
//     id: "view1",
//     viewName: "myapp.view.View1",
//     type: "XML"
//   })

//   const view2 = new sap.ui.view({
//     id: "view2",
//     viewName: "myapp.view.View2",
//     type: "XML"
//   });

//   const empty = new sap.ui.view({
//     id: "empty",
//     viewName: "myapp.view.Empty",
//     type: "XML"
//   });


//   appContainer.addMasterPage(view1).addDetailPage(empty).addDetailPage(view2)

//   return appView;

// },