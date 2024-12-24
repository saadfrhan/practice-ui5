sap.ui.define(
  ["sap/ui/core/UIComponent"],
  function (UIComponent) {
    return UIComponent.extend("myapp.Component", {
      metadata: {
        manifest: "json"
      },
      init: function () {
        UIComponent.prototype.init.apply(this);
      },
      createContent: function () {

        const appView = new sap.ui.view({
          id: "app-view",
          viewName: "myapp.view.Main",
          type: "XML"
        });

        const appContainer = appView.byId("app-container");

        const view1 = new sap.ui.view({
          id: "view1",
          viewName: "myapp.view.View1",
          type: "XML"
        })

        const view2 = new sap.ui.view({
          id: "view2",
          viewName: "myapp.view.View2",
          type: "XML"
        });

        appContainer.addPage(view1).addPage(view2)

        return appView;

      },
      destroy: function () { }
    })
  }
)
