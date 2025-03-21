
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import StoryCard from "@/components/StoryCard";
import { stories, loadMoreStories, Story } from "@/data/stories";
import { Button } from "@/components/ui/button";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [allStories, setAllStories] = useState<Story[]>(stories);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchMoreStories = async () => {
      try {
        setIsLoading(true);
        const additionalStories = await loadMoreStories();
        
        // Only update if we got new stories
        if (additionalStories.length > stories.length) {
          setAllStories(additionalStories);
          toast({
            title: "Stories loaded",
            description: `${additionalStories.length - stories.length} additional stories loaded successfully.`
          });
        }
      } catch (error) {
        console.error("Failed to load additional stories:", error);
        toast({
          title: "Error loading stories",
          description: "Failed to load additional stories. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMoreStories();
  }, [toast]);
  
  const levels = [
    { id: "all", label: "All" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ];
  
  const filteredStories = allStories.filter(story => {
    const matchesFilter = activeFilter === "all" || story.level === activeFilter;
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         story.titleTranslation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-6 px-4 md:py-8">
        <section className="mb-8 max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in">
            Apprendre le français <span className="text-french-blue">facilement</span>
          </h2>
          <p className="text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Improve your French with fun, engaging stories designed for all levels.
          </p>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search stories..."
              className="pl-10 bg-card border-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>
        
        <section className="mb-6 max-w-[800px] mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <Button
                key={level.id}
                variant={activeFilter === level.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(level.id)}
                className="rounded-full"
              >
                {level.label}
              </Button>
            ))}
          </div>
        </section>
        
        <section className="max-w-[800px] mx-auto">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredStories.length > 0 ? (
                filteredStories.map((story, index) => (
                  <StoryCard key={story.id} story={story} index={index} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">No stories found. Try adjusting your search.</p>
                </div>
              )}
            </div>
          )}
          <div className="text-center text-muted-foreground text-sm mt-6">
            Showing {filteredStories.length} of {allStories.length} stories
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
