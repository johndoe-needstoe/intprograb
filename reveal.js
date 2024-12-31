head = document.getElementById("head")
para = document.getElementById("p")
credit = document.getElementById("credit")

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function reveal_splash() {

    var current = ""
    var head_text = "haha ur ip is now mien"

    for (let i = 0; i < head_text; i++) {

        current += msg.charAt(i)
        head.innerText = current
        await delay(Math.random() * 100.0)

    }

    current = ""
    var p_text = "ur a ideot"

    for (let i = 0; i < p_text; i++) {

        current += msg.charAt(i)
        para.innerText = current
        await delay(Math.random() * 100.0)

    }

    current = ""
    var c_text = "ur a ideot"

    for (let i = 0; i < c_text; i++) {

        current += msg.charAt(i)
        credit.innerText = current
        await delay(Math.random() * 100.0)

    }
}

reveal_splash()