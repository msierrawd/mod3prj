package com.example.server.controller;

import com.example.server.model.Date;
import com.example.server.service.DateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/dates")
public class DateController {
    @Autowired
    DateService dateService;

    @GetMapping
    public Iterable<Date> getDates(){
        return dateService.getDates();
    }

    @PostMapping
    public Date createDate(@RequestBody Date date){
        return dateService.createDate(date);
    }

    @PatchMapping
    public Date updateDate(@RequestBody Date date){
        return dateService.updateDate(date);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteDate(@PathVariable Long id){
        return dateService.deleteDate(id);
    }
}
