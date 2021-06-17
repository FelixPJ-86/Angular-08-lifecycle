import { DoCheck, SimpleChanges } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
implements OnInit, OnChanges, 
           DoCheck, AfterContentInit,
           AfterContentChecked, AfterViewInit, 
           AfterViewChecked, OnDestroy {

            nombre:string='Felix';
            segundos:number=0;
            segundos2:number=0;
            timerSubscription!:Subscription;


  constructor() { 
    console.log('constructor');
  }
  ngAfterViewInit(): void {
   console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
   console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
   console.log('ngOnDestroy');
   this.timerSubscription.unsubscribe();
   console.log('timerLimpiado');
  }
  ngAfterContentChecked(): void {
   console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
   console.log('ngAfterContentInit');
  }
  ngDoCheck(): void {
   console.log('ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnChanges');
  }

  ngOnInit(): void {
  console.log('ngOnInit');
  this.timerSubscription=interval(1000 ).subscribe(i=>{
    this.segundos=i;
    
  })


  }

 guardar(){}

}
