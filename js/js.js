$('#view-flasker').on('click', function() {
    const flasker = $('#flasker').position().top;

    $('html, body').animate(
        {
            scrollTop: flasker
        },
        900
    );
});
