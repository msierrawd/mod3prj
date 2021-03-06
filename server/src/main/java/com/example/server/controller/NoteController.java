package com.example.server.controller;

import com.example.server.model.Note;
import com.example.server.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/notes")
public class NoteController {
    @Autowired
    NoteService noteService;

    @GetMapping
    public Iterable<Note> getNotes(){
        return noteService.getNotes();
    }

    @PostMapping
    public Note createNote(@RequestBody Note note){
        return noteService.createNote(note);
    }

    @PatchMapping
    public Note updateNote(@RequestBody Note note){
        return noteService.updateNote(note);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteNote(@PathVariable Long id){
        return noteService.deleteNote(id);
    }

}
