"use client";
import React from "react";
import QRCode from "react-qr-code";
import { collectionsData } from "@/utils/static";
import Link from "next/link";
import { ArrowLeft } from "@/components/icons/icon";

export default function QRCodesPage() {
  const baseUrl = "https://native-soil.vercel.app";

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft />
            Back to Gallery
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Collection QR Codes
          </h1>
          <p className="text-gray-600">
            Scan any QR code to view the collection and browse through the
            pieces
          </p>
        </div>

        {/* QR Codes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionsData.map((collection) => {
            // Create URL that points to the first piece of each collection
            const qrUrl = `${baseUrl}/art/${collection.id}?pieceId=1`;

            return (
              <div
                key={collection.id}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                {/* Collection Name */}
                <h2 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                  {collection.collection_name}
                </h2>

                {/* QR Code */}
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  <QRCode
                    size={200}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={qrUrl}
                    viewBox={`0 0 200 200`}
                  />
                </div>

                {/* Collection Info */}
                <div className="text-sm text-gray-600 mb-4">
                  <p>{collection.no_of_pieces} pieces</p>
                  <p className="break-all text-xs mt-1 opacity-75">{qrUrl}</p>
                </div>

                {/* Test Link */}
                <Link
                  href={`/art/${collection.id}?pieceId=1`}
                  className="inline-block bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm"
                >
                  Preview Collection
                </Link>
              </div>
            );
          })}
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            How to use these QR codes:
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-gray-900 font-medium">1.</span>
              Open your phone&apos;s camera app or QR code scanner
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-900 font-medium">2.</span>
              Point the camera at any QR code above
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-900 font-medium">3.</span>
              Tap the notification to open the collection in your browser
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-900 font-medium">4.</span>
              Use the carousel navigation to browse through all pieces in the
              collection
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
