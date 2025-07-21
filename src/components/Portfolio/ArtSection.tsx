import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Palette, Music, Heart, Plus } from "lucide-react";
import { useState } from "react";

const ArtSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Placeholder for art categories and images
  const artCategories = [
    { id: "all", name: "All", icon: Heart },
    { id: "singing", name: "Singing", icon: Music },
    { id: "equestrian", name: "Equestrian", icon: Camera },
    { id: "photography", name: "Photography", icon: Camera },
    { id: "digital", name: "Digital Art", icon: Palette },
  ];

  // Placeholder art items - these will be replaced with actual images
  const artItems = [
    {
      id: 1,
      title: "Vocal Performance",
      category: "singing",
      description: "Classical music performance at college event",
      image: "/placeholder-art-1.jpg", // To be replaced with actual images
      date: "2024"
    },
    {
      id: 2,
      title: "Equestrian Training",
      category: "equestrian", 
      description: "Training session at the riding academy",
      image: "/placeholder-art-2.jpg", // To be replaced with actual images
      date: "2024"
    },
    {
      id: 3,
      title: "Nature Photography",
      category: "photography",
      description: "Landscape photography during weekend trip",
      image: "/placeholder-art-3.jpg", // To be replaced with actual images
      date: "2024"
    },
    {
      id: 4,
      title: "Digital Illustration",
      category: "digital",
      description: "Character design and digital painting",
      image: "/placeholder-art-4.jpg", // To be replaced with actual images
      date: "2024"
    },
    {
      id: 5,
      title: "Concert Performance",
      category: "singing",
      description: "Solo performance at cultural festival",
      image: "/placeholder-art-5.jpg", // To be replaced with actual images
      date: "2023"
    },
    {
      id: 6,
      title: "Horse Competition",
      category: "equestrian",
      description: "Local equestrian competition participation",
      image: "/placeholder-art-6.jpg", // To be replaced with actual images
      date: "2023"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? artItems 
    : artItems.filter(item => item.category === selectedCategory);

  return (
    <section id="art" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-6">
            Creative <span className="gradient-text">Arts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond coding - exploring creativity through music, equestrian sports, and visual arts
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {artCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`
                  flex items-center gap-2 transition-all duration-300
                  ${selectedCategory === category.id 
                    ? "bg-gradient-primary shadow-elegant" 
                    : "glass border-primary/30 hover:bg-primary/10"
                  }
                `}
                onClick={() => setSelectedCategory(category.id)}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Art Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <Card 
              key={item.id}
              className="group shadow-elegant hover:shadow-float transition-all duration-500 overflow-hidden"
            >
              <div className="relative">
                {/* Placeholder Image Container */}
                <div className="aspect-square bg-gradient-secondary flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-8">
                    <Camera className="w-16 h-16 text-white/80 mx-auto mb-4" />
                    <p className="text-white/80 font-medium">{item.title}</p>
                    <p className="text-white/60 text-sm mt-2">Image Placeholder</p>
                  </div>
                  
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Button 
                      variant="secondary" 
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"
                    >
                      View Full Size
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <Badge 
                  className="absolute top-3 right-3 bg-white/90 text-primary"
                  variant="secondary"
                >
                  {artCategories.find(cat => cat.id === item.category)?.name}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                  <Heart className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add New Art Placeholder */}
        <div className="text-center">
          <Card className="inline-block shadow-elegant hover:shadow-float transition-all duration-500 group cursor-pointer">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Plus className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4">
                  More Art Coming Soon
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  I'm constantly creating new art and documenting my creative journey. 
                  Check back soon for more updates!
                </p>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  Gallery Expanding
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Instructions for adding images */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-playfair font-bold mb-4 text-primary">
                📸 Ready to Add Your Art?
              </h3>
              <p className="text-muted-foreground mb-4">
                This section is ready for your creative works! You can easily add your art photos by:
              </p>
              <div className="text-left max-w-2xl mx-auto space-y-2 text-sm text-muted-foreground">
                <p>• Replacing placeholder images with your actual art photos</p>
                <p>• Adding new categories for different types of creative work</p>
                <p>• Updating titles and descriptions for each piece</p>
                <p>• Including dates and additional metadata</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArtSection;