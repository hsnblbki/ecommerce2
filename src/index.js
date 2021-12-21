import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import '@fortawesome/fontawesome-free/js/all.min.js';


$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $(".add-to-card-btn").click(function(){
        alert('أضف المنتج الى عربة الشراء');
    });
  });