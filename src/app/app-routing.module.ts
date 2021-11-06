import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEditarComponent } from './form-editar/form-editar.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'listar', component: ListComponent },
  { path: 'cadastrar', component: FormComponent },
  { path: 'editar/:id', component: FormEditarComponent},
  { path: 'excluir/:id', component: ListComponent},
  { path: 'profile/:id', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
