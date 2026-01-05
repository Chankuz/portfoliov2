import { hobbies } from "../data/hobbies";
import { useFadeIn } from "../hooks/useFadeIn";

const Hobbies = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="hobbies"
      ref={ref}
      className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">
          Hobbies <span className="text-gray-400">(งานอดิเรก)</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="text-center border border-gray-700 rounded-lg bg-gray-900 hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-gray-800/50 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-xs overflow-hidden group"
            >
              {hobby.imgUrl && (
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={
                      hobby.imgUrl.startsWith("/")
                        ? hobby.imgUrl
                        : `/${hobby.imgUrl.replace("public/", "")}`
                    }
                    alt={hobby.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {hobby.name} {hobby.emoji}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
