import { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";

const AboutMe = () => {
  const [isHover, setIsHover] = useState(false); // for hover at name
  const [isHover2, setIsHover2] = useState(false); // for hover at name
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <img
          src={
            !isHover2 ? "/images/mySelf/profile.JPG" : "/images/mySelf/sour.jpg"
          }
          alt="Chankit Wongtadam"
          className="w-40 h-40 rounded-full mx-auto mb-6"
          onMouseEnter={() => setIsHover2(true)}
          onMouseLeave={() => setIsHover2(false)}
        />

        <div className="space-y-4 text-gray-300">
          <h2
            className="text-xl sm:text-2xl font-semibold text-white my-10"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {isHover ? "NickName : Tonnam" : "Full Name : Chankit Wongtadam"}
          </h2>
          <div className="">
            <p className="text-[12px] sm:text-[14px] leading-relaxed text-gray-400">
              สวัสดีครับ ผมชื่อ นายชาญกิจ วงษ์ตาดำ
              ปัจจุบันกำลังศึกษาอยู่ที่โรงเรียนตากพิทยาคม จังหวัดตาก
              <span className="text-white font-bold">
                ชั้นมัธยมศึกษาปีที่ 6
              </span>
              <span className="text-white font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus delectus blanditiis quis dolores adipisci
                voluptatem obcaecati reprehenderit asperiores consequuntur?
                Deleniti pariatur illo exercitationem quae reiciendis velit,
                adipisci maiores architecto recusandae, placeat fugiat assumenda
                dicta iste eum libero laudantium, facilis nisi eveniet ipsum
                fugit quibusdam. Sint nam fugit deleniti ex cum, inventore
                quisquam repellat facere ab in. Laudantium officia, harum
                voluptas illo eos nesciunt animi in sit fugit quod, fuga error
                doloremque similique unde aperiam architecto explicabo laborum,
                ab dignissimos ullam nisi! Sint impedit suscipit possimus
                assumenda beatae laborum voluptate reiciendis, ratione minima
                reprehenderit ullam optio nulla incidunt libero maiores?{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
