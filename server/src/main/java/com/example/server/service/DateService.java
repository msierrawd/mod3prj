package com.example.server.service;

import com.example.server.model.Date;
import org.springframework.http.HttpStatus;

public interface DateService {
    Iterable<Date> getDates();
    Date createDate(Date date);
    Date updateDate(Date date);
    HttpStatus deleteDate(Long id);
}
