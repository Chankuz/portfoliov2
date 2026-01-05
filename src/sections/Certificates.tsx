import { useState } from "react";
import { certificates } from "../data/certificates";
import type { Certificate } from "../data/certificates";
import { useFadeIn } from "../hooks/useFadeIn";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const { ref, isVisible } = useFadeIn();

  const handleImageClick = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const getImageUrl = (url?: string) => {
    if (!url) return "";
    return url.startsWith("/") ? url : `/${url.replace("public/", "")}`;
  };

  return (
    <>
      <section
        id="certificates"
        ref={ref}
        className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-[30px] font-bold mb-12 text-center text-white">
            Certificates / Achievements{" "}
            <span className="text-gray-400">(เกียรติบัตร)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="border border-gray-700 rounded-lg p-6 bg-gray-900 hover:border-gray-500 transition-colors duration-200 cursor-pointer"
                onClick={() =>
                  certificate.imageUrl && handleImageClick(certificate)
                }
              >
                <div className="aspect-video bg-gray-800 rounded mb-4 flex items-center justify-center hover:scale-105 transition-transform duration-300 overflow-hidden">
                  {certificate.imageUrl ? (
                    <img
                      src={getImageUrl(certificate.imageUrl)}
                      alt={certificate.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-600 text-sm">
                      Certificate Image
                    </span>
                  )}
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">
                  {certificate.title}
                </h3>
                <p className="text-gray-400 text-[14px] mb-1">
                  {certificate.issuer}
                </p>
                <p className="text-gray-500 text-[14px]">{certificate.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-2xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-2 -right-2 text-white hover:text-gray-300 text-2xl font-bold z-10 bg-black/70 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            >
              ×
            </button>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <img
                src={getImageUrl(selectedCertificate.imageUrl)}
                alt={selectedCertificate.title}
                className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-[15px] font-semibold text-white mb-2">
                  {selectedCertificate.title}
                </h3>
                <p className="text-gray-400 text-[15px]">
                  {selectedCertificate.issuer}
                </p>
                <p className="text-gray-500 text-[15px]">
                  {selectedCertificate.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;
