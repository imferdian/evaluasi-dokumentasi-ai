import React, { useState } from 'react';

const DocumentUpload = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [fileError, setFileError] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.name.endsWith('.md') && !file.name.endsWith('.txt')) {
        setFileError('Hanya file .md atau .txt yang diperbolehkan.');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setFileError('Ukuran file melebihi 10MB.');
        return;
      }
      setFileError(null);
      const reader = new FileReader();
      reader.onload = () => {
        setText(reader.result);
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = () => {
    if (text.trim() === '') {
      setFileError('Input tidak boleh kosong.');
      return;
    }
    onSubmit(text.trim());
  };

  return (
    <div className="my-6 p-4 border rounded-lg bg-white shadow-sm">
      <label className="block text-gray-700 font-medium mb-2">
        Masukkan Dokumentasi (teks atau upload file .md/.txt):
      </label>
      <textarea
        value={text}
        onChange={handleTextChange}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        placeholder="Tuliskan dokumentasi di sini..."
        rows={8}
      />
      <div className="mt-2 flex justify-between items-center">
        <span className="text-sm text-gray-500">Jumlah karakter: {text.length}</span>
        <input
          type="file"
          accept=".md,.txt"
          onChange={handleFileChange}
          className="text-sm text-gray-600"
        />
      </div>
      {fileError && <p className="text-red-500 text-sm mt-1">{fileError}</p>}
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition-colors font-medium"
      >
        Evaluasi Dokumentasi
      </button>
    </div>
  );
};

export default DocumentUpload;
