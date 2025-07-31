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
    
    { id: "equestrian", name: "Equestrian", icon: Camera },
    
    { id: "digital", name: "Digital Art", icon: Palette },
  ];

  // Placeholder art items - these will be replaced with actual images
  const artItems = [
    
    {
      id: 1,
      title: "Equestrian Training",
      category: "equestrian", 
      description: "Training session at the riding academy",
      image: "/Eq1.jpeg", // To be replaced with actual images
      date: "2024"
    },
    {
      id: 2,
      title: "Equestrian Training",
      category: "equestrian", 
      description: "Training session at the riding academy",
      image: "/eq2.jpeg", // To be replaced with actual images
      date: "2025"
    },
   
    {
      id: 3,
      title: "Digital Illustration",
      category: "digital",
      description: "Character design and digital painting",
      image: "/art1.jpg", // To be replaced with actual images
      date: "2024"
    },
    {
      id: 4,
      title: "Digital Illustration",
      category: "digital",
      description: "Character design and digital painting",
      image: "/ar2.jpeg", // To be replaced with actual images
      date: "2024"
    },
    {
      id: 5,
      title: "Digital Illustration",
      category: "digital",
      description: "Character design and digital painting",
      image: "/art3.jpeg", // To be replaced with actual images
      date: "2024"
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
                {/* Actual Image Display */}
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback placeholder (hidden by default) */}
                  <div className="aspect-square bg-gradient-secondary items-center justify-center relative overflow-hidden absolute inset-0" style={{display: 'none'}}>
                    <div className="text-center p-8">
                      <Camera className="w-16 h-16 text-white/80 mx-auto mb-4" />
                      <p className="text-white/80 font-medium">{item.title}</p>
                      <p className="text-white/60 text-sm mt-2">Image not found</p>
                    </div>
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

        

        
      </div>
    </section>
  );
};

export default ArtSection;