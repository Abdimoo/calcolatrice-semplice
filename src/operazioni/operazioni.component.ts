import { Component } from '@angular/core';

@Component({
  selector: 'operazioni',
  standalone: true,
  imports: [],
  templateUrl: './operazioni.component.html',
  styleUrl: './operazioni.component.css'
})
export class OperazioniComponent {
  //var per l'inserimento
  subText='';
  mainText='';
  operatore1!: number;
  operatore2!: number;
  operatore = '';
  calcolatriceString= '';
  answered = false;
  operatorSet = false;
  dot = false;
  
  getAnswer() {
    this.calcolatriceString =this.mainText;
    this.operatore2 = parseFloat(this.mainText.split(this.operatore)[1])
    if(this.operatore === '+'){
      this.subText = this.mainText
      this.mainText = (this.operatore1+this.operatore2).toString()
      if(this.mainText.length > 9){
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
    }else if(this.operatore === '-'){
      this.subText = this.mainText
      this.mainText = (this.operatore1-this.operatore2).toString()
      this.subText = this.calcolatriceString;
    }else if(this.operatore === 'x'){
      this.subText = this.mainText
      this.mainText = (this.operatore1*this.operatore2).toString()
      this.subText = this.calcolatriceString;
      if(this.mainText.length > 9){
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
    }else if(this.operatore === '/'){
      this.subText = this.mainText
      this.mainText = (this.operatore1/this.operatore2).toString()
      this.subText = this.calcolatriceString;
      if(this.mainText.length > 9){
        this.mainText = this.mainText.substr(0, 9);
      }
    } else {
      this.subText = 'ERROR: Invalid Operation';
    }
  }

  pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.mainText[this.mainText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+')  {
        this.operatorSet = true;
      }
      if ((this.operatorSet) || (this.mainText === '')) {
        return;
      }
      this.operatore1 = parseFloat(this.mainText);
      this.operatore = key;
      this.operatorSet = true;
      this.dot=false
    }
    if (this.mainText.length === 10) {
      return;
    }
    if(key==='.'){
      if(this.dot)
        return
      else
        this.dot=true
    }
    this.mainText += key;
  }

  allClear() {
    this.subText=''
    this.mainText=''
    this.operatorSet=false
    this.dot=false
  }

}
