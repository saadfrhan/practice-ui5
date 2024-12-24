sap.ui.define(
    [
      "myapp/controller/BaseController",
      "sap/m/MessageBox",
      "sap/m/MessageToast"
    ],
    function (BaseController, MessageBox, MessageToast) {
      return BaseController.extend("myapp.controller.View2", {
        onBack: function() {
          this.getView().getParent().to("view1")
        },
        save: function() {
          // alert("")
          MessageBox.confirm("Do you want to save?", {
            onClose: function(status) {
              if (status === "OK") {
                MessageToast.show("The order has been created.")
              } else {
                MessageBox.error("Cancelled")
              }
            }
          })
        }      });
    }
  );
  