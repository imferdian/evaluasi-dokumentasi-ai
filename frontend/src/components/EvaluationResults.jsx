import React from 'react';

const EvaluationResults = ({ result }) => {
  if (!result) return null;

  return (
    <section className="mt-8">
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hasil Evaluasi</h2>
        
        <div className="mb-4">
          <strong>Skor Akhir: </strong>
          <span className="text-2xl font-bold text-blue-600">{result.final_score}%</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Markdown Structure */}
          <div className="p-4 border rounded-md">
            <h3 className="font-medium text-gray-700 mb-2">Struktur Markdown</h3>
            <div className="text-sm text-gray-600">
              <p>Skor: {result.markdown_structure?.skor_struktur_markdown || 0}</p>
              <p>Maks: {result.markdown_structure?.maks_skor || 0}</p>
            </div>
          </div>

          {/* Coherence */}
          <div className="p-4 border rounded-md">
            <h3 className="font-medium text-gray-700 mb-2">Koherensi</h3>
            <div className="text-sm text-gray-600">
              <p>Skor: {result.coherence?.skor_koherensi || 0}</p>
              <p>Maks: {result.coherence?.maks_skor || 0}</p>
            </div>
          </div>

          {/* KBBI Errors */}
          <div className="p-4 border rounded-md">
            <h3 className="font-medium text-gray-700 mb-2">KBBI & Tata Bahasa</h3>
            <div className="text-sm text-gray-600">
              <p>Kesalahan: {result.kbbi_errors?.jumlah_kata_salah || 0} kata</p>
              {result.kbbi_errors?.salah_kata && result.kbbi_errors.salah_kata.length > 0 && (
                <p className="mt-1">Contoh: {result.kbbi_errors.salah_kata.slice(0, 3).join(', ')}...</p>
              )}
            </div>
          </div>

          {/* SPOK Analysis */}
          <div className="p-4 border rounded-md">
            <h3 className="font-medium text-gray-700 mb-2">Analisis SPOK</h3>
            <div className="text-sm text-gray-600">
              <p>Skor: {result.spok_analysis?.skor_spok || 0}</p>
              <p>Kalimat dicek: {result.spok_analysis?.checked_sentences || 0}</p>
            </div>
          </div>
        </div>

        {result.overall_feedback && result.overall_feedback.length > 0 && (
          <div className="mt-4">
            <h3 className="font-medium text-gray-700 mb-2">Feedback Umum:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {result.overall_feedback.map((fb, index) => (
                <li key={index}>{fb}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default EvaluationResults;
