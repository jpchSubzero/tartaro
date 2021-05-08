"use strict";
(function () {
    function activar(arg1, arg2, arg3) {
        if (arg3 === void 0) { arg3 = 'argumento opcional defecto'; }
        if (arg2) {
            console.log(arg1 + " " + arg2 + " " + arg3);
        }
        else {
            console.log(arg1 + " " + arg3);
        }
    }
    activar('argumento obligatorio');
})();
