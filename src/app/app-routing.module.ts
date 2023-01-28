import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInstallmentComponent } from './pages/add-installment/add-installment.component';
import { AllUintsAvalibleComponent } from './pages/all-uints-avalible/all-uints-avalible.component';
import { AllUintsBoughtComponent } from './pages/all-uints-bought/all-uints-bought.component';
import { BuildingsComponent } from './pages/buildings/buildings.component';
import { BuyUintComponent } from './pages/buy-uint/buy-uint.component';
import { CreateBuildComponent } from './pages/create-build/create-build.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { CreateUintComponent } from './pages/create-uint/create-uint.component';
import { EditPasswordComponent } from './pages/edit-password/edit-password.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { MyPaymentsComponent } from './pages/my-payments/my-payments.component';
import { MyUintsComponent } from './pages/my-uints/my-uints.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RegisterComponent } from './pages/register/register.component';
import { SingleBuildingComponent } from './pages/single-building/single-building.component';
import { SingleProjectComponent } from './pages/single-project/single-project.component';
import { SingleUintComponent } from './pages/single-uint/single-uint.component';
import { UintsComponent } from './pages/uints/uints.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"projects/:id",component:SingleProjectComponent},
  {path:"buildings",component:BuildingsComponent},
  {path:"buildings/:id",component:SingleBuildingComponent},
  {path:"uints",component:UintsComponent},
  {path:"uints/:id",component:SingleUintComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"allUintsBought",component:AllUintsBoughtComponent},
  {path:"allUintsAvalible",component:AllUintsAvalibleComponent},
  {path:"myUints",component:MyUintsComponent},
  {path:"myPayments",component:MyPaymentsComponent},
  {path:"changePassword",component:EditPasswordComponent},
  {path:"addProject",component:CreateProjectComponent},
  {path:"addBuild",component:CreateBuildComponent},
  {path:"addUint",component:CreateUintComponent},
  {path:"buyUint",component:BuyUintComponent},
  {path:"addInstallment",component:AddInstallmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
