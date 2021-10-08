code1()
const tbtn = document.querySelector(":root")
let currTheme = localStorage.getItem("defaultTheme")
if (currTheme == "true") {
  tbtn.style.setProperty("--primary", "#eae7dc")
  tbtn.style.setProperty("--secondary", "#e85a4f")
  tbtn.style.setProperty("--accent", "#e98074")
  tbtn.style.setProperty("--text-primary", "#e85a4f")
  tbtn.style.setProperty("--text-secondary", "#eae7dc")
} else {
  tbtn.style.setProperty("--primary", "#ebeced")
  tbtn.style.setProperty("--secondary", "#272b33")
  tbtn.style.setProperty("--accent", "#404453")
  tbtn.style.setProperty("--text-primary", "#272b33")
  tbtn.style.setProperty("--text-secondary", "#ebeced")
}
const changeTheme = () => {
  let currTheme = localStorage.getItem("defaultTheme")
  console.log(currTheme)
  if (currTheme == "true") {
    tbtn.style.setProperty("--secondary", "#272b33")
    tbtn.style.setProperty("--accent", "#404453")
    tbtn.style.setProperty("--text-primary", "#272b33")
    tbtn.style.setProperty("--text-secondary", "#ebeced")
    localStorage.setItem("defaultTheme", "false")
  } else {
    tbtn.style.setProperty("--primary", "#eae7dc")
    tbtn.style.setProperty("--secondary", "#e85a4f")
    tbtn.style.setProperty("--accent", "#e98074")
    tbtn.style.setProperty("--text-primary", "#e85a4f")
    tbtn.style.setProperty("--text-secondary", "#eae7dc")
    tbtn.style.setProperty("--primary", "#ebeced")
    localStorage.setItem("defaultTheme", "true")
  }
}
