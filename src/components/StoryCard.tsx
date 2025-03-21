
import { Book, Clock } from "lucide-react";
import { Story } from "../data/stories";
import { useNavigate } from "react-router-dom";

interface StoryCardProps {
  story: Story;
  index: number;
}

const StoryCard = ({ story, index }: StoryCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/story/${story.id}`);
  };
  
  const levelColor = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800"
  };

  return (
    <div 
      className="story-card animate-fade-in cursor-pointer"
      onClick={handleClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <img 
          src={story.image} 
          alt={story.title} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${levelColor[story.level]}`}>
            {story.level}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1 line-clamp-1">{story.title}</h3>
        <p className="text-sm text-muted-foreground italic mb-2">{story.titleTranslation}</p>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{story.description}</p>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <div className="flex items-center mr-4">
            <Clock className="w-4 h-4 mr-1" />
            <span>{story.estimatedTime} min</span>
          </div>
          <div className="flex items-center">
            <Book className="w-4 h-4 mr-1" />
            <span>{story.vocabulary.length} words</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
