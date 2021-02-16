package com.example.server.controller;

import com.example.server.model.Date;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/date")
public class DateController {
    @GetMapping
    public Iterable<Date> getDates(){
        return dataService.getDates()
    }
}
