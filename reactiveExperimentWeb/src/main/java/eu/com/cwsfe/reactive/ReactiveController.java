package eu.com.cwsfe.reactive;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;
import rx.Observable;

import java.util.concurrent.CompletableFuture;

/**
 * Created by Radoslaw Osinski.
 */
@RestController
public class ReactiveController {

    private final MessageService messageService;

    @Autowired
    public ReactiveController(MessageService messageService) {
        this.messageService = messageService;
    }

    @RequestMapping("/getAsyncMessageObservableBlocking")
    public Message getAMessageObsBlocking() {
        return messageService.getAsyncMessageObservable().toBlocking().first();
    }


    @RequestMapping("/getAsyncMessageObservableAsync")
    public DeferredResult<Message> getAMessageAsync() {
        Observable<Message> o = this.messageService.getAsyncMessageObservable();
        DeferredResult<Message> deferred = new DeferredResult<>(90000L);
        o.subscribe(deferred::setResult, deferred::setErrorResult);
        return deferred;
    }

    @RequestMapping("/getAsyncMessageFutureBlocking")
    public Message getAMessageFutureBlocking() throws Exception {
        return messageService.getAsyncMessageFuture().get();
    }

    @RequestMapping("/getAsyncMessageFutureAsync")
    public DeferredResult<Message> getAMessageFutureAsync() {
        DeferredResult<Message> deferred = new DeferredResult<>(90000L);
        CompletableFuture<Message> f = this.messageService.getAsyncMessageFuture();
        f.whenComplete((res, ex) -> {
            if (ex != null) {
                deferred.setErrorResult(ex);
            } else {
                deferred.setResult(res);
            }
        });
        return deferred;
    }


    @RequestMapping("/quickMessage")
    public Message getAFastMessage() {
        return new Message(this.messageService.getMessageContent());
    }

    @RequestMapping("/healthCheck")
    public String getHealthCheck() {
        return "OK";
    }

}
