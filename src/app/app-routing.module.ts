import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopbarComponent } from './components/layout/topbar/topbar.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/charts/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './components/charts/radar-chart/radar-chart.component';
import { BubbleChartComponent } from './components/charts/bubble-chart/bubble-chart.component';
import { ReactFormsComponent } from './components/ReactiveForms/react-forms/react-forms.component';
import { ReactFormsFormBuliderComponent } from './components/ReactiveForms/react-forms/react-forms-form-bulider/react-forms-form-bulider.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path:'' ,component:HomeComponent
  },
  {
    path:'login' ,component:LoginpageComponent
  },
  {
    path:'line-chart',component:LineChartComponent
  },
  {
    path:'bar-chart',component:BarChartComponent
  },
  {
    path:'doughnut-chart',component:DoughnutChartComponent
  },
 
  {
    path:'radar-chart',component:RadarChartComponent
  },
  {
    path:'bubble-chart',component:BubbleChartComponent
  },
  {
    path:'rf',component:ReactFormsComponent
  },
  {
    path: 'rf-fb', component: ReactFormsFormBuliderComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
