export default function WhyCerix() {
  const TARGET_YEARS = 15; // Set your exact advisory pedigree figure here
  const [isVisible, setIsVisible] = useState(false);
  const [yearsCount, setYearsCount] = useState(TARGET_YEARS);
  const sectionRef = useRef(null);

  // Intersection observer with a light threshold for reliable trigger across mobile & desktop
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Smooth count-up animation
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = TARGET_YEARS;
    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / end), 30);

    setYearsCount(0);
    const timer = setInterval(() => {
      start += 1;
      setYearsCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);
