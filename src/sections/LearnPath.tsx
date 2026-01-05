import { useState, useEffect, useRef } from "react";
import { learnPathData } from "../data/learnPath";

const LearnPath = () => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    learnPathData.forEach((item) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(item.id));
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      const element = itemRefs.current[item.id];
      if (element) {
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const getIconUrl = (iconName: string) => {
    return `https://cdn.simpleicons.org/${iconName}`;
  };

  const getImageUrl = (url: string) => {
    // ถ้าเป็น external URL (http/https) ใช้ตามเดิม
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    // ถ้าเป็น local path
    return url.startsWith("/") ? url : `/${url.replace("public/", "")}`;
  };

  return (
    <section id="learn-path" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">
          Learn Path{" "}
          <span className="text-xl text-gray-400 sm:text-2xl md:text-2xl">
            (การเรียนรู้)
          </span>
        </h2>

        {/* Cards Container */}
        <div className="space-y-6">
          {learnPathData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                itemRefs.current[item.id] = el;
              }}
              className={`border border-gray-700 rounded-lg p-6 bg-gray-800 hover:border-gray-500 transition-all duration-500 ${
                visibleItems.has(item.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Period Label */}
              <div className="text-gray-400 text-sm mb-3">{item.period}</div>

              {/* Title */}
              <h3 className="text-base font-semibold text-white mb-4 sm:text-base md:text-xl">
                {item.title}
              </h3>

              {/* Tech Icons */}
              {item.techIcons && item.techIcons.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-3">
                  {item.techIcons.map((icon, iconIndex) => (
                    <img
                      key={iconIndex}
                      src={getIconUrl(icon)}
                      alt={icon}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Custom Images */}
              {item.images && item.images.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {item.images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={getImageUrl(image)}
                      alt={`Tech ${imageIndex + 1}`}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Description */}
              {item.description && (
                <p className="text-gray-400 text-sm mt-3">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnPath;
