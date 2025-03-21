
import { ArrowLeft, Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
}

const Header = ({ title, showBackButton = false }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 backdrop-blur-lg bg-background/80 border-b">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          {showBackButton && (
            <button 
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          
          {isHomePage ? (
            <h1 className="text-xl md:text-2xl font-serif font-bold">
              <span className="text-french-blue">French</span>
              <span className="text-french-red">Fun</span>
              <span>Stories</span>
            </h1>
          ) : (
            <h1 className="text-xl font-medium truncate max-w-[250px] sm:max-w-md">
              {title || "French Fun Stories"}
            </h1>
          )}
        </div>
        
        <button 
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
          aria-label="Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
