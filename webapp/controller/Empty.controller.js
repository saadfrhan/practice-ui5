sap.ui.define(
    ["myapp/controller/BaseController", "sap/m/MessageBox", "sap/m/MessageToast"],
    function (BaseController, MessageBox, MessageToast) {
      return BaseController.extend("myapp.controller.View2", {
        onBack: function () {
          this.getView().getParent().to("view1");
        }
      });
    }
  );
  