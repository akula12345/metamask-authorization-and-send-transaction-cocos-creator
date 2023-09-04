import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MetamaskTest')
export class MetamaskTest extends Component {

    async getAccounts() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts)
        const account = accounts[0];
        console.log(account)
        return accounts
    }

    async onLogin() {
        this.getAccounts();
    }

    async sendTransaction() {
        alert("Confirm the transaction in the Metamask application")
        const accounts = this.getAccounts();
        const myValue = '0x' + (50000000000000000).toString(16) // wei
        const transactionParameters = {
            from: ethereum.selectedAddress,
            to: '0x8aBaa5E890B88cF05dCf1685d797567A1354E370',
            value: myValue,
        };
        console.log(transactionParameters)
        const txHash = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        }).then((txHash) => {
            console.log(txHash)
            alert("Транзакция отправлена! Hash: " + txHash)
        })
        .catch((error) => console.error);
        console.log(txHash)
    }
}

