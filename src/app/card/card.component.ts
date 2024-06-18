import { Component, Input, numberAttribute } from '@angular/core';

function handlePlanType(value: string){
  console.log('Handle Plan Type', value)
  return value.toUpperCase();
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ required: true, alias: 'planPriceAlias'}) planPrice: number = 0;
  @Input({ alias: 'planType',
          transform: (value: string) => handlePlanType(value) }) planType: string = '';


  //Definir com Get e Set
  // private _planType: string = '';
  // @Input('planType') set planType(value: string){
  //   this._planType = value.toUpperCase();
  // }

  // get planType(): string{
  //   return this._planType;
  // }


  buttonClicked(valueEmitted: boolean){
    console.log('Button clicked', valueEmitted);
    console.log('Plan Type', this.planType);
  }
}
