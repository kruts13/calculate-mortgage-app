import { Directive, Input, NgModule, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMortgageFormula]'
})
export class MortgageFormulaDirective {

  @Input() mortObjStr;
  num: number;
  deno: number;
  monthlyPayment: number;
  formula: number;

  constructor() {
  }

  calcMortUsingFormula() {
    let convertedMortObj = JSON.parse(this.mortObjStr);
    const mortObj = {
      mortgageAmt: convertedMortObj.mortgageAmt,
      interestRate: convertedMortObj.interestRate,
      amortizationPeriod: +convertedMortObj.amortizationPeriod,
      paymentFrequency: +convertedMortObj.paymentFrequency,
      term: convertedMortObj.term,
    }

    let termn = +mortObj.term * +mortObj.paymentFrequency;
    let r = mortObj.interestRate/((+mortObj.paymentFrequency) * 100);
    let n = +mortObj.amortizationPeriod * +mortObj.paymentFrequency;
    let p = mortObj.mortgageAmt;
    
    this.num = this.formNumerator(r, n);
    this.deno = this.formDenominator(r, n);
    this.monthlyPayment = this.formMortFormula(p, this.num, this.deno);
    
    return {monthlyPayment: this.monthlyPayment, r: r, n: n, p: p, termn: termn};
  }

  formNumerator(r: number, n: number) {
    return r * Math.pow((1 + r), n);
  }

  formDenominator(r: number, n: number) {
     return Math.pow((1 + r), n) - 1;
  }

  formMortFormula(p: number, num: number, deno: number) {
    return p * num/deno;
  }

}

@NgModule({
  declarations: [ MortgageFormulaDirective ],
  exports: [ MortgageFormulaDirective ]
})

export class MortgageFormulaDirectiveModule {}
