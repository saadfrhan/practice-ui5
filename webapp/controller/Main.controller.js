sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "myapp/model/models",
    "sap/m/MessageToast",
  ],
  function (Controller, models, MessageToast) {
    return Controller.extend("myapp.controller.Main", {

      onInit() {
        try {
          this.core = sap.ui.getCore();
          const model = models.createJSONModel("model/mockdata/employees.json")

          this.core.setModel(model);

          this.getView().byId("table").bindRows("/employees");

        } catch (error) {
          MessageToast.show("Error initializing: " + error.message);
        }
      },

      onRowSelect(event) {
        const sPath = event.getParameter("rowContext").getPath();
        const simpleForm = this.getView().byId("update-form");
        simpleForm.bindElement(sPath);
      },

      onUpdate(id) {
        console.log("called");
        const _id = this.getView().byId("selected-id").getValue();
        const name = this.getView().byId("name").getValue();
        const _data = this.core.getModel().oData.employees;
        const data = this.core.getModel().oData.employees.filter(emp => emp.id === _id);

        if (data.length > 0) {
          data[0].name = name;
        }

        this.core.getModel().setProperty("/employees", _data);

        sap.m.MessageToast.show("Employee record has been updated.");
      },

      onAdd() {
        const name = this.getView().byId("add-name").getValue();
        const _data = this.core.getModel().oData.employees;
        const _id = Math.floor(Math.random() * 1000);

        _data.push({ id: _id, name });

        this.core.getModel().setProperty("/employees", _data);

        sap.m.MessageToast.show("Employee record has been added.");
      }
    });
  }
);
