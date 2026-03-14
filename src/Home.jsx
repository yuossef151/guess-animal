import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Home() {
  const correctAnswer = "عنكبوت";
  const navigate = useNavigate();
  const location = useLocation();

  const hints = [
    "لديه 8 أرجل",
    "يصنع شبكة لصيد الحشرات",
    "يعتبر من الحشرات العنكبوتية",
  ];

  const [inputValue, setInputValue] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [messages, setMessages] = useState([]);

  const success = location.state?.success;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (attempts < 3) {
      setAttempts(attempts + 1);

      if (inputValue.trim() === correctAnswer) {
        navigate("/video"); // يروح لصفحة الفيديو
        return;
      } else {
        setMessages([...messages, hints[attempts]]);
      }

      setInputValue("");
    } else {
      setMessages([
        ...messages,
        "انتهت المحاولات! الإجابة هي: " + correctAnswer,
      ]);
    }
  };
  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);

  return (
    <div className="bg-[url('/img.png')] bg-cover bg-center h-screen flex items-center justify-center">
      {/* الفورم تظهر فقط لو مفيش نجاح */}
      {!success && (
        <div className="bg-white rounded-2xl p-10 shadow-lg w-96">
          <form
            dir="rtl"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <p className="text-xl font-bold text-right">خمن اسم الحيوان</p>

            <label className="text-right">اسم الحيوان ؟</label>

            <input
              className="border p-2 rounded-lg"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <button className="bg-red-600 text-white py-2 rounded-xl">
              جرب
            </button>

            <div className="flex flex-col gap-2 text-right">
              {messages.map((msg, i) => (
                <p key={i}>{msg}</p>
              ))}
            </div>
          </form>
        </div>
      )}

      {/* رسالة النجاح */}
      {success && (
        <div className="bg-white/90 backdrop-blur p-10 rounded-2xl shadow-lg w-96 text-center">
          <h1 className="text-2xl font-bold">
            عليا الطلاق بالتلاته ان انت اتخضيت 😂😂😂
          </h1>
        </div>
      )}
    </div>
  );
}
