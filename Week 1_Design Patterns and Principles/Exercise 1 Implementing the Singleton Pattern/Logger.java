package singleton;

public class Logger {
    // Static variable to hold the single instance
    private static Logger instance;

    // Private constructor to prevent instantiation
    private Logger() {
        System.out.println("Logger Initialized.");
    }

    // Public method to return the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Log method for demonstration
    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}
