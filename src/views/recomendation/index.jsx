"use client";
import React, { useState } from "react";

const Recomendation = ({ data, products, calcs }) => {
  const [similarityMatrix, setSimilarityMatrix] = useState([]);
  const [sortedMatrix, setSortedMatrix] = useState([]);

  const uniqueTransactionCodes = [
    ...new Set(calcs.map((item) => item.transaction)),
  ];

  // Buat matriks transaksi biner
  const matrix = uniqueTransactionCodes.map((trxCode) => {
    const trxItems = calcs.filter((item) => item.transaction === trxCode);
    const boughtProductIds = trxItems.map((item) => item.productId);

    const row = {};
    products.forEach((product) => {
      row[product.name] = boughtProductIds.includes(product.id) ? 1 : 0;
    });

    return {
      transaction: trxCode,
      ...row,
    };
  });

  const productNames = products.map((p) => p.name);
  const productCodes = productNames.map((_, i) => `P${i + 1}`);

  // Hitung Cosine Similarity antar produk
  const cosineSimilarity = (vecA, vecB) => {
    const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    return magnitudeA && magnitudeB
      ? (dotProduct / (magnitudeA * magnitudeB)).toFixed(2)
      : "0.00";
  };

  const handleCalculateSimilarity = () => {
    // Ambil vektor tiap produk berdasarkan transaksi
    const productVectors = productNames.map((name) =>
      matrix.map((row) => row[name])
    );

    const size = productNames.length;
    const result = Array(size)
      .fill(0)
      .map(() => Array(size).fill("0.00"));

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i === j) {
          result[i][j] = "1.00";
        } else {
          result[i][j] = cosineSimilarity(productVectors[i], productVectors[j]);
        }
      }
    }

    setSimilarityMatrix(result);
    const sortedPerRow = result.map((row) => {
      return [...row]
        .map(parseFloat)
        .sort((a, b) => b - a)
        .map((n) => n.toFixed(2));
    });
    setSortedMatrix(sortedPerRow);
  };

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Tabel Transaksi Biner</h2>
      <table className="min-w-full border text-sm text-center dark:bg-gray-800 shadow rounded-lg mb-4">
        <thead className="bg-gray-700 text-gray-400">
          <tr>
            <th className="py-2 px-4 border">Transaction</th>
            {productNames.map((name, idx) => (
              <th key={idx} className="py-2 px-4 border">
                {`P${idx + 1}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i} className="hover:bg-gray-900">
              <td className="py-2 px-4 border font-medium">
                {row.transaction}
              </td>
              {productNames.map((name, j) => (
                <td key={j} className="py-2 px-4 border">
                  {row[name]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleCalculateSimilarity}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded mb-6"
      >
        Hitung Cosine Similarity Produk
      </button>

      {similarityMatrix.length > 0 && (
        <div className="overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4">
            Tabel Cosine Similarity Produk
          </h2>
          <table className="min-w-full border text-sm text-center dark:bg-gray-800 shadow rounded-lg">
            <thead className="bg-gray-700 text-gray-400">
              <tr>
                <th className="py-2 px-4 border">Produk</th>
                {productCodes.map((code, idx) => (
                  <th key={idx} className="py-2 px-4 border">
                    {code}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {similarityMatrix.map((row, i) => (
                <tr key={i} className="hover:bg-gray-900">
                  <td className="py-2 px-4 border font-medium">{`P${
                    i + 1
                  }`}</td>
                  {row.map((value, j) => (
                    <td key={j} className="py-2 px-4 border">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {sortedMatrix.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">
            Similarity Terbesar ke Terkecil per Produk
          </h2>
          <table className="min-w-full border text-sm text-center dark:bg-gray-800 shadow rounded-lg">
            <thead className="bg-gray-700 text-gray-400">
              <tr>
                <th className="py-2 px-4 border">Produk</th>
                <th className="py-2 px-4 border">Nilai Similarity (Sorted)</th>
              </tr>
            </thead>
            <tbody>
              {sortedMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-900">
                  <td className="py-2 px-4 border font-medium">{`P${
                    idx + 1
                  }`}</td>
                  <td className="py-2 px-4 border text-left">
                    {row.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Recomendation;
