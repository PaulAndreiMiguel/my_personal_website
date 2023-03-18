const courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "ACIT 1515", name: "Scripting for IT" },
    { code: "ACIT 1420", name: "Database Systems" }
  ];
  
  let userInput = parseInt(prompt("Enter a 4-digit number: "));
  while (isNaN(userInput) || userInput < 1000 || userInput > 9999) {
    userInput = parseInt(prompt("Invalid input. Please enter a 4-digit number: "));
  }
  
  let courseFound = false;
  for (let i = 0; i < courseList.length; i++) {
    if (courseList[i].code.includes(userInput)) {
      console.log(`Yes, I am taking the course: ${courseList[i].code} - ${courseList[i].name}`);
      courseFound = true;
      break;
    }
  }
  
  if (!courseFound) {
    courseList.push({ code: `ACIT ${userInput}`, name: null });
    console.log(`New course added to the list: ACIT ${userInput}`);
  }
  
  console.log(courseList);
  