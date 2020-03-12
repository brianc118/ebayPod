function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
    }
    else if (event.target.readyState === 'complete') {
        binBtn = document.getElementById('binBtn_btn')

        if (typeof (binBtn) == 'undefined' || binBtn == null) {
            console.log('reload')
            location.reload(true)
        } else {
            console.log('Copying code')
            coupnMsg = document.getElementById('vi-inc-coupn-msg')
            console.log(coupnMsg)

            codeb = coupnMsg.querySelectorAll('div.nowrap')[0]
            code = codeb.querySelectorAll('b')[0].innerText
            copyToClipboard(code)
            console.log(code)

            // now we have the code now click buy it now
            binBtn.click()
        }
    }
});
