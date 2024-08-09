import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  //se ejecuta al principio de todo
  constructor() {
    console.log('CONSTRUCTOR');
  }

  //se inicicializa al inicio de la pagina, despues del contructor, muy usado
  ngOnInit() {
    console.log('ngOnInit');
  }


  //escucha los cambios de tal equiqueta o los inputs
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  //se ejecuta varias veces, no se aconseja usaar este hook
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  //el contenido del componete que puede ser proyectado en una vista, se ejecuta una ves cuando termina de inicalizar el componente
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  //se ejecuta una ves, comprueba siempre que el contenido haya sido comprobado por el mecaninsmo deteccion de cambios de angular
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  //se ejecuta una ves, comprueba siempre que la vista haya sido comprobado por el mecaninsmo deteccion de cambios de angular
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  //cuando se quita algun componente
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
