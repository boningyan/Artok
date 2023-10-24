let contract;
let signer;
let contractWithSigner;

main();

async function main() {

    // if (!window.ethereum) {
    //     alert("No Web3 Provider detected");
    //     return;
    // }

    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    await provider.send("eth_requestAccounts", []);

    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, provider);
    contractWithSigner = contract.connect(signer);
