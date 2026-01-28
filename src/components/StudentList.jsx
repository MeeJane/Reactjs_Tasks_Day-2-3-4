import React from "react";

function StudentList() {
  const students = [
    { name: "Arun", marks: 78 },
    { name: "Bala", marks: 45 },
    { name: "Charan", marks: 62 },
    { name: "Divya", marks: 39 },
    { name: "Esha", marks: 55 }
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li
            key={index}
            style={{
              color: student.marks > 50 ? "green" : "black",
              fontWeight: student.marks > 50 ? "bold" : "normal"
            }}
          >
            {student.name} - {student.marks}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
