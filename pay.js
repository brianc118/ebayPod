function getTotal() {
    total = document.querySelectorAll('[data-test-id=TOTAL]')[0].querySelectorAll('td.amount')[0].querySelectorAll('span.text-display')[0].querySelectorAll('span')[0].innerText
    return total
}


applyBtn = document.querySelectorAll('[data-test-id=INCENTIVES_ADD_BUTTON')[0]
totalElem = document.querySelectorAll('[data-test-id=TOTAL]')[0].querySelectorAll('td.amount')[0].querySelectorAll('span.text-display')[0].querySelectorAll('span')[0]
payBtn = document.querySelectorAll('[data-test-id=CONFIRM_AND_PAY_BUTTON]')[0]


function applyCode() {
    console.log('Pasting/applying code')
    codeInput = document.getElementById('redemptionCode')
    codeInput.select()
    document.execCommand("paste")
    applyBtn = document.querySelectorAll('[data-test-id=INCENTIVES_ADD_BUTTON')[0]
    applyBtn.click()
}

function tryBuy() {
    total = getTotal()
    console.log(total)
    if (total === 'AU $99.00') {
        console.log('buying!')
        payBtn.click()
    } else {
        console.log('not buying!')
    }
}

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        tryBuy()
    });
});

var dd = new Date(); // Create a Date object to find out what time it is
console.log('yeet')
console.log(dd.getHours())
console.log(dd.getMinutes())
console.log(dd.getSeconds())
console.log(dd.getMilliseconds())

// observer.observe(payBtn, {
//     attributes: true //configure it to listen to attribute changes
// });

// observer.observe(totalElem, {
//     attributes: true //configure it to listen to attribute changes
// });

// tryBuy()
// applyCode()

window.setInterval(function(){ // Set interval for checking
    var date = new Date(); // Create a Date object to find out what time it is
    // console.log('yeet')
    // console.log(date.getHours())
    // console.log(date.getMinutes())
    // console.log(date.getSeconds())
    // console.log(date.getMilliseconds())
    if (date.getMinutes() === 59 && date.getSeconds() === 59 && date.getMilliseconds() > 600){ // Check the time
        tryBuy()
    } else if (date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() < 1000 - 600) {
        tryBuy()
    }
}, 300);