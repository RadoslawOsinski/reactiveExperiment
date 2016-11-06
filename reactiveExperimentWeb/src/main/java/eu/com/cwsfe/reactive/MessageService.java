package eu.com.cwsfe.reactive;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import rx.Observable;
import rx.schedulers.Schedulers;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Created by Radoslaw Osinski.
 */
@Service
class MessageService {

    private static final Logger LOGGER = LoggerFactory.getLogger(MessageService.class);

    private final ExecutorService customObservableExecutor = Executors.newFixedThreadPool(10);

    private final ExecutorService futureExecutor = Executors.newFixedThreadPool(10);

    Observable<Message> getAsyncMessageObservable() {
        return Observable.<Message>create(s -> {
            LOGGER.info("Start: Executing slow task in Message Service");
            delay(3000);
            s.onNext(new Message(LocalDateTime.now().format(DateTimeFormatter.ISO_DATE_TIME)));
            LOGGER.info("End: Executing slow task in Message Service");
            s.onCompleted();
        }).subscribeOn(Schedulers.from(customObservableExecutor));
    }

    CompletableFuture<Message> getAsyncMessageFuture() {
        return CompletableFuture.supplyAsync(() -> {
            LOGGER.info("Start: Executing slow task in Message Service");
            delay(4000);
            LOGGER.info("End: Executing slow task in Message Service");
            return new Message(LocalDateTime.now().format(DateTimeFormatter.ISO_DATE_TIME));
        }, futureExecutor);
    }

    private static void delay(long millis) {
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            //Ignore
        }
    }

}
