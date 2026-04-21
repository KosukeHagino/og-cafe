'use strict';

$(document).ready(function(){
    $('#js-hamburger').on('click', function(){
        $('#js-hamburger, #js-header-nav').toggleClass('is-active');
    });
});
