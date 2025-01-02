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
        },
        gridSpan: function (sId) {
            // Assuming the sId is the id of the card
            switch (sId) {
                case "card1":
                    return "L6 M6 S12"; // Spans 2 columns on large and medium screens, full width on small screens
                case "card2":
                case "card3":
                    return "L3 M3 S12"; // Spans 1 column on large and medium screens, full width on small screens
                default:
                    return "L6 M6 S12"; // Default span
            }
        },
        replaceUnderscoreWithSpace: function (text) {
            return text.replaceAll("_", " ")
        }
    }
})