package forecasting;

import java.util.Scanner;

public class Forecast {

    //Recursive method to calculate future value
    public static double forecastRecursive(double initialAmount, double growthRate, int years) {
        if (years == 0) {
            return initialAmount;  //Base case
        }
        return (1 + growthRate) * forecastRecursive(initialAmount, growthRate, years - 1); // 🔄 Recursive call
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //Take user input
        System.out.print("Enter the initial amount (₹): ");
        double initialAmount = scanner.nextDouble();

        System.out.print("Enter the annual growth rate (%): ");
        double ratePercent = scanner.nextDouble();
        double growthRate = ratePercent / 100.0; // Convert to decimal

        System.out.print("Enter the number of years: ");
        int years = scanner.nextInt();

        //Call the recursive method
        double futureValue = forecastRecursive(initialAmount, growthRate, years);

        //Display the result
        System.out.printf("📈 Future value after %d years: ₹%.2f\n", years, futureValue);

        scanner.close();
    }
}
