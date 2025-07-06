package com.cognizant.orm_learn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.cognizant.orm_learn.service.CountryService;
import com.cognizant.orm_learn.model.Country;


@EnableJpaRepositories(basePackages = "com.cognizant.orm_learn.repository")

@SpringBootApplication
public class OrmLearnApplication {
	private static CountryService countryService;

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static void testGetAllCountries() {
        LOGGER.info("Start");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End");
    }

    public static void main(String[] args) {
    	ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
    	LOGGER.info("Inside main");

    	countryService = context.getBean(CountryService.class);

    	testGetAllCountries();

    }
}
