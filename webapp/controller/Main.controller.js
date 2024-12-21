sap.ui.define(
  ["donald/controller/BaseController", "donald/model/models", "sap/m/MessageToast"],
  function (Controller, models, MessageToast) {
    "use strict";

    /**
     * @namespace donald.controller.Main
     */
    return Controller.extend("donald.controller.Main", {
      // Constants
      SALARY_THRESHOLD: 10000,
      MULTIPLIER: 1.5,

      /* =========================================================== */
      /* lifecycle methods                                           */
      /* =========================================================== */

      onInit() {
        try {
          this.oCore = sap.ui.getCore();
          const [oModel, oModel2] = [
            models.createJSONModel("model/mockdata/sample.json"),
            models.createJSONModel("model/mockdata/mydata.json"),
          ];
          const oModel3 = models.createXMLModel();
          const resourceModel = models.createResourceModel();

          this.oCore.setModel(resourceModel, "i18n")

          this.oCore.setModel(oModel3);
          this.oCore.setModel(oModel2, "model2");
          this.oCore.setModel(oModel, "model3");

          this.getView().byId("idTable").bindRows("/empTab/rows")

          this._bindElements();
        } catch (error) {
          MessageToast.show("Error initializing: " + error.message);
        }
      },

      onBeforeRendering() {
        const sSal = this.oCore.getModel().getProperty("/empStr/salary");
        this.getView()
          .byId("idSal")
          .setEnabled(sSal <= this.SALARY_THRESHOLD);
      },

      /* =========================================================== */
      /* event handlers                                              */
      /* =========================================================== */

      onClickMe() {
        const oInput = this.oCore.byId("idMyInput");
        if (oInput) {
          MessageToast.show(oInput.getValue());
        }
      },

      onRunMyCode() {
        this.getView().byId("idNewInput")?.setValue("Maza aavigiyo!");
      },

      onChangeData() {
        try {
          const oModel = this.oCore.getModel();
          oModel.setProperty("/empStr", {
            empId: "1000022",
            empName: "Vanshika",
            salary: 850000 * this.MULTIPLIER,
            currency: "JPY",
            smoker: false,
          });
        } catch (error) {
          MessageToast.show("Error updating data: " + error.message);
        }
      },

      xmlModel: true,

      onFlipFlop() {
        try {
          const [oModel, oModel2] = [
            this.oCore.getModel(),
            this.oCore.getModel("model2"),
          ];

          this.oCore.setModel(oModel2);
          this.oCore.setModel(oModel, "model2");

          if (this.xmlModel === true) {
            this.getView().byId("idTable").bindRows("/empTab")
            this.xmlModel = false;
          } else {
            this.getView().byId("idTable").bindRows("/empTab/rows")
            this.xmlModel = true;
          }
        } catch (error) {
          MessageToast.show("Error swapping models: " + error.message);
        }
      },

      onRowSelect(event) {
        const sPath = event.getParameter("rowContext").getPath();
        const simpleForm = this.getView().byId("idSimpleForm");
        simpleForm.bindElement(sPath);

        this.logger();
      },

      /* =========================================================== */
      /* private methods                                             */
      /* =========================================================== */

      _bindElements() {
        // const oView = this.getView();
        // oView.byId("idSal").bindValue('/empStr/salary');
        // oView.byId("idCurr").bindProperty("value", "/empStr/currency");
        // oView.byId("idSmoker").bindProperty("state", "/empStr/smoker");

        // const oTable = this.getView().byId("idTable");
        // oTable.bindRows('/empTab');
        // oTable.bindAggregation('rows', '/empTab')
      },
    });
  }
);
