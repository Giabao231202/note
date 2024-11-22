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
  });
  