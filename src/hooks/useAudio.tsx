
import { useState, useEffect, useRef } from "react";
import { StoryLine } from "../data/stories";

export const useAudio = (audioFile: string, content: StoryLine[]) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeLineId, setActiveLineId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    const audio = new Audio(audioFile);
    audioRef.current = audio;
    
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };
    
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      audio.currentTime = 0;
      setCurrentTime(0);
      setActiveLineId(null);
    };
    
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    
    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioFile]);
  
  // Update active line based on current time
  useEffect(() => {
    if (!content.length) return;
    
    const activeLine = content.find(line => 
      line.audio && 
      currentTime >= line.audio.startTime && 
      currentTime <= line.audio.endTime
    );
    
    if (activeLine) {
      setActiveLineId(activeLine.id);
    } else {
      setActiveLineId(null);
    }
  }, [currentTime, content]);
  
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  const seek = (time: number) => {
    if (!audioRef.current) return;
    
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };
  
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  return {
    isPlaying,
    currentTime,
    duration,
    activeLineId,
    togglePlay,
    seek,
    formatTime,
  };
};
