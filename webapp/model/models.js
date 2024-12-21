sap.ui.define(
  [
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/xml/XMLModel",

    "sap/ui/model/resource/ResourceModel",
  ],
  function (JSONModel, XMLModel, ResourceModel) {
    return {
      createJSONModel: function (filePath) {
        const oModel = new JSONModel();
        oModel.loadData(filePath);
        return oModel;
      },
      createXMLModel: function () {
        const oModel = new XMLModel();
        oModel.loadData("model/mockdata/testdata.xml");
        return oModel;
      },
      createResourceModel: function () {
        const model = new ResourceModel({
          bundleUrl: "i18n/i18n.properties",
        });
        return model;
      },
    };
  }
);
