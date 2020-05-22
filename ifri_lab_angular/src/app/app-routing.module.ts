import { LogOutComponent } from './log-out/log-out.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterComponent } from './consulter/consulter.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OneResultComponent } from './one-result/one-result.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { TasksComponent } from './tasks/tasks.component';
import { GradeComponent } from './grade/grade.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { GradeUpdateComponent } from './grade-update/grade-update.component';
import { SemestreUpdateComponent } from './semestre-update/semestre-update.component';
import { SemestreListComponent } from './semestre-list/semestre-list.component';
import { SemestreComponent } from './semestre/semestre.component';
import { AnneeAcademiqueComponent } from './annee-academique/annee-academique.component';
import { AnneeUpdateComponent } from './annee-update/annee-update.component';
import { AnneeListComponent } from './annee-list/annee-list.component';
import { UeComponent } from './ue/ue.component';
import { SemGradeComponent } from './sem-grade/sem-grade.component';
import { SemGradeListComponent } from './sem-grade-list/sem-grade-list.component';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteUpdateComponent } from './note-update/note-update.component';
import { UeListComponent } from './ue-list/ue-list.component';
import { UeUpdateComponent } from './ue-update/ue-update.component';
import { EcComponent } from './ec/ec.component';
import { EcListComponent } from './ec-list/ec-list.component';
import { EcUpdateComponent } from './ec-update/ec-update.component';
import { SaverComponent } from './saver/saver.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { SpecialiteListComponent } from './specialite-list/specialite-list.component';
import { SpecialiteUpdateComponent } from './specialite-update/specialite-update.component';
import { SemGradeUpComponent } from './sem-grade-up/sem-grade-up.component';
import { UploadComponent } from './upload/upload.component';
import { DetailUeComponent } from './detail-ue/detail-ue.component';
import { ForgotComponent } from './forgot/forgot.component';
import { EmailComponent } from './email/email.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  
  {
    path: 'menu', component: MenuComponent,
    children: [
     
      { path: 'consulter', component: ConsulterComponent },
      { path: 'details/:ueId', component: DetailUeComponent },
      { path: 'admin', component: AdminLoginComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'one-result', component: OneResultComponent },
      { path: 'create', component: CreateUserComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-update/:username', component: UserUpdateComponent },
      {path: 'email', component: EmailComponent},
      {path: 'save', component: SaverComponent,
    children:[
      {path: 'grade', component: GradeComponent},
      {path: 'grade-list', component: GradeListComponent},
      {path: 'grade-update/:gradeId', component: GradeUpdateComponent},
      {path: 'semestre', component: SemestreComponent},
      {path:'semestre-list', component: SemestreListComponent},
      {path: 'semestre-update/:semId', component: SemestreUpdateComponent},
      {path: 'annee', component: AnneeAcademiqueComponent},
      {path: 'annee-update/:anneeId', component: AnneeUpdateComponent},
      {path: 'annee-list', component: AnneeListComponent},
      {path: 'ec', component: EcComponent},
      {path: 'ec-list', component: EcListComponent},
      {path: 'ec-update/:ecId', component: EcUpdateComponent},
      {path: 'ue', component: UeComponent},
      {path: 'ue-list', component: UeListComponent},
      {path: 'ue-update/:ueId', component: UeUpdateComponent},
      {path: 'sem-grade', component: SemGradeComponent},
      {path: 'sem-grade-list', component: SemGradeListComponent},
      {path: 'sem-grade-update/:id', component: SemGradeUpComponent},
      {path: 'note', component: NoteComponent},
      {path: 'note-list', component: NoteListComponent},
      {path: 'note-update/:noteId', component: NoteUpdateComponent},
      {path: 'specialite', component: SpecialiteComponent},
      {path: 'specialite-list', component: SpecialiteListComponent},
      {path: 'specialite-update/:code', component: SpecialiteUpdateComponent}
      
    ]},
      
      
      {path:"tasks", component: TasksComponent},

    ]
  },
  { path: 'logOut', component: LogOutComponent },
  { path: 'about', component: AboutComponent },
  {path:'forgot', component: ForgotComponent },
  { path: 'login', component: LoginComponent },
  {path:'register', component: RegisterComponent},
  { path: "**", component: PageErrorComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
