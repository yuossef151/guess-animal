import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function VideoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { state: { success: true } });
    }, 2000); // يرجع بعد 5 ثواني

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
<video
  src="https://yuossef151.github.io/guess-animal/spidr2.mp4"
  autoPlay
  controls
  playsInline
  muted
  className="w-full h-full object-cover"
/>
    </div>
  );
}
