// // - Дана textarea.
// // В неё вводится текст.
// // Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// const textArea = document.createElement('textarea')
// textArea.value = localStorage.getItem('textArea')
// document.body.appendChild(textArea)

// textArea.addEventListener('blur', ({target}) => {
//     localStorage.setItem('textArea', target.value)
// })






// // - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// // Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// // Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// // Сделайте ваш скрипт как можно более универсальным.

// const form = document.createElement('form')
// document.body.appendChild(form)

// const input = document.createElement('input')
// input.value = localStorage.getItem('text')
// form.appendChild(input)

// const textArea1 = document.createElement('textarea')
// textArea1.value = localStorage.getItem('textarea')
// form.appendChild(textArea1)

// const checkbox = document.createElement('input')
// checkbox.type = 'checkbox'
// checkbox.checked = !!localStorage.getItem('checkbox')
// form.appendChild(checkbox)

// const radio = document.createElement('input')
// radio.type = 'radio'
// radio.checked = localStorage.getItem('radio')
// form.appendChild(radio)

// const select = document.createElement('select')
// form.appendChild(select)

// const option1 = document.createElement('option')
// option1.value = '1'
// option1.textContent = '1'
// select.appendChild(option1)

// const option2 = document.createElement('option')
// option2.value = '2'
// option2.textContent = '2'
// select.appendChild(option2)

// const option3 = document.createElement('option')
// option3.value = '3'
// option3.textContent = '3'
// select.appendChild(option3)


// let selectValue = localStorage.getItem('select-one')

// if (selectValue) {
//     for (let index = 0; index < select.children.length; index++) {
//         const element = select.children[index];
//         if (element.value === selectValue) {
//             element.selected = true
//             break
//         }
//     }
// }

// form.addEventListener('input', ({target}) => {
//     localStorage.setItem(target.type, target.checked ? target.checked : target.type === 'checkbox' ? '' : target.value)
// })






// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// const form2 = document.createElement('form')
// form2.id = 'form2'
// document.body.appendChild(form2)

// const textArea2 = document.createElement('textarea')
// textArea2.name = 'textarea'
// textArea2.value = checkLocalStorage(true)
// form2.appendChild(textArea2)

// const btn = document.createElement('button')
// btn.textContent = 'Save'
// form2.appendChild(btn)


// function checkLocalStorage(defaultValue) {
//     let str = localStorage.getItem('textarea')
//     if(str) {
//         let json = JSON.parse(str)
//         return defaultValue ? json[json.length - 1] : json
//     }
//     return ''
// }

// function history (textarea) {
//     const next = document.createElement('button')
//     next.textContent = 'next'
//     document.body.appendChild(next)
    
//     const prev = document.createElement('button')
//     prev.textContent = 'prev'
//     document.body.appendChild(prev)
    
//     let count = checkLocalStorage().length - 1
//     next.addEventListener('click', (e) => {
//         let arr = checkLocalStorage()
//         if(count === arr.length - 1) return 
//         count++
//         textarea.value = arr[count]
//     })

//     prev.addEventListener('click', (e) => {
//         let arr = checkLocalStorage()
//         if(count === 0) return 
//         count--
//         textarea.value = arr[count]
//     })
// }

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     let { textarea } = e.target.form
//     let data = checkLocalStorage()
//     if(!data){
//         return localStorage.setItem('textarea', JSON.stringify([textarea.value]))
//     }
//     if (!e.target.parentElement.nextElementSibling && data.length >= 1){
//         history(textarea)
//     }
//     data.push(textarea.value)
//     localStorage.setItem('textarea', JSON.stringify(data))
// })






// // - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// // Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// // Данные вводить через соответсвующую форму.
// // --Каждому контакту добавить кнопку для удаления контакта.
// // --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта


// let obj = [
//     {
//         id: 0,
//         name : 'serg',
//         number : 639838422,
//         email : 'd@matchMedia.r',
//         firm : 'web',
//         birthday : 12.01
//     },
//     {
//         id: 1,
//         name : 'serg',
//         number : 639838422,
//         email : 'd@matchMedia.r',
//         firm : 'web',
//         birthday : 12.01
//     }
// ]
// localStorage.setItem('contacts', JSON.stringify(obj))

// function chekLocalStorage() {
//     let contacts = localStorage.getItem('contacts')
//     return JSON.parse(contacts)
// }

// function showForm(el, callback) {
//     const form1 = document.createElement('form')
//     el.appendChild(form1)
    
//     const inputName = document.createElement('input')
//     inputName.name = 'name'
//     inputName.placeholder = 'name'
//     form1.appendChild(inputName)
    
//     const inputNumber = document.createElement('input')
//     inputNumber.name = 'number'
//     inputNumber.placeholder = 'number'
//     form1.appendChild(inputNumber)
    
//     const inputEmail = document.createElement('input')
//     inputEmail.name = 'email'
//     inputEmail.placeholder = 'email'
//     form1.appendChild(inputEmail)
    
//     const inputFirm = document.createElement('input')
//     inputFirm.name = 'firm'
//     inputFirm.placeholder = 'firm'
//     form1.appendChild(inputFirm)
    
//     const inputBirthday = document.createElement('input')
//     inputBirthday.name = 'birthday'
//     inputBirthday.placeholder = 'birthday'
//     form1.appendChild(inputBirthday)
    
//     const submit = document.createElement('button')
//     submit.textContent = 'submit'
//     submit.id = 'submit'
//     form1.appendChild(submit)

//     callback(submit)
// }
// showForm(document.body, (el) => {
//     el.addEventListener('click', (e) => {
//         e.preventDefault()
//         const {target} = e
//         let contacts = chekLocalStorage()
//         let obj = {
//             id: contacts[0] ? contacts[contacts.length - 1].id + 1 : 0,
//             name : target.form.name.value,
//             number : target.form.number.value,
//             email : target.form.email.value,
//             firm : target.form.firm.value,
//             birthday : target.form.birthday.value
//         }
//         contacts.push(obj)
//         localStorage.setItem('contacts', JSON.stringify(contacts))
//         showContacts()
//     })
// })

// function navigationContacts(el) {
//     let div = document.createElement('div')
//     div.style.display = 'inline-block'
//     el.appendChild(div)
    
//     let remove = document.createElement('button')
//     remove.innerHTML = `Удалить`
//     div.appendChild(remove)
    
//     let update = document.createElement('button')
//     update.innerHTML = `Изменить`
//     div.appendChild(update)
// }


// const wraperContacts = document.createElement('div')
// document.body.appendChild(wraperContacts)

// function showContacts() {
//     wraperContacts.innerHTML = ''
//     let array = chekLocalStorage()

//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         let div = document.createElement('div')
//         wraperContacts.appendChild(div)
//         for (const key in element) {
//             let span = document.createElement('span')
//             span.id = key
//             span.innerHTML = `${key}=`
//             let span1 = document.createElement('span')
//             span1.innerHTML = element[key]
//             span1.style.marginRight='10px'
//             div.appendChild(span)
//             div.appendChild(span1)
//         }
//         navigationContacts(div)
//     }
// }
// showContacts()


// function removeOrUpdateContact(id, obj) {
//     let contacts = chekLocalStorage()
//     let newContacts = []
//     for (let index = 0; index < contacts.length; index++) {
//         let element = contacts[index];
//         if(element.id == id){
//             if(obj) newContacts.push(element = obj)
//             continue
//         }
//         newContacts.push(element)
//     }
//     console.log(newContacts);
//     return newContacts
// }

// wraperContacts.addEventListener('click', ({target}) => {
    
//     if(target.textContent == `Удалить`){
//         let element = target.parentElement.parentElement.children[1]
//         let arr = removeOrUpdateContact(+element.textContent)
//         localStorage.setItem('contacts', JSON.stringify(arr))
//         showContacts()
//     }

//     if(target.textContent == `Изменить`){
//         target.disabled = true
//         let {parentElement} = target.parentElement

//         showForm(parentElement, (el) => {
//             el.addEventListener('click', (e) => {
//                 e.preventDefault()
//                 const {target} = e
//                 let obj = {
//                     id: +parentElement.children[1].textContent,
//                     name : target.form.name.value,
//                     number : target.form.number.value,
//                     email : target.form.email.value,
//                     firm : target.form.firm.value,
//                     birthday : target.form.birthday.value
//                 }
//                 let contacts = removeOrUpdateContact(obj.id, obj)
//                 localStorage.setItem('contacts', JSON.stringify(contacts))
//                 showContacts()
//             })
//         })
//         for (let index = 3; index < 12; index+=2) {
//             const element = parentElement.children[index];
//             let form = document.forms[document.forms.length - 1]
//             form[parentElement.children[index-1].id].value = element.textContent
//         }

//     }
// })


