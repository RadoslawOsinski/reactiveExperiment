$(document).ready(function () {

    $('#quickMessageSync').click(function () {
        console.log('quickMessage clicked!');
        $.ajax({
            type: 'GET',
            async: false,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            url: 'http://localhost:8080/quickMessage',
            data: '',
            success: function (response) {
                console.log('Quick message sync success: ' + response.text);
            },
            error: function (xhr) {
                console.log('Quick message sync error: ' + xhr);
            },
            complete: function (xhr) {
                console.log('Quick message sync complete: ' + xhr.responseText);
            }
        });
    });

    $('#quickMessageAsync').click(function () {
        console.log('quickMessage clicked!');
        $.ajax({
            type: 'GET',
            async: true,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            url: 'http://localhost:8080/quickMessage',
            data: '',
            success: function (response) {
                console.log('quickMessageAsync success: ' + response.text);
            },
            error: function (xhr) {
                console.log('quickMessageAsync error: ' + xhr);
            },
            complete: function (xhr) {
                console.log('quickMessageAsync complete: ' + xhr.responseText);
            }
        });
    });

    $('#getAsyncMessageObservableBlockingSync').click(function () {
        console.log('getAsyncMessageObservableBlockingSync clicked!');
        $.ajax({
            type: 'GET',
            async: false,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            url: 'http://localhost:8080/getAsyncMessageObservableBlocking',
            data: '',
            success: function (response) {
                console.log('getAsyncMessageObservableBlockingSync success: ' + response.text);
            },
            error: function (xhr) {
                console.log('getAsyncMessageObservableBlockingSync error: ' + xhr);
            },
            complete: function (xhr) {
                console.log('getAsyncMessageObservableBlockingSync complete: ' + xhr.responseText);
            }
        });
    });

    $('#getAsyncMessageObservableBlockingAsync').click(function () {
        console.log('getAsyncMessageObservableBlockingAsync clicked!');
        $.ajax({
            type: 'GET',
            async: true,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            url: 'http://localhost:8080/getAsyncMessageObservableBlocking',
            data: '',
            success: function (response) {
                console.log('getAsyncMessageObservableBlockingAsync success: ' + response.text);
            },
            error: function (xhr) {
                console.log('getAsyncMessageObservableBlockingAsync error: ' + xhr);
            },
            complete: function (xhr) {
                console.log('getAsyncMessageObservableBlockingAsync complete: ' + xhr.responseText);
            }
        });
    });

    $('#getAsyncMessageFutureBlockingSync').click(function () {
        console.log('getAsyncMessageFutureBlockingSync clicked!');
        $.ajax({
            type: 'GET',
            async: false,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            url: 'http://localhost:8080/getAsyncMessageFutureBlocking',
            data: '',
            success: function (response) {
                console.log('getAsyncMessageFutureBlockingSync success: ' + response.text);
            },
            error: function (xhr) {
                console.log('getAsyncMessageFutureBlockingSync error: ' + xhr);
            },
            complete: function (xhr) {
                console.log('getAsyncMessageFutureBlockingSync complete: ' + xhr.responseText);
            }
        });
    });

    $('#getAsyncMessageFutureBlockingAsync').click(function () {
        console.log('getAsyncMessageFutureBlockingAsync clicked!');
        $.ajax({
            type: 'GET',
            async: true,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            url: 'http://localhost:8080/getAsyncMessageFutureBlocking',
            data: '',
            success: function (response) {
                console.log('getAsyncMessageFutureBlockingAsync success: ' + response.text);
            },
            error: function (xhr) {
                console.log('getAsyncMessageFutureBlockingAsync error: ' + xhr);
            },
            complete: function (xhr) {
                console.log('getAsyncMessageFutureBlockingAsync complete: ' + xhr.responseText);
            }
        });
    });

    $('#getAsyncMessageFutureAsyncSync').click(function () {
        console.log('getAsyncMessageFutureAsyncSync clicked!');
        $.ajax({
            type: 'GET',
            async: false,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            url: 'http://localhost:8080/getAsyncMessageFutureAsync',
            data: '',
            success: function (response) {
                console.log('getAsyncMessageFutureAsync success: ' + response.text);
            },
            error: function (xhr) {
                console.log('getAsyncMessageFutureAsync error: ' + xhr);
            },
            complete: function (xhr) {
                console.log('getAsyncMessageFutureAsync complete: ' + xhr.responseText);
            }
        });
    });

    $('#getAsyncMessageFutureAsyncAsync').click(function () {
        console.log('getAsyncMessageFutureAsyncAsync clicked!');
        $.ajax({
            type: 'GET',
            async: true,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            url: 'http://localhost:8080/getAsyncMessageFutureAsync',
            data: '',
            success: function (response) {
                console.log('getAsyncMessageFutureAsync success: ' + response.text);
            },
            error: function (xhr) {
                console.log('getAsyncMessageFutureAsync error: ' + xhr);
            },
            complete: function (xhr) {
                console.log('getAsyncMessageFutureAsync complete: ' + xhr.responseText);
            }
        });
    });

});