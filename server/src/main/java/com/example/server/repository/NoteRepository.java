package com.example.server.repository;

import com.example.server.model.Note;
import org.springframework.data.repository.CrudRepository;

public interface NoteRepository extends CrudRepository<Note, Long> {
}
