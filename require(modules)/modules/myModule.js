/**
 * Created by amoroz-prom on 01.09.15.
 */
define (
    'myModule',
    ['jquery'],
    function($) {
        return {
            foo: function() {
                console.log('It works');
            }
        }
    }
);
