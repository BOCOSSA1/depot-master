import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, fr_FR } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, CommonModule } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { PageErrorComponent } from './page-error/page-error.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AboutComponent } from './about/about.component';
import { UeComponent } from './ue/ue.component';
import { EcComponent } from './ec/ec.component';
import { NoteComponent } from './note/note.component';
import { GradeComponent } from './grade/grade.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AnneeAcademiqueComponent } from './annee-academique/annee-academique.component';
import { SemestreComponent } from './semestre/semestre.component';
import { GenderComponent } from './gender/gender.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { InfosComponent } from './infos/infos.component';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';
import { OneResultComponent } from './one-result/one-result.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from "./create-user/create-user.component";
import { UserUpdateComponent } from './user-update/user-update.component';
import { TasksComponent } from './tasks/tasks.component';
import { UploadComponent } from './upload/upload.component';
import { GradeUpdateComponent } from './grade-update/grade-update.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { SemestreListComponent } from './semestre-list/semestre-list.component';
import { SemestreUpdateComponent } from './semestre-update/semestre-update.component';
import { AnneeListComponent } from './annee-list/annee-list.component';
import { AnneeUpdateComponent } from './annee-update/annee-update.component';
import { SemGradeComponent } from './sem-grade/sem-grade.component';
import { SemGradeListComponent } from './sem-grade-list/sem-grade-list.component';
import { SemGradeUpComponent } from './sem-grade-up/sem-grade-up.component';
import { UeListComponent } from './ue-list/ue-list.component';
import { UeUpdateComponent } from './ue-update/ue-update.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteUpdateComponent } from './note-update/note-update.component';
import { SaverComponent } from './saver/saver.component';
import { EcListComponent } from './ec-list/ec-list.component';
import { EcUpdateComponent } from './ec-update/ec-update.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { SpecialiteListComponent } from './specialite-list/specialite-list.component';
import { SpecialiteUpdateComponent } from './specialite-update/specialite-update.component';
import { DetailUeComponent } from './detail-ue/detail-ue.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NgxPrintModule } from 'ngx-print';
import { EmailComponent } from './email/email.component';



registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    PageErrorComponent,
    ConsulterComponent,
    LogOutComponent,
    AboutComponent,
    UeComponent,
    EcComponent,
    NoteComponent,
    GradeComponent,
    EtudiantComponent,
    AnneeAcademiqueComponent,
    SemestreComponent,
    AdminLoginComponent,
    GenderComponent,
    ResetPasswordComponent,
    MenuComponent,
    LoginComponent,
    InfosComponent,
    TestComponent,
    RegisterComponent,
    OneResultComponent,
    CreateUserComponent,
    UserListComponent,
    UserUpdateComponent,
    TasksComponent,
    UploadComponent,
    GradeUpdateComponent,
    GradeListComponent,
    SemestreListComponent,
    SemestreUpdateComponent,
    AnneeListComponent,
    AnneeUpdateComponent,
    SemGradeComponent,
    SemGradeListComponent,
    SemGradeUpComponent,
    UeListComponent,
    UeUpdateComponent,
    NoteListComponent,
    NoteUpdateComponent,
    SaverComponent,
    EcListComponent,
    EcUpdateComponent,
    SpecialiteComponent,
    SpecialiteListComponent,
    SpecialiteUpdateComponent,
    DetailUeComponent,
    ForgotComponent,
    EmailComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxPrintModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
