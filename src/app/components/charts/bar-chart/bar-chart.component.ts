import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  barChartLabels: Label[] = ['Need To Improve', 'Okay', 'Good', 'Great', 'Excellent'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dummy = []
  x=[]
  y=[]
  constructor(private router: Router) { }

  ngOnInit() {

    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    for(var i=30;i>0;i--)
    {
      this.dummy.push({item_id: i,item_text:i--})
    }
    for(var i=0;i<20;i++)
    {
      this.dropdownList.push({item_id: i,item_text:i++})
    }
  
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      
      allowSearchFilter: true
    };
  }

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46], label: 'Performance' }
  ];


  public chartClicked(e: any): void {
    // console.log("e.active.length ", e.active[0]._chart.data)
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      // console.log("chart ", chart)
      const activePoints = chart.getElementAtEvent(e.event);
      if (activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // get value by index
        const value = chart.data.datasets[0].data[clickedElementIndex];
        // console.log("hello", clickedElementIndex, label, value)
        // console.log("typeof",  typeof clickedElementIndex, typeof label, typeof value)

        if (label === 'Need To Improve') {
          this.router.navigate([''])
        }
        if (label === 'Okay') {
          this.router.navigate(['pie-chart'])
        }
        if (label === 'Good') {
          this.router.navigate(['line-chart'])
        }
        if (label === 'Great') {
          this.router.navigate(['bubble-chart'])
        }
        if (label === 'Excellent') {
          this.router.navigate(['table'])
        }
      }
    }
  }


  public chartColors: Array<any> = [

    { // first color
      backgroundColor: ['#cb0101', '#ff6e00', '#feb002', '#d1f015', '#249801'],
      // borderColor: 'black',
      // pointBackgroundColor: 'rgba(225,10,24,0.2)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'black'
    },

  ];



  public barChartOptions = {
    responsive: true,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                maxTicksLimit: 10,
                // // Create scientific notation labels
                // callback: function(value, index, values) {
                //     return value + ' €';
                // }
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 0.4
        }]
    }
  }

  onItemSelect(item: any) {
    console.log("single",item,"this.selectedItems:",this.selectedItems,"this.dropdownList",this.dropdownList);
    for(var i=0;i<this.selectedItems.length;i++)
    {
      for(var j=0;j<this.dummy.length;j++)
      {
        if(this.selectedItems[i]['item_text'] === this.dummy[j]['item_text'])
        {
            this.x.push({iindexs:i})
             this.y.push({jindexs:j})
        }
      }
    }
  }
  onSelectAll(items: any) {
    if(this.selectedItems.length === 0){
      console.log("length",this.dropdownList.length)
      for(var i=0;i<this.dropdownList.length;i++)
      {
        this.selectedItems.push({item_id: this.dropdownList[i]['item_id'],item_text:this.dropdownList[i]['item_text']})
      }

      for(var i=0;i<this.selectedItems.length;i++)
    {
      for(var j=0;j<this.dummy.length;j++)
      {
        if(this.selectedItems[i]['item_text'] === this.dummy[j]['item_text'])
        {
             var x:number = this.selectedItems[i]['item_text']
             var y:number = this.dummy[j]['item_text']
             console.log("x===",x ,i,"y==",y,j)
             
        }
      }
    }
    }
    console.log("all",items,"this.selectedItems:",this.selectedItems,"this.dropdownList",this.dropdownList);
  }
  onItemDeSelect(items: any) {
    console.log("dese",items,"this.selectedItems:",this.selectedItems,"this.dropdownList",this.dropdownList);
  }
  onDeSelectAll(e)
  {
    // this.dropdownList = []
    this.selectedItems = []
    console.log("deAse",e,"this.selectedItems:",this.selectedItems,"this.dropdownList",this.dropdownList);

  }
  onFilterChange(e){
    console.log("filter",e);

  }
}
