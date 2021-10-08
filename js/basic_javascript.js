const code1 = async () => { 
    data = ''
    const rightPage = document.getElementById("right")
    const selected = document.getElementById("code1")

    // DataTypes
    let num = 10 // Number
    let string = "hi there" // String
    let obj = {firstName: "zain", lastName: "shaikh"}

    let datatypesView = `
        let num = ${num} // Number<br>
        let string = ${string} // String<br>
        let obj = ${obj}
    `

    // Numbers and its basic methods
    let x = 119.345235345

    let numberView = `
        x = ${x} <br>
        x.toString() : ${x.toString()} <br>
        x.toExponential() : ${x.toExponential()} <br>
        x.toFixed() : ${x.toFixed()} <br>
        x.toPrecision() : ${x.toPrecision()}
    `
    x.toString() // returns number as string.
    x.toExponential() // returns number as exponentia notation.
    x.toFixed() // returns number as decimal point.
    x.toPrecision() // returns a string with a number written with specified length


    // String
    let text = "Hi, My name is Zain"
    let text2 = "Shaikh"
    let text3 = text.concat(" ", text2)
    let text4 = "   Hello   "
    let text5 = "Hi, repeat repeat repeat"

    let stringView = `
        <b> text = ${text}</b> <br>
        Length : ${text.length} <br>
        Slice : text.slice(-4) :- ${text.slice(-4)} <br>
        Substring : text.substring(0, 4) :- ${text.substring(0, 4)} <br>
        Substr : text.substr(0,3) :- ${text.substr(0,3)} <br>
        Replace : text.replace("Zain", "Zain Shaikh") :- ${text.replace("Zain", "Zain Shaikh")} <br>
        Concat : text3 = text1.concat(" ", text2) :- ${text3} <br>
        Trim : text4 = ${text4} | text4.trim() :- ${text4.trim()}<br>
        <br>
        String Search:<br>
        text5.indexOf("Zain") : ${text5.indexOf("repeat")} <br>
        text5.lastIndexOf("repeat") : ${text5.lastIndexOf("repeat")} <br>
    `

    // Objects
    const person = {
        name: "Zain",
        lang: "Python",
        organization: "Quovantis"
    }

    const objectView = `
    let person = {<br>
        name: "Zain",<br>
        lang: "Python",<br>
        organization: "Quovantis"<br>
    }<br>
    person.name : ${person.name} <br>
    person.lang : ${person.lang} <br>
    person.organization : ${person.organization} <br>
    person.name = "${person.name = "Shaikh"}"<br>
    person.name : ${person.name} <br>
    `

    // Arrays
    const arr1 = ["Python", "Go lang"]
    const arr2 = ["Javascript", "Rust"]

    const arrView = `
    arr1 = [${arr1}]<br>
    arr1.join(" ") :- ${arr1.join(" ")}
    `



    const eventView = `
        <button id="btn" onclick="{onClick()}">OnClick</button>
    `

    // Async Await
    const getactivity = async () => {
        const response = await fetch('https://www.boredapi.com/api/activity')
        const activity = await response.json()
        return activity
    }
    rightPage.style.textAlign = 'center'
    rightPage.style.justifyContent = 'center'
    rightPage.innerHTML = `<div class="loader"></div><br><div>Loading...<div>`
    let activity = await getactivity()
    rightPage.style.textAlign = 'left'
    rightPage.style.justifyContent = 'left'

    const asyncawaitView = `
    const getactivity = async ()=> {<br>
        const response = await fetch('https://www.boredapi.com/api/activity')<br>
        const activity = await response.json()<br>
        return activity<br>
    }<br><br>

    activity = getactivity()<br>
    Output: <br>
    Activity :${activity.activity}
    `

    rightPage.innerHTML = `
        <h2>Basic Javascript -></h2>
        <ul>
            <li>
                <h3>DataTypes</h3>
                <div>
                    ${datatypesView}
                </div>
            </li>
            <li>
                <h3>Number</h3>
                <div>
                    ${numberView}
                </div>
            </li>
            <li>
                <h3>String</h3>
                <div>
                    ${stringView}
                </div>
            </li>
            <li>
                <h3>Objects and its basic methods</h3>
                <div>
                    ${objectView}
                </div>
            </li>
            <li>
                <h3>Arrays and its basic methods</h3>
                <div>
                    ${arrView}
                </div>
            </li>
            <li>
                <h3>Functions</h3>
            </li>
            <li>
                <h3>Loops</h3>
            </li>
            <li>
                <h3>Events</h3>
                <div>
                    ${eventView}
                </div>
            </li>
            <li>
                <h3>Async Await</h3>
                <div>
                    ${asyncawaitView}
                </div>
            </li>
        <ul>
    `
}

// Events
const onClick = () => {
    alert("button clicked")
}