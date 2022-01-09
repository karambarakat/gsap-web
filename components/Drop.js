import { useEffect, useRef } from "react";

function Drop({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((entry) => {
          if (!entry.isIntersecting) return;
          console.log(entry);
          entry.target.classList.add("drop-active");
        });
      },
      { rootMargin: "-20% 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  });

  return (
    <div ref={ref} className="drop">
      {children}
    </div>
  );
}

export default Drop;
