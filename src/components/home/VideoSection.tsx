import { LazyYouTubeEmbed } from "@/components/ui/LazyYouTubeEmbed";

export function VideoSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <LazyYouTubeEmbed
            videoId="uag832_Ud0Y"
            title="Group Fit - Book In-Person Personal Training"
          />
        </div>
      </div>
    </section>
  );
}
