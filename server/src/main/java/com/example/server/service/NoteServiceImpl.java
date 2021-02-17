package com.example.server.service;

import com.example.server.model.Note;
import com.example.server.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class NoteServiceImpl implements NoteService {
    @Autowired
    NoteRepository noteRepository;

    @Override
    public Iterable<Note> getNotes() {
        return null;
    }

    @Override
    public Note createNote(Note note) {
        return null;
    }

    @Override
    public Note updateNote(Note note) {
        return null;
    }

    @Override
    public HttpStatus deleteNote(Long id) {
        return null;
    }
}
