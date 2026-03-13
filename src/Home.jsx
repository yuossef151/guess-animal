import { useState } from "react";

export default function Home() {
  const correctAnswer = "عنكبوت";
  const hints = [
    "لديه 8 أرجل",
    "يصنع شبكة لصيد الحشرات",
    "يعتبر من الحشرات العنكبوتية",
  ];

  const [inputValue, setInputValue] = useState(""); // الانبت الحالي
  const [attempts, setAttempts] = useState(0); // عدد المحاولات
  const [messages, setMessages] = useState([]); // التلميحات
  const [showVideo, setShowVideo] = useState(false); // التحكم في الفيديو
  const [showResult, setShowResult] = useState(false); // عرض المحتوى بعد الفيديو

  const handleSubmit = (e) => {
    e.preventDefault();

    if (attempts < 3) {
      setAttempts(attempts + 1);

      if (inputValue === correctAnswer) {
        setShowVideo(true); // شغل الفيديو
      } else {
        setMessages([...messages, hints[attempts]]); // أضف التلميح الحالي
      }

      setInputValue(""); // مسح الانبت
    } else {
      setMessages([
        ...messages,
        "انتهت المحاولات! الإجابة هي: " + correctAnswer,
      ]);
    }
  };
  <p>الحيوان الذي خمنته هو: عنكبوت</p>;

  return (
    <div className="bg-[url('/img.png')] bg-cover bg-center h-screen flex items-center justify-center relative">
      {!showVideo && !showResult && (
        <div className="bg-white rounded-2xl p-10 shadow-lg w-96 z-10 relative">
          <form
            dir="rtl"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 text-right">
              <p className="text-xl font-bold">خمن اسم الحيوان</p>
            </div>

            <label htmlFor="name" className="block mb-2 text-right">
              اسم الحيوان ؟
            </label>

            <input
              type="text"
              id="name"
              name="name2"
              className="border w-full p-2 rounded-lg"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <button
              type="submit"
              className="bg-red-600 py-2 rounded-2xl cursor-pointer"
            >
              جرب
            </button>

            <div dir="rtl" className="mt-4 flex flex-col gap-2">
              {messages.map((msg, idx) => (
                <p key={idx}>{msg}</p>
              ))}
            </div>
          </form>
        </div>
      )}

      {/* {showVideo && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <video
            src={`${import.meta.env.BASE_URL}spidr2.mp4`}
            autoPlay
            controls={false}
            className="w-full h-full object-cover"
            onEnded={() => {
              setShowVideo(false);
              setShowResult(true);
            }}
          />
        </div>
      )} */}
      {showVideo && (
  <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
    <video
      src={`https://www.w3schools.com/html/mov_bbb.mp4`}
      autoPlay
      controls
      playsInline
      className="max-w-full max-h-full"
      onEnded={() => {
        setShowVideo(false);
        setShowResult(true);
      }}
    />
  </div>
)}

      {showResult && (
        <div className="bg-white/90 backdrop-blur p-10 rounded-2xl shadow-lg w-96 z-10 text-center">
          <h1 className="text-2xl font-bold mb-4">
            عليا الطلاق بالتلاته ان انت اتخضديت{" "}
          </h1>
          <img src={`${import.meta.env.BASE_URL}moge.png`} alt="" />
        </div>
      )}
    </div>
  );
}
