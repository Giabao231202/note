document.getElementById('save-button').addEventListener('click', function() {
    const noteInput = document.getElementById('note-input');
    const notesList = document.getElementById('notes-list');
  
    if (noteInput.value.trim() === "") {
      alert("Vui lòng nhập nội dung ghi chú!");
      return;
    }
  
    const note = document.createElement('div');
    note.className = 'note';
    note.textContent = noteInput.value;
  
    notesList.appendChild(note);
    noteInput.value = ""; // Xóa nội dung trong textarea sau khi lưu

    // Hàm hiển thị ghi chú từ LocalStorage
function displayNotes() {
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = ""; // Xóa nội dung cũ

  const notes = JSON.parse(localStorage.getItem('notes')) || []; // Lấy danh sách ghi chú
  notes.forEach((note, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.textContent = note;

    // Nút xóa
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa';
    deleteButton.style.marginLeft = '10px';
    deleteButton.onclick = function() {
      deleteNote(index);
    };

    noteDiv.appendChild(deleteButton);
    notesList.appendChild(noteDiv);
  });
}

// Hàm lưu ghi chú vào LocalStorage
function saveNote() {
  const noteInput = document.getElementById('note-input');
  const notes = JSON.parse(localStorage.getItem('notes')) || [];

  if (noteInput.value.trim() === "") {
    alert("Vui lòng nhập nội dung ghi chú!");
    return;
  }

  notes.push(noteInput.value); // Thêm ghi chú mới
  localStorage.setItem('notes', JSON.stringify(notes)); // Lưu vào LocalStorage
  noteInput.value = ""; // Xóa nội dung ô nhập

  displayNotes(); // Cập nhật danh sách
}

// Hàm xóa ghi chú
function deleteNote(index) {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.splice(index, 1); // Xóa ghi chú
  localStorage.setItem('notes', JSON.stringify(notes)); // Cập nhật LocalStorage

  displayNotes(); // Cập nhật danh sách
}

// Sự kiện khi nhấn nút Lưu
document.getElementById('save-button').addEventListener('click', saveNote);

// Hiển thị ghi chú khi tải trang
displayNotes();

  });
  
