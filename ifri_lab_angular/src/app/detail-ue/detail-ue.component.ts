import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { UeService } from '../services/ue.service';
import { Ue } from '../models/ue';
import { EcService } from '../services/ec.service';
import { Ec } from '../models/ec';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-detail-ue',
  templateUrl: './detail-ue.component.html',
  styleUrls: ['./detail-ue.component.css']
})
export class DetailUeComponent implements OnInit {
keyParam: number;
ueSubmit: Ue;
noteList: Array<Note> = [];
  constructor(
    private activateRoute: ActivatedRoute,
    private noteService: NoteService,
    private ueService: UeService
  ) { }

  ngOnInit() {

    this.keyParam = this.activateRoute.snapshot.params['ueId'];
    console.log(this.keyParam);
    this.noteService.getNote().subscribe(
      (data: Array<Note>) => {
        this.noteList = data;
        const filtered = [];

        this.noteList.forEach(n => {
          console.log("contenu de n,formNote")
          console.log(n);
          //console.log(">>>>>>"+n.ec.ue.sem_Grade.semGrade.grade.gradeLibelle)

          if (n.ec.ue.ueId == this.keyParam) {
            filtered.push(n);
          }
         

        });

        this.noteList = filtered;
        
      }
    );
  }

}
