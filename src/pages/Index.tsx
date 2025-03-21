
import { useState } from "react";
import Header from "@/components/Header";
import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const levels = [
    { id: "all", label: "All" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ];
  
  const filteredStories = stories.filter(story => {
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
        </section>
      </main>
    </div>
  );
};

export default Index;
