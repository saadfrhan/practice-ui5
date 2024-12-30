sap.ui.define([], function() {
    return {
        getStatus: function(status) {
            switch (status) {
                case 'A':
                    return 'Available';
                case 'D':
                    return "Discontinued";
                case 'O':
                    return 'Out of Stock';
                default:
                    break;
            }
        },
        getStatusText: function(status) {
            switch (status) {
                case 'A':
                    return 'Success';
                case 'D':
                    return "Error";
                case 'O':
                    return 'Warning';
                default:
                    break;
            }
        }
    }
})