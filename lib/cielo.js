const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
// import fetch from 'node-fetch';
// const fetch = require('node-fetch');

class Cielo {
    static async compra(params) {

        const response = await fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
            method: 'post',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
                'MerchantId': '29f93833-31a0-4454-87de-77dc882aaa7b',
                'MerchantKey': 'YTOVXZQNVNCLYRGUFQUKZUUSZQSKUABMSYFWWNXO',
            }
        });
        const data = await response.json();

        return data;
    }

    static async captura(paymentId) {

        const response = await fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/' + paymentId + '/capture', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'MerchantId': '29f93833-31a0-4454-87de-77dc882aaa7b',
                'MerchantKey': 'YTOVXZQNVNCLYRGUFQUKZUUSZQSKUABMSYFWWNXO',
            },
        });
        const data = await response.json();
    
        return data;
    }
    
    static async consulta(paymentId) {

        const response = await fetch('https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/' + paymentId, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'MerchantId': '29f93833-31a0-4454-87de-77dc882aaa7b',
                'MerchantKey': 'YTOVXZQNVNCLYRGUFQUKZUUSZQSKUABMSYFWWNXO',
            },
        });
        const data = await response.json();
    
        return data;
    }
}

module.exports = Cielo;



