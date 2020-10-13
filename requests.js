$(() => {
    console.log('Ready!');

    $('#sendCustomerData').on('click', () => {
        console.log('Handle Customer Data');
    })

    $('#sendPayWithPayPal').on('click', () => {
        console.log('Handle Pay with PayPal');
    })

    $('#sendPayWithCreditCard').on('click', () => {
        console.log('Handle Pay with CreditCard');
    })
})
