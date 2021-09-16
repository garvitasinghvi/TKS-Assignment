import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  data: any;
  solution: any = [];
  fibonacciSeries = "";
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data/Assignment.json").subscribe(data => {
      this.data = data;
      this.solution = this.generateSolution(data)
      console.log(this.solution)
    })
    //change number accordingly
    let n=100;
    console.log(this.printFibonacciSeries(n))
  }
  generateSolution(data: any): any {
    let keys = Object.keys(data).filter(k => Array.isArray(data[k]))
    let required: any = []
    keys.forEach(element => {
      if (element == 'componentbranch') {
        data[element].forEach((element: any) => {
          if (element['component'])
            required = required.concat(element['component'])
          else
            required = required.concat(this.generateSolution(element))
        })
      }
      else
        data[element].forEach((element: any) => {
          required = required.concat(this.generateSolution(element))
        })
    })
    return required
  }

  printFibonacciSeries(n: number) {
    let fibonacciSeries=""
    for (let i = 0; ; i++) {
      let term = this.fibonacciRecursion(i)
      if (term > n)
        break;
      fibonacciSeries += this.fibonacciRecursion(i).toString() + " ";
    }
    return fibonacciSeries
  }
  fibonacciRecursion(n: number): number {
    if (n == 0) {
      return 0;
    }
    if (n == 1 || n == 2) {
      return 1;
    }
    return this.fibonacciRecursion(n - 2) + this.fibonacciRecursion(n - 1);
  }

}
