import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  noteList : Array<Note> = [];
  constructor(private noteService: NoteService,
    private router : Router) { }

  ngOnInit() {
    this.listNote();
  }

  listNote(){
    this.noteService.getNote().subscribe(
      (data: Array<Note>)=>{
        this.noteList=data;
      }
    );

  }

  ouvrirModifier(noteId: number): void {
    this.router.navigate(['menu/save/note-update/'+noteId]);
  
  }

  noteDelete(noteId: number){
    this.noteService.deleteNote(noteId).subscribe(
      response=>this.listNote()
    );
  }

}
