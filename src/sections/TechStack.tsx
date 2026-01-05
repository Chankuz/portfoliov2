import { techStack } from "../data/techStack";
import { useFadeIn } from "../hooks/useFadeIn";

const TechStack = () => {
  const { ref, isVisible } = useFadeIn();

  const getImageUrl = (tech: { iconName: string; imageUrl?: string }) => {
    // ถ้ามี imageUrl ใช้ imageUrl ก่อน (สำหรับรูปภาพ local หรือ URL โดยตรง)
    if (tech.imageUrl) {
      return tech.imageUrl;
    }
    // ใช้ simpleicons (สีจริง) โดยไม่ระบุสี
    return `https://cdn.simpleicons.org/${tech.iconName}`;
  };

  return (
    <section
      id="learning"
      ref={ref}
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">
          Learning <span className="text-gray-400">(กำลังเรียนรู้)</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="border border-gray-700 rounded-lg p-6 bg-gray-800 hover:border-gray-500 transition-colors duration-200 flex flex-col items-center justify-center gap-3"
            >
              <img
                src={getImageUrl(tech)}
                alt={tech.name}
                className="w-16 h-16 object-contain"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // ถ้า simpleicons ล้มเหลว ลองใช้ devicons
                  if (!target.src.includes("devicon")) {
                    target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.iconName}/${tech.iconName}-original.svg`;
                  } else {
                    target.style.display = "none";
                  }
                }}
              />
              <span className="text-white font-medium text-sm text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
