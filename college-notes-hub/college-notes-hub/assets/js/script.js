// ===== NOTES FUNCTIONALITY =====
const form = document.getElementById("noteForm");
const notesList = document.getElementById("notesList");
const searchBar = document.getElementById("searchBar");
const previewSection = document.getElementById("previewSection");
const previewFrame = document.getElementById("previewFrame");
const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("file");
const departmentSelect = document.getElementById("department");
const subjectInput = document.getElementById("subject");
const filterDepartment = document.getElementById("filterDepartment");
const selectedFileDiv = document.getElementById("selectedFile");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
renderNotes();

/* Continue pasting the entire JS exactly as it was */