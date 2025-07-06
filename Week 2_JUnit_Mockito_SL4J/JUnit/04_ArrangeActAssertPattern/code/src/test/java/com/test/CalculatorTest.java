package com.test;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    void setUp() {
        System.out.println("Setting up test...");
        calculator = new Calculator();
    }

    @AfterEach
    void tearDown() {
        System.out.println("Tearing down test...");
        calculator = null;
    }

    @Test
    void testMultiply() {
        int result = calculator.multiply(4, 5);
        assertEquals(20, result);
    }

    @Test
    void testSubtract() {
        int result = calculator.subtract(10, 3);
        assertEquals(7, result);
    }
}
