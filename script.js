function generator() {
    function container() {
        const div = document.createElement('div')
        const h1 = document.createElement('h1')
        div.className = "container"
        h1.innerText = 'Captcha Generator';
        div.appendChild(h1)
        const form = createform()
        div.appendChild(form)
        document.querySelector('body').appendChild(div)
    }

    function createform() {
        const form = document.createElement('form')
        for (let i = 0; i < 3; i++) {
            const div = document.createElement('div')
            div.className = 'captch_gain'
            form.appendChild(div)
        }

        return form
    }



    function createCaptchGain() {
        const captch_gain = document.querySelectorAll('.captch_gain')
        captch_gain.forEach((item, index) => {
            if (index === 0) {
                const p = createParagraph()
                const button = createButton()
                item.className = 'captch_gain captch_get'
                item.appendChild(p)
                item.appendChild(button)
            } else if (index === 1) {
                const input = createInput()
                item.className = 'captch_gain captch_set'
                item.appendChild(input)
            } else if (index === 2) {
                item.className = 'captch_gain captch_btn'
                const button = createBtn()
                item.appendChild(button)
            }
        })

    }



    function createParagraph() {
        const p = document.createElement('p')
        p.className = 'display'
        return p
    }

    function createButton() {
        const button = document.createElement('button')
        button.className = 'refress_btn'
        const icon = createIcons()
        button.appendChild(icon)
        return button
    }

    function createIcons() {
        const icon = document.createElement('i')
        icon.className = 'fas fa-arrows-rotate'
        return icon
    }

    function createInput() {
        const input = document.createElement('input')
        input.type = 'text'
        input.placeholder = 'Enter your captch'
        return input
    }

    function createBtn() {
        const button = document.createElement('button')
        button.type = 'submit'
        button.innerText = 'Submit'
        return button
    }

    function createMessage() {
        const form = document.querySelector('form')
        const p = document.createElement('p')
        const div = document.querySelector('.captch_btn')
        p.id = 'message'
        form.insertBefore(p, div)
    }



    container()
    createCaptchGain()
    createMessage()
    const parents = document.querySelector('.captch_get')

    const captch_get = parents.firstChild   //p
    const refress_btn = parents.lastChild   //button of refress_btn
    const captch_set = parents.nextElementSibling.children[0]   //input
    const message = parents.nextElementSibling.nextElementSibling   //message
    const captch_btn = message.nextElementSibling   //button in captch_btn
    let captcha = null;



    function generateChaptch() {
        const randomString = Math.random().toString(31).substring(2, 7)
        const randomStringArr = randomString.split('')
        const captchaData = randomStringArr.map((char) => (Math.random() < 0.5 ? char.toUpperCase() : char))
        captcha = captchaData.join(' ')
        captch_get.innerText = captcha
    }


    function refress_button(e) {
        e.preventDefault()
        generateChaptch()

    }




    const captchOplicty = function () {
        const captch_get = document.querySelector('.captch_get p');
        return captch_get.innerText.replace(/\s/g, '')
    }

    function captchButtonClick(e) {
        e.preventDefault()
        captcha = captch_set.value.split('').filter((char) => char != ' ').join('')
        if (captchOplicty() !== captcha) {
            message.innerText = 'Entered captcha is not correct'
            message.style.color = 'red'
        } else {
            message.innerText = 'Entered captcha is  correct'
            message.style.color = 'black'
        }


        if (window.innerWidth < 500) {
            generateChaptch()
        }
    }
    console.log(captch_get.parentElement.lastChild)
    refress_btn.addEventListener('click', refress_button)
    captch_btn.addEventListener('click', captchButtonClick)
    generateChaptch()
}

generator()