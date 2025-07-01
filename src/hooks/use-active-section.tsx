import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
}

export function useActiveSection(navItems: NavItem[]) {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPositionWithOffset = scrollPosition + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPositionWithOffset) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return { activeSection, isScrolled };
}
