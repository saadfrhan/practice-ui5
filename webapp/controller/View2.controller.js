sap.ui.define(
  ["myapp/controller/BaseController", "sap/m/MessageBox", "sap/m/MessageToast"],
  function (BaseController, MessageBox, MessageToast) {
    return BaseController.extend("myapp.controller.View2", {
      router: null,
      onInit: function () {
        this.router = this.getOwnerComponent().getRouter();
        this.router
          .getRoute("detail")
          .attachMatched(this.bindActiveFruit, this);
      },
      bindActiveFruit: function (event) {
        const index = event.getParameter("arguments").fruitId;
        const path = "/fruits/" + index;
        const view2 = this.getView();
        view2.bindElement(path);
      },
      onBack: function () {
        this.getView().getParent().to("view1");
      },
      save: function () {
        // alert("")
        MessageBox.confirm("Do you want to save?", {
          onClose: function (status) {
            if (status === "OK") {
              MessageToast.show("The order has been created.");
            } else {
              MessageBox.error("Cancelled");
            }
          },
        });
      },
      onSupplier: function () {
        MessageBox.confirm("fudge");
      },
    });
  }
);
