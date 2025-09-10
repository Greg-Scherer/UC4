// Crie uma função que aceita um array que pode ser de qualquer tipo (number, de strings, ou qualquer outro tipo) e retorne o primeiro item (return array[0]). Não pode usar o tipo any.
import { GenericType } from "typescript";

function returnarray<T> (arr: T[]):T {
    return arr[0]
}

const arr = [1, "a", true]
const arrarr = [2,3,4]
const arraay = ["a", "bb", "ccc"]

console.log(typeof returnarray(arr));
console.log(returnarray<number>(arrarr));
console.log(returnarray<string>(arraay));      





class EstoqueLivro {
    private livros: Livro[] = [];
  
    adicionar(livro: Livro) { this.livros.push(livro); }
    listar() { return this.livros; }
  }
  
  class EstoqueRoupa {
    private roupas: Roupa[] = [];
  
    adicionar(roupa: Roupa) { this.roupas.push(roupa); }
    listar() { return this.roupas; }
  }

  

