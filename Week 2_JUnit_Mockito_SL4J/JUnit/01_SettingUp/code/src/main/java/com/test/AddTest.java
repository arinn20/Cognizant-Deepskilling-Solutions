package com.test;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class AddTest {

    @Test
    void testAdd() {
        Add calc = new Add();
        assertEquals(5, calc.addition(2, 3));
    }
}
