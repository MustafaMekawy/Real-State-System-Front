import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SingleProjectComponent } from './pages/single-project/single-project.component';
import { BuildingsComponent } from './pages/buildings/buildings.component';
import { SingleBuildingComponent } from './pages/single-building/single-building.component';
import { UintsComponent } from './pages/uints/uints.component';
import { SingleUintComponent } from './pages/single-uint/single-uint.component';
import { IndexComponent } from './pages/index/index.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { EditPasswordComponent } from './pages/edit-password/edit-password.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { DeleteAnyUserComponent } from './pages/delete-any-user/delete-any-user.component';
import { CreateRoleComponent } from './pages/create-role/create-role.component';
import { AddUrlComponent } from './pages/add-url/add-url.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { CreateBuildComponent } from './pages/create-build/create-build.component';
import { CreateUintComponent } from './pages/create-uint/create-uint.component';
import { AllUintsBoughtComponent } from './pages/all-uints-bought/all-uints-bought.component';
import { AllUintsAvalibleComponent } from './pages/all-uints-avalible/all-uints-avalible.component';
import { BuyUintComponent } from './pages/buy-uint/buy-uint.component';
import { MyUintsComponent } from './pages/my-uints/my-uints.component';
import { MyPaymentsComponent } from './pages/my-payments/my-payments.component';
import { AddInstallmentComponent } from './pages/add-installment/add-installment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProjectsComponent,
    SingleProjectComponent,
    BuildingsComponent,
    SingleBuildingComponent,
    UintsComponent,
    SingleUintComponent,
    IndexComponent,
    EditPasswordComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
    EditProfileComponent,
    DeleteAnyUserComponent,
    CreateRoleComponent,
    AddUrlComponent,
    CreateProjectComponent,
    CreateBuildComponent,
    CreateUintComponent,
    AllUintsBoughtComponent,
    AllUintsAvalibleComponent,
    BuyUintComponent,
    MyUintsComponent,
    MyPaymentsComponent,
    AddInstallmentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
