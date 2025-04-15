'use client';

import { Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface SocialShareButtonsProps {
  title: string;
  excerpt: string;
}

export default function SocialShareButtons({ title, excerpt }: SocialShareButtonsProps) {
  const [url, setUrl] = useState('');
  
  useEffect(() => {
    // Set the URL in useEffect since window is only available client-side
    setUrl(window.location.href);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: excerpt,
        url
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link in die Zwischenablage kopiert!");
    }
  };

  return (
    <>
      <Button 
        variant="outline" 
        size="sm" 
        className="flex items-center"
        onClick={handleShare}
      >
        <Share2 className="mr-2 h-4 w-4" />
        Teilen
      </Button>
      <Button variant="outline" size="sm" className="flex items-center">
        <Bookmark className="mr-2 h-4 w-4" />
        Speichern
      </Button>
    </>
  );
} 