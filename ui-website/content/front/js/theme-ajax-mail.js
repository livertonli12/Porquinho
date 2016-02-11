// Contact Form
// ---------------------------------------------------------------------------------------
$(function () {
    var $form = $('#contact-form');
    $form.find('.form-control').tooltip({trigger: 'manual'}).tooltip('hide');
    $form.find('.form-control').on('blur', function(){
        $(this).tooltip({trigger: 'manual'}).tooltip('hide');
    });

    // validate and process form
    $form.find('.submit-button').on('click', function () {

        // Your Name
        var your_name = $form.find('.input-your-name').val();
        if (your_name == '' || your_name == 'Your Name') {
            $form.find('.input-your-name').tooltip({trigger: 'manual'}).tooltip('show');
            $form.find('.input-your-name').focus();
            return false;
        }

        // Email address
        var email = $form.find('.input-email').val();
        //var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
        //console.log(filter.test(email));
        if (!filter.test(email)) {
            $form.find('.input-email').tooltip({trigger: 'manual'}).tooltip('show');
            $form.find('.input-email').focus();
            return false;
        }

        // Your Message
        var message = $form.find('.input-message').val();
        if (message == '' || message == 'Your Message') {
            $form.find('.input-message').tooltip({trigger: 'manual'}).tooltip('show');
            $form.find('.input-message').focus();
            return false;
        }

        var dataString = 'your_name=' + your_name + '&email=' + email + '&message=' + message;
        //console.log(dataString); return false;

        $.ajax({
            type: 'POST',
            url: 'assets/php/contact-form.php',
            data: dataString,
            success: function () {
                $form.find('.form-alert').append('' +
                    '<div class=\"alert alert-success contact-form-alert fade in\">' +
                    '<button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button>' +
                    '<strong>Contact Form Submitted!</strong> We will be in touch soon.' +
                    '</div>' +
                    '');
                $form[0].reset();
                $form.find('.form-control').focus().blur();
            }
        });
        return false;
    });
});



// Subscribe Form
// ---------------------------------------------------------------------------------------
$(function () {
    var $form = $('#subscribe-form');
    $form.find('.form-control').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    $form.find('.form-control').on('blur', function(){
        $(this).tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    });

    // validate and process form
    $form.find('.submit-button').on('click', function () {

        // Email address
        var email = $form.find('.input-email').val();
        //var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
        //console.log(filter.test(email));
        if (!filter.test(email)) {
            $form.find('.input-email').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-email').focus();
            return false;
        }

        var dataString = 'email=' + email;
        //console.log(dataString); return false;

        $.ajax({
            type: 'POST',
            url: 'assets/php/subscribe-form.php',
            data: dataString,
            success: function () {
                $form.find('.form-alert').append('' +
                    '<div class=\"alert alert-success subscribe-form-alert fade in\">' +
                    '<button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button>' +
                    '<strong>Subscribe Form Submitted!</strong> We will be in touch soon.' +
                    '</div>' +
                    '');
                $form[0].reset();
                $form.find('.form-control').focus().blur();
            }
        });
        return false;
    });
});



// Registration Form
// ---------------------------------------------------------------------------------------
$(function () {
    var $form = $('#registration-form');
    $form.find('.form-control').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    $form.find('.form-control').on('blur', function(){
        $(this).tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    });

    // validate and process form
    $form.find('.submit-button').on('click', function () {

        // Your Name
        var name = $form.find('.input-name').val();
        if (name == '' || name == 'Your Name') {
            $form.find('.input-name').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-name').focus();
            return false;
        }

        // Email address
        var email = $form.find('.input-email').val();
        //var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
        //console.log(filter.test(email));
        if (!filter.test(email)) {
            $form.find('.input-email').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-email').focus();
            return false;
        }

        // Company name
        var company = $form.find('.input-company').val();
        if (company == 'Your Company Name') {
            company = '';
        }

        var dataString = 'name=' + name + '&email=' + email + '&company=' + company;
        //console.log(dataString); return false;

        $.ajax({
            type: 'POST',
            url: 'assets/php/registration-form.php',
            data: dataString,
            success: function () {
                $form.find('.form-alert').append('' +
                    '<div class=\"alert alert-success registration-form-alert fade in\">' +
                    '<button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button>' +
                    '<strong>Registration Form Submitted!</strong> We will be in touch soon.' +
                    '</div>' +
                    '');
                $form[0].reset();
                $form.find('.form-control').focus().blur();
            }
        });
        return false;
    });
});



// Registration Form Alt
// ---------------------------------------------------------------------------------------
$(function () {
    var $form = $('#registration-form-alt');
    $form.find('.form-control').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    $form.find('.form-control').on('blur', function(){
        $(this).tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    });

    // validate and process form
    $form.find('.submit-button').on('click', function () {

        // Your Name
        var name = $form.find('.input-name').val();
        if (name == '' || name == 'Your Name') {
            $form.find('.input-name').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-name').focus();
            return false;
        }

        // Email address
        var email = $form.find('.input-email').val();
        //var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
        //console.log(filter.test(email));
        if (!filter.test(email)) {
            $form.find('.input-email').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-email').focus();
            return false;
        }

        // Company name
        var company = $form.find('.input-company').val();
        if (company == 'Your Company Name') {
            company = '';
        }

        var dataString = 'name=' + name + '&email=' + email + '&company=' + company;
        //console.log(dataString); return false;

        $.ajax({
            type: 'POST',
            url: 'assets/php/registration-form.php',
            data: dataString,
            success: function () {
                $form.find('.form-alert').append('' +
                    '<div class=\"alert alert-success registration-form-alert fade in\">' +
                    '<button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button>' +
                    '<strong>Registration Form Submitted!</strong> We will be in touch soon.' +
                    '</div>' +
                    '');
                $form[0].reset();
                $form.find('.form-control').focus().blur();
            }
        });
        return false;
    });
});



// Registration Form Mobile
// ---------------------------------------------------------------------------------------
$(function () {
    var $form = $('#registration-form-mobile');
    $form.find('.form-control').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    $form.find('.form-control').on('blur', function(){
        $(this).tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    });

    // validate and process form
    $form.find('.submit-button').on('click', function () {

        // Your Name
        var name = $form.find('.input-name').val();
        if (name == '' || name == 'Your Name') {
            $form.find('.input-name').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-name').focus();
            return false;
        }

        // Email address
        var email = $form.find('.input-email').val();
        //var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
        //console.log(filter.test(email));
        if (!filter.test(email)) {
            $form.find('.input-email').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-email').focus();
            return false;
        }

        // Company name
        var company = $form.find('.input-company').val();
        if (company == 'Your Company Name') {
            company = '';
        }

        var dataString = 'name=' + name + '&email=' + email + '&company=' + company;
        //console.log(dataString); return false;

        $.ajax({
            type: 'POST',
            url: 'assets/php/registration-form.php',
            data: dataString,
            success: function () {
                $form.find('.form-alert').append('' +
                    '<div class=\"alert alert-success registration-form-alert fade in\">' +
                    '<button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button>' +
                    '<strong>Registration Form Submitted!</strong> We will be in touch soon.' +
                    '</div>' +
                    '');
                $form[0].reset();
                $form.find('.form-control').focus().blur();
            }
        });
        return false;
    });
});