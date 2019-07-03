const sequencia = {
    _valor: 1,//convenção nao alterar valor
    get valor(){return this._valor++},
    set valor(valor){
        if(this._valor <= valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor,sequencia.valor)