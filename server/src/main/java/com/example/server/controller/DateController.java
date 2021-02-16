package com.example.server.controller;

import com.example.server.model.Date;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dates")
public class DateController {
    @GetMapping
    public Iterable<Date> getDates(){
        return dateService.getDates()
    }

    @PostMapping
    public Date createDate(@RequestBody Date date){
        return dateService.createDate(date)
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
