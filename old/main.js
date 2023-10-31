let contract;
let signer;
let contractWithSigner;

main();

async function main() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);

    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, provider);
    contractWithSigner = contract.connect(signer);

    const numberInput = document.getElementById('numberInput');
    const imageElement = document.querySelector('img');
    const submitButton = document.getElementById('numberSubmit');

    submitButton.addEventListener('click', async function () {
        const enteredNumber = parseFloat(numberInput.value);

        if (enteredNumber >= 1 && enteredNumber <= 9999) {
            imageElement.src = 'welcome.jpg';
        } else if (enteredNumber >= 10000) {
            imageElement.src = 'get_out.gif';
        }
    });
}
