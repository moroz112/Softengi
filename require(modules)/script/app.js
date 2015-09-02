/**
 * Created by amoroz-prom on 01.09.15.
 */
require (
    ['myModule','jquery'],
    function(Module,$) {
        $('.button').on('click',Module.foo);
    }
);
