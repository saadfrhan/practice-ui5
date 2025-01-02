sap.ui.define(
  [
    "myapp/controller/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "myapp/util/formatter",
    	"sap/m/MessageBox",
  ],
  function (BaseController, Filter, FilterOperator, formatter, MessageBox) {
    return BaseController.extend("myapp.controller.View1", {
      formatter,
      onInit: function() {
        this.router = this.getOwnerComponent().getRouter()
      },
      router: null,

      onNext: function (path) {
        const index = path.split("/")[path.split("/").length - 1];
        this.router.navTo("detail", {
          fruitId: index
        })
        // const view = this.getView();
        // const appContainer = view.getParent().getParent();
        // appContainer.to("view2");

      },
      onPressPostProduction: function () {
        MessageBox.confirm("Are you sure you want to save this production order?", {
          actions: ["Save", MessageBox.Action.CLOSE],
          emphasizedAction: "Save",
          title: "Production Order Save Confirmation",
          onClose: (action) => {
            if (action === "Save") {
              Swal.fire({
                title: "Production Order Saved Successfully!",
                icon: "success"
              });
            }
          }
        });

      },
      onPressCreateBatch: function () {
        MessageBox.confirm("Are you sure you want to create new batch?", {
          actions: ["Yes", MessageBox.Action.CLOSE],
          emphasizedAction: "Yes",
          title: "Create New Batch",
          onClose: (action) => {
            if (action === "Yes") {
              Swal.fire({
                title: "New Batch Created Successfully!",
                icon: "success"
              });
            }
          }
        });

      },
      onItemPress: function (e) {
        const listItem = e.getParameter("listItem");
        const path = listItem.getBindingContextPath();
        // const view2 = this.getView()
        //   .getParent()
        //   .getParent()
        //   .getDetailPage("view2");
        // view2.bindElement(path);
        this.onNext(path);
      },
      onSearch: function (e) {
        const value = e.getParameter("query");

        const filter = new Filter({
          filters: [
            new Filter("name", FilterOperator.Contains, value),
            new Filter("taste", FilterOperator.Contains, value),
          ],
          and: true,
        });

        const list = this.getView().byId("list");
        const items = list.getBinding("items");
        items.filter(filter);
      },
      onDeleteItem: function(e) {
        const itemToDel = e.getParameter("listItem");
        const list = e.getSource();
        list.removeItem(itemToDel);
      },
      onMultiDelete: function() {
        const list = this.getView().byId("list");
        const selectedItems = list.getSelectedItems();
        selectedItems.forEach(item => list.removeItem(item
        ));
      }
    });
  }
);
