import React from 'react';
import { BookOpen } from 'lucide-react';

export const blogsData = [
  {
    id: 1,
    cat: "Dog Nutrition",
    title: "How to Choose the Right Food for Your Dog's Breed & Age",
    desc: "Not all dog food is created equal. Learn how breed size, activity level, and life stage affect your dog's nutritional needs.",
    img: "/images/blog_dog_nutrition.png",
    date: "June 24, 2026",
    author: "Priyal Gupta (Pet Nutritionist)",
    readTime: "5 mins read",
    content: [
      "Selecting the right food for your dog can feel overwhelming with the sheer number of options lining the shelves. However, simplifying it comes down to understanding three core components: breed size, physical activity level, and biological age.",
      "Puppies, for example, require nutrient-dense formulas rich in proteins, calcium, and essential fatty acids like DHA to fuel rapid skeletal and brain development. Transitioning them to adult food too early can cause joint issues, especially in larger breeds like Labradors or German Shepherds.",
      "Adult dogs require a maintenance formula that balances energy input with active output. A lapdog's caloric requirements are vastly different from those of an active guard dog. Senior dogs, conversely, benefit from diets with lower calories but enhanced joint support elements (glucosamine and chondroitin) and fiber to aid slower digestion.",
      "At PUPS Pet Care Store, we advocate matching the diet directly with clinical requirements. When in doubt, consulting our store specialists can help save testing time and ensure your dog gets exactly what their body needs."
    ]
  },
  {
    id: 2,
    cat: "Cat Care",
    title: "5 Signs Your Cat May Not Be Getting Enough Protein",
    desc: "Cats require a precise diet pattern. Low-protein plans can spark various coat and health deficiencies over time.",
    img: "/images/blog_cat_care.png",
    date: "June 18, 2026",
    author: "Dr. Amit Verma (Veterinary Consultant)",
    readTime: "4 mins read",
    content: [
      "Unlike dogs, cats are obligate carnivores. This means their bodies are biologically wired to process animal tissue and require high levels of protein to survive and thrive. A protein deficiency in a cat's diet can manifest quietly before leading to severe health complications.",
      "The first sign is often a dull, shedding, or dry coat. Protein is the building block of hair and skin, so a lack of it shows up externally first. Second, you might notice muscle wasting, particularly along the spine or hindquarters, as the body breaks down muscle to meet its basic protein needs.",
      "Third, look for chronic lethargy. While cats sleep a lot, a protein-deficient cat will lack the energy for play and basic jumps. Fourth, an increase in appetite might happen as their body drives them to eat more in a desperate attempt to acquire missing nutrients. Lastly, a weakened immune system making them susceptible to minor infections is a clear sign.",
      "Ensure you feed your cat premium wet and dry foods list formulas where a named meat source (like Salmon, Chicken, or Turkey) is the very first ingredient. Regular checks at our Gomti Nagar studio can help track weight and health profiles."
    ]
  },
  {
    id: 3,
    cat: "Grooming",
    title: "How Often Should You Groom Your Pet? A Breed-by-Breed Guide",
    desc: "Grooming frequency varies by coat standard and breed style. Get advice directly from our expert grooming specialists.",
    img: "/images/blog_grooming_guide.png",
    date: "May 29, 2026",
    author: "Rohan Sen (Lead Stylist, PUPS Gomti Nagar)",
    readTime: "6 mins read",
    content: [
      "Professional grooming isn't just about making your pet look cute; it's a vital part of their overall hygiene and wellness check. However, there's no one-size-fits-all schedule for visits. It heavily depends on their coat style, length, and texture.",
      "For double-coated breeds (like Golden Retrievers, Huskies, or Chow Chows), a professional grooming session every 6 to 8 weeks is highly recommended. This helps manage the thick undercoat, prevents painful matting, and controls heavy seasonal shedding.",
      "Curly or continuous-growth coats (like Poodles, Shih Tzus, and Lhasa Apsos) require trimming and professional grooming every 4 to 6 weeks. Without regular trims, their hair will tangle into tight mats that pull on the skin and trap moisture, leading to skin infections.",
      "Short-haired breeds (like Pugs, Beagles, or Labradors) need less frequent styling but benefit from a hygiene bath, professional de-shedding, and nail clip every 8 to 10 weeks. Regular nail trims are critical for all breeds to prevent joint pressure and posture issues during walks."
    ]
  }
];

export default function Tips({ onBlogClick }) {
  return (
    <section id="tips">
      <div className="container">
        <span className="section-eyebrow">
          <BookOpen size={12} /> Pet Care Tips
        </span>
        <h2 className="section-title">
          Expert advice for <em>happy, healthy pets</em>
        </h2>
        <div className="tips-grid">
          {blogsData.map(b => (
            <div 
              key={b.id} 
              className="tip-card reveal visible" 
              style={{ cursor: 'pointer' }}
              onClick={() => onBlogClick(b)}
            >
              <div className="tip-img" style={{ overflow: 'hidden', height: '180px' }}>
                <img 
                  src={b.img} 
                  alt={b.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                  className="blog-card-img"
                />
              </div>
              <div className="tip-body">
                <div className="tip-cat">{b.cat}</div>
                <h3 style={{ fontSize: '1.05rem', minHeight: '48px', margin: '8px 0' }}>{b.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--mid)', lineHeight: '1.5', minHeight: '60px' }}>
                  {b.desc}
                </p>
                <div className="tip-read" style={{ marginTop: '12px' }}>Read our guide →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
