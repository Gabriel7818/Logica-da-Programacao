const assinc = () => {
    return new Promise(resolve =>{
        setTimeout(() => resolve('Faça alguma coisa depois'))
    })
}

const executeDepois = async () => {
    console.log(await assinc())
}