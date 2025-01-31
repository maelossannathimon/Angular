
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
// nome: string = 'Pietro'

// cognome = signal<string>('rocchio');
// counter = signal<number>(0);

// post: Post

// rinominaCognome(){
//   this.cognome.set('Rossi')
// }

// incrementa(){
//   this.counter.update(val => val+1);
// }

export interface Post {
  titolo: string,
  body: string,
  id: number,
  userID: number
}


//69
