sap.ui.define(
  [
    "myapp/controller/BaseController"
  ],
  function (BaseController) {
    return BaseController.extend("myapp.controller.Main", {
      onInit() {
        alert("Bazinga!");
      },
    });
  }
);
