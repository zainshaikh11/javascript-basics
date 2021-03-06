const code2 = () => {
  const rightPageCode2 = document.getElementById("right")
  rightPageCode2.style.textAlign = 'left'
  rightPageCode2.style.justifyContent = 'left'
  console.log("testing click event")
  const rightPage = document.getElementById("right")

  // Default Parameter
  const dp = (x, val = 10) => x + val
  result = dp(10)

  const dpView = `
    const dp = (x,val=10) => x + val<br>
    result = dp(10)<br>
    Output:<br>
    ${result}
    `

  // For of loop
  const arr1 = ["Java", "Python", "Go lang"];
  let elems = "";
  for (val of arr1) {
    elems += val;
  }

  const forOfView = `
  const arr1 = ["Java", "Python", "Go lang"]<br>
  let elems = ''<br>
  for (val of arr1) {<br>
    elems += val + '\${\n}'<br>
  }<br>
  Output: <br>
  ${elems}
  `

  // Spread Attributes
  const sum = (a,b,c) => {
      return a + b + c
  }
  const nums = [3,4,5]

  const spreadView = `
  const sum = (a,b,c) => {<br>
    return a + b + c<br>
    }<br>
  const nums = [3,4,5]<br>
  const sumResult = sum(...nums)<br>
  Output:<br>
  ${sum(...nums)}
  `

  // Class Static
  class Person {
      constructor(name, age) {
          this.name = name
          this.age = age
      }

      static type() {
        return "Human"
      }

      get Name() {
          return this.name
      }

      set Name(name) {
          this.name = name
      }
  }

  const staticView = `
      class Person {<br>
        constructor(name, age) {<br>
            this.name = name<br>
            this.age = age<br>
        }<br>
    <br>
        static type() {<br>
          return "Human"<br>
        }<br>
    }<br>
    Person.type()<br>
    Output: <br>
    ${Person.type()}
  `

  // Getters and setters
  const quant = new Person("Zain", 23)
  const nameBeforeSet = quant.Name
  quant.Name = "Shaikh"
  const nameAfterSet = quant.Name

  const getsetView = `
    class Person {<br>
        constructor(name, age) {<br>
            this.name = name<br>
            this.age = age<br>
        }<br><br>
        static type() {<br>
          return "Human"<br>
        }<br><br>
        get Name() {<br>
            return this.name<br>
        }<br><br>
        set Name(name) {<br>
            this.name = name<br>
        }<br>
    }<br><br>
    const quant = new Person("Zain", 23)<br><br>
    Name before setter : ${nameBeforeSet}<br><br>
    quant.Name = "Shaikh"<br><br>
    Name after setter : ${nameAfterSet}<br>
  `

  rightPageCode2.innerHTML = `
        <h2>New ES6 Features -></h2>
        <ul>
            <li>
                <h3>Arrow Functions</h3>
                <div>
                    All the modules of this project are<br>
                    build using callback funtions itself.
                </div>
            </li>
            <li>
                <h3>Default Parameters</h3>
                <div>
                    ${dpView}
                </div>
            </li>
            <li>
                <h3>For Of Loop</h3>
                <div>
                    ${forOfView}
                </div>
            </li>
            <li>
                <h3>Spread Attributes</h3>
                <div>
                    ${spreadView}
                </div>
            </li>
            <li>
                <h3>Class Static</h3>
                <div>
                    ${staticView}
                </div>
            </li>
            <li>
                <h3>Getters and setters</h3>
                <div>
                    ${getsetView}
                </div>
            </li>
        </ul>
    `
}
