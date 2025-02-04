import { JsonPipe } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  imports: [JsonPipe,ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'my-todo';
  uf: string = "UF12:Angular";

  nStudenti: number = 19;
  studentiTotli: number = 19;
  studPresente: boolean = true;

  listaStudenti: string[] = ['Mario', 'Luigi', 'Mael', 'Serena'];
  listaStudentiPresenti: string[] =['Luigi'];

  //questo è un metodo (specificare sempre il tipo di parametro)
  //tipo any: puoi mettere tutti i tipi che vuoi
  stampaStudente(nome:string, matricola:number):string{
    return `Studente ${nome} con Matricola ${matricola}`
  }

  studente1: Studente = {
    nome: "Mario",
    cognome: "Rossi",
    matricola: 123456,
    attivo: true
  };

  studente2: Studente = {
    nome: "Giovanni",
    cognome: "Bianchi",
    matricola: 789191,
    attivo: false
  };

  studente3: Studente = {
    nome: "Serena",
    cognome: "Neri",
    matricola: 578439,
    attivo: true
  };

  listaOggettiStudenti: Studente[] = [this.studente1, this.studente2, this.studente3]
}

//questo è un nuovo oggetto
//export significa che l'interfaccia è importabile da altri file
export interface Studente{
  nome: string,
  cognome: string,
  matricola: number,
  attivo: boolean
}


/**
 *Con quali dati lavoriamo?
 *Come li strutturiamo?
 *Architettura progetto?
 *1) post
 * -titolo
 * -descrizione
 * -ID post
 * -userID
 * 2) interfaccia
 * 3) cartella backend chiamta 'core'
 * 4)core/model invece per la struttura dei dati
 *
 *
 *
 */
//WriteableSignal<string>

postlist: Post[] = [
titolo: " Seconda lezione "
body: "Imparimo a strutturae i progetti"
id: 0
userId: 34567
]
nome: string = 'Pietro'

cognome = signal<string>('rocchio');
counter = signal<number>(0);

rinominaCognome(){
  this.cognome.set('Rossi')
}

incrementa(){
  this.counter.update(val => val+1);
}

genratePost(){
  this.postList.update(item => {
    [...item,{
      titolo:
      body:
      id: 0,
      userId: Math.random() * 100,
    }]
  });
}


//69
