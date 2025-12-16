$('#contactForm').submit(function(e){
    e.preventDefault();

    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();

    if (name.length < 3) {
        alert('Имя минимум 3 символа');
        return;
    }

    $.ajax({
        url: 'http://127.0.0.1',
        method: 'POST',
        data: { name, email, message },
        error: function () {
            alert('AJAX запрос отправлен');
        }
    });
});

$('#orderForm').submit(function(e){
    e.preventDefault();

    Swal.fire({
        title: 'Заказ создан',
        text: 'Имя: ' + $('#orderName').val()
    });
});

const reviews = [
    { name: 'Николай', text: 'Отлично' },
    { name: 'Сергей', text: 'Хорошо' },
    { name: 'Антон', text: 'Норм' }
];

reviews.forEach(r => {
    $('#reviews').append(`
        <div class="col-md-4 mb-3">
            <div class="card p-3">
                <b>${r.name}</b>
                <p>${r.text}</p>
            </div>
        </div>
    `);
});
