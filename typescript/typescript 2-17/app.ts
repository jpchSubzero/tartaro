(function(){
    function activar(
        arg1: string, 
        arg2?: string,
        arg3: string = 'argumento opcional defecto'
    ) {
        if (arg2) {
            console.log(`${arg1} ${arg2} ${arg3}`);            
        } else {
            console.log(`${arg1} ${arg3}`);
        }
    }
    activar('argumento obligatorio');
})();