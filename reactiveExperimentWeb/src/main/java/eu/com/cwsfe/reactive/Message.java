package eu.com.cwsfe.reactive;

/**
 * Created by Radoslaw Osinski.
 */
public class Message {

    private String text;

    Message(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
