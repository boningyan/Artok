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


    //// ADD YOUR CODE BELOW THIS LINE


    const numberSubmit = document.getElementById('numberSubmit');
    const numberInput = document.getElementById('numberInput');
    const artImage = document.getElementById('artImage');

    numberSubmit.addEventListener('click', function () {
        const enteredNumber = parseFloat(numberInput.value);
        contractWithSigner.setNumber(enteredNumber);
        console.log("ok")
    });

    contract.on("NumberAddedEvent", function (enteredNumber) {
        if (enteredNumber >= 1 && enteredNumber <= 10000) {
            // Change the image source and size
            artImage.src = 'welcome.jpg';
            artImage.width = 400; // Change the width to your desired size
            artImage.height = 300; // Change the height to your desired size
        } else if (enteredNumber >= 10000) {
            // Change the image source and size
            artImage.src = 'get_out.gif';
            artImage.width = 400; // Change the width to your desired size
            artImage.height = 250; // Change the height to your desired size
        }
    })

}
