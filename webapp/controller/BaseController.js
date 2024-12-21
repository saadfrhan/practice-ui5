sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    (Controller) => {
        return Controller.extend(
            "donald.controller.BaseController", {
                x: 3.14,
                logger: function(log) {
                    alert(log ?? "logger" + this.x)
                }
            }
        )
    }
)