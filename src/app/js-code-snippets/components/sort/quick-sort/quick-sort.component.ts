import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.scss']
})
export class QuickSortComponent implements OnInit {
  numbers: number[] = [33, 12, -12, -1, 234, 21];

  constructor() { }

  ngOnInit(): void {
  }

  quickSort() {
    console.log(this.getQuickSortedNumbers(this.numbers));
  }

  // getQuickSortedNumbers(numbers: number[]): number[] {
  //   if (!Array.isArray(numbers)) return [];
  //   let pivot = numbers[numbers.length - 1];
  //   const leftNumbers: number[] = [];
  //   const rightNumbers: number[] = [];
  //   numbers.forEach((number) => {
  //     number < pivot ? leftNumbers.push(number) : rightNumbers.push(number);
  //   });
  //   console.log(leftNumbers, rightNumbers);
  //   const output = [...leftNumbers, pivot, ...rightNumbers];
  //   if (output.length !== 1) {
  //     return this.getQuickSortedNumbers(output);
  //   }
  //   return output;
  // }

  getQuickSortedNumbers(numbers: number[]): number[] {
    if (!Array.isArray(numbers)) return [];
    if(numbers.length < 2) return numbers;
    let pivot = numbers[numbers.length - 1];
    const leftNumbers: number[] = [];
    const rightNumbers: number[] = [];
    numbers.forEach((number) => {
      number < pivot ? leftNumbers.push(number) : rightNumbers.push(number);
    });
    console.log(leftNumbers, rightNumbers);
    return [...this.getQuickSortedNumbers(leftNumbers), pivot, ...this.getQuickSortedNumbers(rightNumbers)];
    // if (output.length !== 1) {
    //   return this.getQuickSortedNumbers(output);
    // }
  }

}
