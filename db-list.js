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
    
    //verificar se existe, e determinar o dado a ser alterado pelo id
    //mais simples seria se fossse com desestruturação de objeto
    //criamos produtoAtualizado para pegar os valores novos
    //passando o produto atualizado para produtoDB
    atualizar = (idParam, produtoAtualizado) => {
        const produtoBD = this.listarPorId(idParam)

        if(produtoBD){
            produtoBD.nome = produtoAtualizado.nome
            produtoBD.modelo = produtoAtualizado.modelo 
            produtoBD.preco = produtoAtualizado.preco 

        }
        return produtoBD;
    };


    excluir = (idParam) => {
        // const produtoBD = this.listarPorId(idParam)
        // if(produtoBD.splice(idParam, 1)){
        //     console.log("Deletado");
        // }else{
        //     console.log("Não deletado");
        // }
        //Para encontrar o elemento do array eu preciso encontrar o index do array, e para encontrar o index a ser removido, eu preciso de um elemento único que é identificado com um id, logo, o findindex vai encontrar o id específico, retornando o index do id, para que quando eu usar o splice ele remova o index especificado que foi retornado por findIndex. São duas funções.

        let indexProduto = this.produtos.findIndex(produto => produto.id === idParam)
        //coloquei o return só dps

        return this.produtos.splice(indexProduto, 1) 
    }

}