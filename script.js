let autorised = false;

$(".header-button").click(function (event) {
    if (!autorised) {
        $('.welcome-user').toggleClass('hide');
        if (event.target.classList[1] === 'register') {
            $('.form-block-button').text('Register');
            $('.swap-form').text('Log In');
        }
        else {
            $('.form-block-button').text('Log In');
            $('.swap-form').text('Register');
        }
    }
});
$('.swap-form').click(function () {
    if ($('.swap-form').text() == 'Register') {
        $('.swap-form').text('Log In');
        $('.form-block-button').text('Register');
    }
    else {
        $('.swap-form').text('Register');
        $('.form-block-button').text('Log In');
    }
});

$('.form-block-button').click(function() {
    if ($('.input').val() != "") {
        user.login = $('.login-input').val();
        user.password = $('.password-input').val();
        alert(user.login + ' ' + user.password);
    }
})

var user = {
    login : "",
    password : ""
};

