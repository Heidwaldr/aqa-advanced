const averageGrade = 70;
const gradeGroup = Math.floor(averageGrade / 10);

switch (gradeGroup) {
  case 10: // 100
  case 9:  // 90–99
    console.log("Відмінно");
    break;
  case 8:  // 80–89
    console.log("Дуже добре");
    break;
  case 7:  // 70–79
    console.log("Добре");
    break;
  case 6:  // 60–69
    console.log("Задовільно");
    break;
  case 5:
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    console.log("Незадовільно");
    break;
  default:
    console.log("Помилка: оцінка має бути від 0 до 100");
}

    


















