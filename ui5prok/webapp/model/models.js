sap.ui.define(
  [
    "sap/ui/model/json/JSONModel",
  ],
  function (JSONModel) {
    return {
      createJSONModel: function (filePath) {
        const oModel = new JSONModel();
        oModel.loadData(filePath);
        return oModel;
      },
    };
  }
);
