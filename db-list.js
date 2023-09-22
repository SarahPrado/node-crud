import { randomUUID } from 'crypto'

export class DataBaseTemp {
    produtos = []

    adicionar = (produto) =>{
        console.log('produto_antes: ', produto);
        produto.id = randomUUID()
        console.log('produto_depois: ', produto);
        return this.produtos.push(produto);
    }

    //listar todos, retorna o array
    listarTodos = () => this.produtos;
    
    listarPorId = (idParam) => this.produtos.find(produto => produto.id === idParam)
    

    atualizar = () => {}
    excluir = () => {}

}