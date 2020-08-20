import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MortgageFormulaDirective } from '../../_directives/mortgage-formula.directive';

@Component({
  selector: 'app-mortgage-calculator-form',
  templateUrl: './mortgage-calculator-form.component.html',
  styleUrls: ['./mortgage-calculator-form.component.scss'],
})
export class MortgageCalculatorFormComponent implements OnInit {
  @ViewChild(MortgageFormulaDirective, {static: true}) mortFormula: MortgageFormulaDirective;
  mortgageCalcForm: FormGroup;
  formulaResults: object;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Define the form group
    this.mortgageCalcForm = this.fb.group({
      mortgageAmt: ['', [Validators.required]],
      interestRate: ['', [Validators.required]],
      amortizationPeriod: ['', [Validators.required]],
      paymentFrequency: ['', [Validators.required]],
      term: ['', [Validators.required]],
    });
  }

  arrayYears(num: number) {
    return Array(num);
  }

  // This component behaves like a presentational component. 
  // Formula calculation will be done in the common directive to calculate formulas.
  calculateMortgage() {
    this.formulaResults = this.mortFormula.calcMortUsingFormula();
  }

}
