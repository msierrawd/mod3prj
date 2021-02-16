package com.example.server.service;

import com.example.server.model.Date;
import com.example.server.repository.DateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

public class DateServiceImpl implements DateService {

    @Autowired
    DateRepository dateRepository;
    @Override
    public Iterable<Date> getDates() {
        return null;
    }

    @Override
    public Date createDate(Date date) {
        return null;
    }

    @Override
    public Date updateDate(Date date) {
        return null;
    }

    @Override
    public HttpStatus deleteDate(Long id) {
        return null;
    }
}
