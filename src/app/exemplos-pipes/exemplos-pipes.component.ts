import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  filtro: string = '';
  livros: string[] = ['Angular 2', 'Java'];
  livro: any = {
    titulo: 'learning javaScript data structures and algorithms',
    idioma: 'Inglês',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://www.amazon.com.br/Learning-JavaScript-Data-Structures-Algorithms/dp/1783554878'
  }
  // promises angular 2
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono promise'), 3000)
  });

  // programação reativa utilizando observable
  valorAsync2 = new Observable<string>(observable => {
    setTimeout(() => {
      observable.next('Valor assíncrono observable');
    }, 5000);
  });



  constructor() { }

  ngOnInit(): void {
  }

  addCurso(value: string){
    this.livros.push(value);
    console.log(this.livros)
  }
  obterCursos(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') return this.livros;

    return this.livros.filter(
      v => {
        if(v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) return true;
        return false;
      }
    )
  }


}
