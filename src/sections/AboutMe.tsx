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
            !isHover2
              ? "public/images/mySelf/profile.JPG"
              : "public/images/mySelf/sour.jpg"
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
                ความสนใจด้านคอมพิวเตอร์ของผมเริ่มต้นตั้งแต่ชั้นมัธยมศึกษาปีที่ 4
              </span>
              และค่อย ๆ ศึกษาอย่างจริงจังในช่วงปลายชั้นมัธยมศึกษาปีที่ 5
              ช่วงเทอมแรก ผมเริ่มต้นการเขียนโปรแกรมด้วยภาษา Python
              เป็นภาษาแรกโดยทดลองสร้างโปรเจกต์เล็ก ๆ ด้วยตนเอง
              ซึ่งเป็นจุดเริ่มต้นที่ทำให้ผมได้เรียนรู้หลักการพื้นฐานของการเขียนโค้ด
              ต่อมา{" "}
              <span className="text-white font-bold">
                ผมได้รับคำแนะนำให้ลองพัฒนาเว็บไซต์โดยใช้ HTML, CSS และ
                JavaScript
              </span>
              การทำงานกับเว็บทำให้ผมรู้สึกสนุกและท้าทายสำหรับผมซึ่งปัจจุบันผมกำลังศึกษาเรื่อง
              Framework และ Library ต่างๆสำหรับผมเช่น React Nextjs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
