import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/layout/topbar/topbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RatingModule } from 'ng-starrating';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/charts/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { RadarChartComponent } from './components/charts/radar-chart/radar-chart.component';
import { BubbleChartComponent } from './components/charts/bubble-chart/bubble-chart.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ClickdirectiveDirective } from './directive/clickdirective.directive';
import { TopbarBelowComponent } from './components/marqueee/topbar-below/topbar-below.component';
import { EventEmitterService } from './services/event-emitter.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactFormsComponent } from './components/ReactiveForms/react-forms/react-forms.component';
import { ReactFormsFormBuliderComponent } from './components/ReactiveForms/react-forms/react-forms-form-bulider/react-forms-form-bulider.component';
import { HomeComponent } from './components/home/home.component';
import { IsLoggedUserDirective } from './directive/is-logged-user.directive';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    LoginpageComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    PieChartComponent,
    RadarChartComponent,
    BubbleChartComponent,
    HomeComponent,
    ClickdirectiveDirective,
    TopbarBelowComponent,
    ReactFormsComponent,
    ReactFormsFormBuliderComponent,
    IsLoggedUserDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RatingModule,
    ChartsModule,
    NgxSpinnerModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
