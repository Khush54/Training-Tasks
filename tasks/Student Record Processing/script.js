const students = {
    student1: { 
        name: "Alice", 
        marks: { math: 85, science: 90, english: 78 } 
    },
    student2: { 
        name: "Bob", 
        marks: { math: 75, science: 80, english: 88 } 
    },
    student3: { 
        name: "Charlie", 
        marks: { math: 95, science: 89, english: 92 } 
    },
    student4: { 
        name: "Dave", 
        marks: null // Intentional error case for Bonus requirement
    }
};

async function processStudent(student) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 500;

        setTimeout(() => {
            try {
                console.log(`Processing student: ${student.name}...`);

                if (!student.marks) {
                    throw new Error(`Data missing for ${student.name}`);
                }

                const marksValues = Object.values(student.marks);
                let total = 0;

                for (const mark of marksValues) {
                    total += mark;
                }

                const average = total / marksValues.length;
                const status = average >= 80 ? "Pass" : "Fail";

                resolve({
                    name: student.name,
                    average: average.toFixed(2),
                    status: status
                });
            } catch (error) {
                reject(error.message);
            }
        }, delay);
    });
}

async function processAllStudents() {
    const results = [];

    console.log("--- Starting Student Processing ---\n");

    for (const key in students) {
        try {
            const result = await processStudent(students[key]);
            results.push(result);
        } catch (err) {
            console.error(`[ERROR] Could not process ${key}: ${err}`);
        }
    }

    console.log("\n--- Final Processing Results ---");

    for (const record of results) {
        console.log(`■ ${record.name} has an average of ${record.average} [Status: ${record.status}]`);
    }
}

processAllStudents();