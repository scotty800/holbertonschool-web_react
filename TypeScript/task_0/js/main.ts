interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "scotty",
    lastName: "Ndanga",
    age: 24,
    location: "paris",
};

const student2: Student = {
    firstName: "Sasuke",
    lastName: "Uchiwa",
    age: 30,
    location: "Konoha",
};

const studentsList: Student[] = [student1, student2];

function renderStudentTable(students: Student[]): void {
    const table = document.createElement('table');
    const tableHeader = document.createElement('tr');
    tableHeader.innerHTML = `<th>First Name</th><th>Location</th>`;
    table.appendChild(tableHeader);

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
        table.appendChild(row);
    });


    document.body.appendChild(table);
}


renderStudentTable(studentsList);