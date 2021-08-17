document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form")
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const textField = document.getElementById("new-task-description")
    const p = document.createElement("p");
    const btn = document.createElement("button");
    btn.textContent = "Complete!"
    p.textContent = `${textField.value}, ` +  `Due by: ${dateTextField.value} `;
    document.getElementById("list").appendChild(p);
    p.appendChild(btn);
    btn.addEventListener("click", e => p.remove())
 
    if (dropdown.value === "High priority") {
      p.style.color = "#FF0000";
    } else if (dropdown.value === "Medium priority") {
      p.style.color = "#FFFF00";
    } else if (dropdown.value === "Low priority") {
      p.style.color = "#00FF00";
    }
 
 
  })
 
  const dateTextField = document.createElement("input")
  form.appendChild(dateTextField)
 
  const dropdown = document.createElement("select");
  const option1 = document.createElement("option")
  option1.textContent = "High priority"
  const option2 = document.createElement("option")
  option2.textContent = "Medium priority"
  const option3 = document.createElement("option")
  option3.textContent = "Low priority"
  dropdown.appendChild(option1)
  dropdown.appendChild(option2)
  dropdown.appendChild(option3)
 
  form.appendChild(dropdown)
 
});
