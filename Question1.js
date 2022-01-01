//Check from the objects.js file g_class. Give the list of students which have greater than or equal to 85 marks.


alert("This program will check That which student get more than 85 marks")

var g_class = {
    name: "Dec21WebFundamentals",
    instructor: {
      name: "Shubham",
      subject: "MERN",
    },
    students: [
      {
        name: "Ajay",
        marks: 80,
      },
      {
        name: "Amit",
        marks: 89,
      },
      {
        name: "Alok",
        marks: 77,
      },
      {
        name: "Ankita",
        marks: 70,
      },
      {
        name: "Manshi",
        marks: 90,
      },
      {
        name: "Mansha",
        marks: 85,
      },
      {
        name: "Nandu",
        marks: 87,
      },
    ],
  };
  for (var i = 0; i < g_class.students.length; i = i + 1) {
    if (g_class.students[i].marks >= 85) {
      alert(g_class.students[i].name);
      console.log(g_class.students[i].name);
    }
  }