package eu.com.cwsfe.reactive;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Radoslaw Osinski.
 */
@Controller
public class ReactiveHomePageController {

    @RequestMapping("/")
    public String getHomePage() {
        return "homePage";
    }

}
