sap.ui.define(
    [
      "myapp/controller/BaseController"
    ],
    function (BaseController) {
      return BaseController.extend("myapp.controller.View1", {
        onNext: function() {
          const view = this.getView();
          const appContainer = view.getParent();
          appContainer.to("view2")
        }
      });
    }
  );
  