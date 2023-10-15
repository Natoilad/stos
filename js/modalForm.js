$(document).ready(function () {
  $('#first_modal').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: './sender.php',
      data: $(this).serialize(),
      success: function (response) {
        let notification = $(
          '<div class="notification"><p>Форма успішно відправлена!</p></div>'
        );
        $('body').append(notification);
        setTimeout(() => {
          notification.fadeOut(1000, function () {
            $(this).remove();
            $('[data-modal]').addClass('is-hidden');
          });
        }, 3000);
        $('#first_modal')[0].reset();
      },
      error: function (error) {
        alert('Помилка при відправці форми. Спробуйте ще раз.');
      },
    });
  });
});
