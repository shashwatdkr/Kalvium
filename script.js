// Store attendance data
const attendanceData = [];

// Function to mark attendance
function markAttendance() {
    const studentName = document.getElementById('studentName').value;
    const attendanceStatus = document.getElementById('attendanceStatus').value;

    if (studentName) {
        const attendanceList = document.getElementById('attendanceList');
        const listItem = document.createElement('li');

        const currentDate = new Date().toLocaleDateString();

        listItem.textContent = `${currentDate} - ${studentName} - ${attendanceStatus}`;
        attendanceList.appendChild(listItem);

        attendanceData.push({
            date: currentDate,
            student: studentName,
            status: attendanceStatus
        });

        // Clear the input fields
        document.getElementById('studentName').value = '';
        document.getElementById('attendanceStatus').value = 'present';
    }
}
