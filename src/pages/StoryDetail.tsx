
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { stories } from "@/data/stories";
import Header from "@/components/Header";
import AudioPlayer from "@/components/AudioPlayer";
import { useAudio } from "@/hooks/useAudio";
import { Book, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const StoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const storyId = parseInt(id || "1");
  
  const story = stories.find(s => s.id === storyId);
  const activeLineRef = useRef<HTMLParagraphElement>(null);
  
  // Handle non-existent story
  if (!story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-muted-foreground mb-4">Story not found</p>
        <Button onClick={() => navigate("/")} variant="outline">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </div>
    );
  }
  
  const { 
    isPlaying, 
    currentTime, 
    duration, 
    activeLineId, 
    togglePlay, 
    seek, 
    formatTime 
  } = useAudio(story.audioFile, story.content);
  
  const prevStory = stories.find(s => s.id === storyId - 1);
  const nextStory = stories.find(s => s.id === storyId + 1);
  
  // Scroll active line into view
  useEffect(() => {
    if (activeLineId && activeLineRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [activeLineId]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header title={story.title} showBackButton />
      
      <main className="flex-1 container py-6 px-4 md:py-8 pb-24">
        <div className="max-w-[700px] mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">{story.title}</h1>
            <p className="text-lg text-muted-foreground italic mb-4">{story.titleTranslation}</p>
            
            <div className="mb-6 flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Book className="w-3 h-3" />
                {story.level}
              </Badge>
              <Badge variant="outline">
                {story.estimatedTime} min read
              </Badge>
            </div>
          </div>
          
          <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8 animate-scale-in">
            <img src={story.image} alt={story.title} className="object-cover w-full h-full" />
          </div>
          
          <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-xl font-semibold mb-3">Vocabulary</h2>
            <div className="bg-card rounded-lg p-4 border grid grid-cols-1 sm:grid-cols-2 gap-3">
              {story.vocabulary.map((item) => (
                <div key={item.word} className="flex flex-col">
                  <div className="flex justify-between">
                    <span className="font-medium">{item.word}</span>
                    <span className="text-muted-foreground">{item.translation}</span>
                  </div>
                  {item.pronunciation && (
                    <span className="text-xs text-muted-foreground italic">/{item.pronunciation}/</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-xl font-semibold mb-4">Story</h2>
            <div className="space-y-6 text-lg">
              {story.content.map((line) => (
                <div 
                  key={line.id} 
                  ref={line.id === activeLineId ? activeLineRef : null}
                  className={`transition-all duration-300 p-2 rounded-md ${line.id === activeLineId ? 'active-line' : ''}`}
                >
                  <p className="mb-1">{line.text}</p>
                  <p className="text-sm text-muted-foreground italic">{line.translation}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mb-20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {prevStory ? (
              <Button 
                variant="outline" 
                onClick={() => navigate(`/story/${prevStory.id}`)}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous Story
              </Button>
            ) : (
              <div />
            )}
            
            {nextStory ? (
              <Button 
                variant="outline" 
                onClick={() => navigate(`/story/${nextStory.id}`)}
                className="flex items-center gap-2"
              >
                Next Story
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
      
      <AudioPlayer 
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        togglePlay={togglePlay}
        seek={seek}
        formatTime={formatTime}
      />
    </div>
  );
};

export default StoryDetail;
