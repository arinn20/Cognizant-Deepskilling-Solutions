package ecommerce;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class SearchDemo {

    // Linear Search
    public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, String name) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);

            if (cmp == 0)
                return products[mid];
            else if (cmp < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "iPhone", "Electronics"),
                new Product(102, "Nike Shoes", "Footwear"),
                new Product(103, "Samsung TV", "Electronics"),
                new Product(104, "T-shirt", "Clothing"),
                new Product(105, "Laptop", "Electronics")
        };

        Scanner scanner = new Scanner(System.in);

        // Sort a copy for binary search
        Product[] sortedProducts = Arrays.copyOf(products, products.length);
        Arrays.sort(sortedProducts, Comparator.comparing(p -> p.productName.toLowerCase()));

        System.out.println("🔍 Welcome to the E-commerce Product Search");

        String choice = "yes";
        do {
            System.out.print("\nEnter product name to search: ");
            String inputName = scanner.nextLine();

            System.out.println("Choose search method: 1. Linear  2. Binary");
            int method = scanner.nextInt();
            scanner.nextLine();

            Product result = null;

            if (method == 1) {
                result = linearSearch(products, inputName);
            } else if (method == 2) {
                result = binarySearch(sortedProducts, inputName);
            } else {
                System.out.println("Invalid choice.");
                continue;
            }

            if (result != null) {
                System.out.println("Product found: " + result);
            } else {
                System.out.println("Product not found.");
            }

            System.out.print("Search again? (yes/no): ");
            choice = scanner.nextLine().trim().toLowerCase();
        } while (choice.equals("yes"));

        System.out.println("Thank you for using the product search!");
        scanner.close();
    }
}

