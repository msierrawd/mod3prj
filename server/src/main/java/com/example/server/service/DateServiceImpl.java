package com.example.server.service;

import com.example.server.model.Date;
import com.example.server.repository.DateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class DateServiceImpl implements DateService {

    @Autowired
    DateRepository dateRepository;

    @Override
    public Iterable<Date> getDates() {
        return dateRepository.findAll();
    }

    @Override
    public Date createDate(Date date) {
        return dateRepository.save(date);
    }

    @Override
    public Date updateDate(Date date) {
        return dateRepository.save(date);
    }

    @Override
    public HttpStatus deleteDate(Long id) {
        dateRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
