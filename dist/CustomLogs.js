"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogs = exports.Colours = void 0;
var Colours;
(function (Colours) {
    Colours["RED"] = "#ff1100";
    Colours["BLUE"] = "#0000ff";
})(Colours || (exports.Colours = Colours = {}));
class CustomLogs {
    StandOutLog(value) {
        console.log("%c" + value, "background: #222; color: #bada55");
    }
    ColouredLog(value, colour) {
        const decorators = "color: " + colour;
        console.log("%c" + value, decorators);
    }
}
exports.CustomLogs = CustomLogs;
//# sourceMappingURL=CustomLogs.js.map