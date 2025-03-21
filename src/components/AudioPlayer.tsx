
import { Pause, Play, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface AudioPlayerProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  togglePlay: () => void;
  seek: (time: number) => void;
  formatTime: (time: number) => string;
}

const AudioPlayer = ({
  isPlaying,
  currentTime,
  duration,
  togglePlay,
  seek,
  formatTime,
}: AudioPlayerProps) => {
  const handleSeek = (values: number[]) => {
    seek(values[0]);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t p-3 backdrop-blur-lg bg-background/90 z-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          <div className="flex-1">
            <Slider
              value={[currentTime]}
              min={0}
              max={duration || 100}
              step={0.01}
              onValueChange={handleSeek}
              className="my-1.5"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 w-20">
            <Volume2 className="w-4 h-4" />
            <Slider defaultValue={[80]} max={100} step={1} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
