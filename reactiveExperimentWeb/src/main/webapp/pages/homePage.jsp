<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>homePage</title>
    <script src="${pageContext.request.contextPath}/resources/js/jquery-3.1.1.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/homePage.js"></script>
</head>
<body>

    <input type="button" id="quickMessageSync" value="quick message sync"/>
    <input type="button" id="quickMessageAsync" value="quick message async"/>

    <br/>
    <br/>
    <input type="button" id="getAsyncMessageObservableBlockingSync" value="getAsyncMessageObservableBlocking sync"/>
    <input type="button" id="getAsyncMessageObservableBlockingAsync" value="getAsyncMessageObservableBlocking async"/>

    <br/>
    <br/>
    <input type="button" id="getAsyncMessageFutureBlockingSync" value="getAsyncMessageFutureBlocking sync"/>
    <input type="button" id="getAsyncMessageFutureBlockingAsync" value="getAsyncMessageFutureBlocking async"/>

    <br/>
    <br/>
    <input type="button" id="getAsyncMessageFutureAsyncSync" value="getAsyncMessageFutureAsync sync"/>
    <input type="button" id="getAsyncMessageFutureAsyncAsync" value="getAsyncMessageFutureAsync async"/>

</body>
</html>
