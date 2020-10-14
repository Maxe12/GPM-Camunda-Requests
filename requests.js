$(() => {
    console.log('Ready!');
    const url = "localhost:8080/engine-rest/message";

    $('#sendCustomerData').on('click', () => {
        console.log('Handle Customer Data');
        const data = {message: "receivedCostumerInformation"};
        $.ajax({
            url: url,
            type: "POST",
            data: data,
            dataType: "jsonp",
            success: (response => {
                console.log(response)
            }),
            error: (error) => {
                console.log(error);
            }
        })
    })

    $('#sendPayWithPayPal').on('click', () => {
        console.log('Handle Pay with PayPal');
    })

    $('#sendPayWithCreditCard').on('click', () => {
        console.log('Handle Pay with CreditCard');
    })
})
