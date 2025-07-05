export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  category: string;
  beforeAfter?: 'before' | 'after' | 'during';
  projectValue?: string;
  location?: string;
  date?: string;
}

export const galleryData: GalleryImage[] = [
  // Basement Renovation Project
  {
    id: 'basement-1',
    src: '/IMG_7070.JPG',
    title: 'Basement Framing Progress',
    description: 'Professional framing work with proper wall construction and storage solutions',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  },
  {
    id: 'basement-2',
    src: '/IMG_7072.JPG',
    title: 'Basement Framing & Electrical',
    description: 'Structural framing with electrical rough-in work completed to code',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  },
  {
    id: 'basement-3',
    src: '/IMG_7073.JPG',
    title: 'Basement Floor Preparation',
    description: 'Concrete floor preparation and room layout with proper spacing',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  },
  {
    id: 'basement-4',
    src: '/IMG_7075.JPG',
    title: 'Basement Structural Work',
    description: 'Advanced framing and structural support installation',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  },
  {
    id: 'basement-5',
    src: '/IMG_7077.JPG',
    title: 'Basement Construction Progress',
    description: 'Continued basement renovation with professional craftsmanship',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  },
  {
    id: 'basement-6',
    src: '/IMG_7079.JPG',
    title: 'Basement Renovation Completion',
    description: 'Near completion of basement transformation project',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  },

  // Exterior & Concrete Work
  {
    id: 'concrete-1',
    src: '/IMG_7080.JPG',
    title: 'Sidewalk Preparation',
    description: 'Professional concrete forms and gravel base preparation',
    category: 'Concrete & Walkways',
    beforeAfter: 'before',
    location: 'Rock Island, IL'
  },
  {
    id: 'concrete-2',
    src: '/IMG_7082.JPG',
    title: 'Fresh Concrete Sidewalk',
    description: 'Newly poured concrete sidewalk with smooth finish and proper curing',
    category: 'Concrete & Walkways',
    beforeAfter: 'after',
    location: 'Rock Island, IL'
  },

  // Interior Flooring
  {
    id: 'flooring-1',
    src: '/IMG_7081.JPG',
    title: 'New Carpet Installation',
    description: 'Professional carpet installation with clean edges and proper transitions',
    category: 'Flooring',
    beforeAfter: 'after',
    location: 'Rock Island, IL'
  },
  {
    id: 'flooring-2',
    src: '/IMG_7083.JPG',
    title: 'Completed Carpet Work',
    description: 'Finished carpet installation creating a warm, updated living space',
    category: 'Flooring',
    beforeAfter: 'after',
    location: 'Rock Island, IL'
  },
  {
    id: 'flooring-3',
    src: '/IMG_7065.JPG',
    title: 'Wood-Look Flooring',
    description: 'Beautiful wood-look laminate flooring installation in living area',
    category: 'Flooring',
    beforeAfter: 'after',
    location: 'Rock Island, IL'
  },
  {
    id: 'flooring-4',
    src: '/IMG_7066.JPG',
    title: 'Living Room Floor Upgrade',
    description: 'Complete living room flooring transformation with modern materials',
    category: 'Flooring',
    beforeAfter: 'after',
    location: 'Rock Island, IL'
  },

  // Bathroom Renovations
  {
    id: 'bathroom-1',
    src: '/IMG_7060.JPG',
    title: 'Bathroom Before Renovation',
    description: 'Original bathroom condition with outdated tile and fixtures',
    category: 'Bathroom Remodeling',
    beforeAfter: 'before',
    location: 'Rock Island, IL'
  },
  {
    id: 'bathroom-2',
    src: '/IMG_7061.JPG',
    title: 'Bathroom Tile Upgrade',
    description: 'Fresh white tiles with decorative glass border accent',
    category: 'Bathroom Remodeling',
    beforeAfter: 'after',
    location: 'Rock Island, IL'
  },
  {
    id: 'bathroom-3',
    src: '/IMG_7084.JPG',
    title: 'Tub Before Refinishing',
    description: 'Heavily stained and discolored bathtub requiring restoration',
    category: 'Bathroom Remodeling',
    beforeAfter: 'before',
    location: 'Rock Island, IL'
  },
  {
    id: 'bathroom-4',
    src: '/IMG_7085.JPG',
    title: 'Tub After Refinishing',
    description: 'Professionally refinished tub with smooth, clean white coating',
    category: 'Bathroom Remodeling',
    beforeAfter: 'after',
    location: 'Rock Island, IL'
  },
  {
    id: 'bathroom-5',
    src: '/IMG_7086.JPG',
    title: 'Complete Bathroom Renovation',
    description: 'Finished bathroom with new vanity, tiles, and modern fixtures',
    category: 'Bathroom Remodeling',
    beforeAfter: 'after',
    location: 'Rock Island, IL'
  },

  // Exterior Siding Work
  {
    id: 'siding-1',
    src: '/IMG_7062.JPG',
    title: 'Siding Before Renovation',
    description: 'Original vinyl siding with lattice skirting showing age',
    category: 'Siding Installation',
    beforeAfter: 'before',
    location: 'Rock Island, IL'
  },
  {
    id: 'siding-2',
    src: '/IMG_7063.JPG',
    title: 'Siding Removal Process',
    description: 'Professional siding removal exposing fresh sheathing for upgrades',
    category: 'Siding Installation',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  },
  {
    id: 'siding-3',
    src: '/IMG_7064.JPG',
    title: 'Siding Preparation Work',
    description: 'Thermal insulation preparation for improved energy efficiency',
    category: 'Siding Installation',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  },

  // Entertainment & Living Spaces
  {
    id: 'entertainment-1',
    src: '/IMG_7067.JPG',
    title: 'Entertainment Area Setup',
    description: 'TV console installation and entertainment area organization',
    category: 'Interior Finishing',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  },
  {
    id: 'entertainment-2',
    src: '/IMG_7068.JPG',
    title: 'Living Space Organization',
    description: 'Organized entertainment setup with proper cable management',
    category: 'Interior Finishing',
    beforeAfter: 'after',
    location: 'Rock Island, IL'
  },
  {
    id: 'misc-1',
    src: '/IMG_7069.JPG',
    title: 'Project Documentation',
    description: 'Detailed project planning and documentation process',
    category: 'Project Management',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  },
  {
    id: 'misc-2',
    src: '/IMG_7071.JPG',
    title: 'Construction Progress',
    description: 'Ongoing construction work with attention to detail',
    category: 'General Construction',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  },
  {
    id: 'misc-3',
    src: '/IMG_7074.JPG',
    title: 'Quality Control Check',
    description: 'Regular quality inspections ensure code compliance',
    category: 'Project Management',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  },
  {
    id: 'misc-4',
    src: '/IMG_7076.JPG',
    title: 'Professional Installation',
    description: 'Expert installation techniques and quality materials',
    category: 'General Construction',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  },
  {
    id: 'misc-5',
    src: '/IMG_7078.JPG',
    title: 'Finishing Details',
    description: 'Attention to finishing details that make the difference',
    category: 'Interior Finishing',
    beforeAfter: 'during',
    location: 'Rock Island, IL'
  }
];

export const categories = [
  'All Projects',
  'Basement Remodeling',
  'Bathroom Remodeling',
  'Siding Installation',
  'Flooring',
  'Concrete & Walkways',
  'Interior Finishing',
  'General Construction',
  'Project Management'
];