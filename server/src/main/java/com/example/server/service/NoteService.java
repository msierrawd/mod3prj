package com.example.server.service;

import com.example.server.model.Note;
import org.springframework.http.HttpStatus;

public interface NoteService {
    Iterable<Note> getNotes();
    Note createNote(Note note);
    Note updateNote(Note note);
    HttpStatus deleteNote(Long id);
}
