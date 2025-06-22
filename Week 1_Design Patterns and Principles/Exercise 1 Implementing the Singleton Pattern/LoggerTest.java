package singleton;

public class LoggerTest {
    public static void main(String[] args) {
        // Get logger instance
        Logger logger1 = Logger.getInstance();
        logger1.log("This is the first message.");

        // Try getting another instance
        Logger logger2 = Logger.getInstance();
        logger2.log("This is the second message.");

        // Compare instances
        if (logger1 == logger2) {
            System.out.println("Only one instance exists. Singleton pattern verified.");
        } else {
            System.out.println("Different instances exist. Singleton pattern failed.");
        }
    }
}
