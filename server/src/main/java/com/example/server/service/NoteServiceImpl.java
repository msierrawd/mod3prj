package com.example.server.service;

import com.example.server.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoteServiceImpl {
    @Autowired
    NoteRepository noteRepository;
    
}
