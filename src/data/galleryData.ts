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
  technicalDetails?: string[];
  workType?: string;
}

export const galleryData: GalleryImage[] = [
  // Bathroom Remodeling Projects
  {
    id: 'bathroom-demo-1',
    src: '/IMG_7060.JPG',
    title: 'Bathroom Tile Demolition',
    description: 'This in-progress image shows a partially demoed bathroom wall where outdated green ceramic tiles are being removed. Tile adhesive and exposed cement board behind the vanity signal the start of a wall tile replacement. The work involves surface prep, demolition, and upcoming tiling around sensitive elements like a heater vent and bathtub edge—key areas in bathroom remodeling.',
    category: 'Bathroom Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Professional tile removal and surface preparation',
      'Careful work around heater vents and fixtures',
      'Proper cement board exposure for new installation',
      'Precision demolition to preserve structural elements'
    ],
    workType: 'Demolition and Preparation'
  },
  {
    id: 'bathroom-tile-complete-1',
    src: '/IMG_7061.JPG',
    title: 'Completed Bathroom Tile Installation',
    description: 'Completed tile installation on a bathroom wall. White ceramic square tiles have replaced the original green tile, and a decorative horizontal accent strip of glass mosaic has been added beneath the window. This shows expert tile layout alignment with countertop edges and clear integration with an existing window frame, heater vent, and tub wall.',
    category: 'Bathroom Remodeling',
    beforeAfter: 'after',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Professional white ceramic tile installation',
      'Decorative glass mosaic accent strip',
      'Perfect alignment with countertop edges',
      'Expert integration around window and fixtures'
    ],
    workType: 'Tile Installation'
  },
  {
    id: 'bathroom-tub-before',
    src: '/IMG_7084.JPG',
    title: 'Bathtub Before Refinishing',
    description: 'Before shot of a heavily worn bathtub. The surface is stained and discolored, with chipped enamel and visible grime along caulking lines. This image represents the starting condition before reglazing or refinishing work.',
    category: 'Bathroom Remodeling',
    beforeAfter: 'before',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Assessment of surface damage and staining',
      'Evaluation of enamel condition',
      'Preparation for professional reglazing',
      'Cost-effective alternative to replacement'
    ],
    workType: 'Assessment and Preparation'
  },
  {
    id: 'bathroom-tub-after',
    src: '/IMG_7085.JPG',
    title: 'Bathtub After Professional Refinishing',
    description: 'After bathtub reglazing. The tub has been resurfaced with a clean, glossy white finish, removing all prior staining and surface wear. This type of transformation restores usability without full replacement.',
    category: 'Bathroom Remodeling',
    beforeAfter: 'after',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Professional bathtub reglazing service',
      'Complete removal of stains and surface wear',
      'Durable, glossy white finish application',
      'Cost-effective restoration solution'
    ],
    workType: 'Refinishing and Restoration'
  },
  {
    id: 'bathroom-complete-renovation',
    src: '/IMG_7086.JPG',
    title: 'Complete Bathroom Renovation',
    description: 'Finished bathroom corner with tiled walls, updated vanity, and new toilet. Features a clean tile floor, a large mirror, and accent tile border along the wall. The final look is neutral, modern, and fully updated.',
    category: 'Bathroom Remodeling',
    beforeAfter: 'after',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Complete bathroom renovation with modern fixtures',
      'Professional tile work on walls and floors',
      'Updated vanity and mirror installation',
      'Neutral color scheme for timeless appeal'
    ],
    workType: 'Complete Renovation'
  },

  // Exterior Improvements
  {
    id: 'siding-complete-1',
    src: '/IMG_7062.JPG',
    title: 'Professional Vinyl Siding Installation',
    description: 'Final view of a vinyl siding installation. The siding has been fully installed, with clean alignment around window trim and soffits. Downspouts and lattice foundation skirting are intact, and landscaping cleanup appears underway. This photo shows the finished exterior envelope, confirming that the siding work meets code and curb appeal standards.',
    category: 'Siding Installation',
    beforeAfter: 'after',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Complete vinyl siding installation to code',
      'Precise alignment around windows and trim',
      'Professional soffit and downspout integration',
      'Landscaping cleanup and site restoration'
    ],
    workType: 'Exterior Siding'
  },
  {
    id: 'siding-progress-1',
    src: '/IMG_7063.JPG',
    title: 'Siding Replacement in Progress',
    description: 'Mid-project image of an exterior siding replacement. The old siding has been removed, exposing new OSB sheathing installed across the wall. Foam insulation boards are staged nearby, indicating preparation for thermal barrier upgrades. Window and porch trims are protected, and new framing is visible at structural transitions.',
    category: 'Siding Installation',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Professional siding removal and sheathing installation',
      'Foam insulation preparation for energy efficiency',
      'Protective measures for windows and trim',
      'Structural transition work and framing'
    ],
    workType: 'Siding Replacement'
  },
  {
    id: 'concrete-forms',
    src: '/IMG_7082.JPG',
    title: 'Concrete Sidewalk Preparation',
    description: 'Pre-pour stage of a sidewalk installation. Wooden edge forms are set in place and the gravel sub-base is compacted, providing a stable foundation for the concrete. This preparation is critical for long-term durability and drainage control.',
    category: 'Concrete & Walkways',
    beforeAfter: 'before',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Professional wooden edge form installation',
      'Properly compacted gravel sub-base',
      'Critical preparation for durability',
      'Proper drainage control measures'
    ],
    workType: 'Concrete Preparation'
  },
  {
    id: 'concrete-finished',
    src: '/IMG_7080.JPG',
    title: 'Fresh Concrete Sidewalk Installation',
    description: 'Freshly poured concrete sidewalk with smooth finish, still within the wooden edge forms. Clean lines and consistent surface texture suggest professional grading, leveling, and curing procedures were followed during the pour.',
    category: 'Concrete & Walkways',
    beforeAfter: 'after',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Professional concrete pouring and finishing',
      'Smooth, consistent surface texture',
      'Proper grading and leveling techniques',
      'Professional curing procedures'
    ],
    workType: 'Concrete Installation'
  },

  // Flooring Installation
  {
    id: 'flooring-lvp-wide',
    src: '/IMG_7064.JPG',
    title: 'Luxury Vinyl Plank Flooring Installation',
    description: 'Wide-angle view of newly installed vinyl plank flooring in a living room. The floorboards feature a realistic wood grain in warm brown tones and run lengthwise across the room for visual expansion. This image highlights even seam placement, staggered joints, and transition finishes around HVAC floor registers.',
    category: 'Flooring',
    beforeAfter: 'after',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Professional luxury vinyl plank installation',
      'Realistic wood grain texture in warm tones',
      'Strategic lengthwise layout for visual expansion',
      'Precise transitions around HVAC registers'
    ],
    workType: 'LVP Installation'
  },
  {
    id: 'flooring-lvp-detail',
    src: '/IMG_7065.JPG',
    title: 'LVP Flooring Detail Work',
    description: 'Different angle of the same LVP installation, capturing natural light across the flooring. The close-up detail showcases plank texture variation and proper layout across door thresholds and floor vents, ensuring continuity and durability. Ideal for homeowners wanting low-maintenance yet stylish surfaces.',
    category: 'Flooring',
    beforeAfter: 'after',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Detailed plank texture variation',
      'Professional threshold transitions',
      'Proper layout around floor vents',
      'Low-maintenance, durable surface solution'
    ],
    workType: 'Detail Finishing'
  },
  {
    id: 'carpet-installation-1',
    src: '/IMG_7081.JPG',
    title: 'Professional Carpet Installation',
    description: 'Room with freshly installed wall-to-wall carpet. The edges are tightly tucked against wood baseboards and thresholds, demonstrating a clean and professional finish suitable for office or residential settings.',
    category: 'Flooring',
    beforeAfter: 'after',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Wall-to-wall carpet installation',
      'Precise edge tucking against baseboards',
      'Professional threshold finishing',
      'Suitable for residential and office use'
    ],
    workType: 'Carpet Installation'
  },
  {
    id: 'carpet-installation-2',
    src: '/IMG_7083.JPG',
    title: 'Quality Carpet Installation',
    description: 'Additional room with newly installed carpet. Soft texture and uniform appearance indicate careful laying and stretching of carpet. Seamless integration with trim and corners for a finished look.',
    category: 'Flooring',
    beforeAfter: 'after',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Careful carpet laying and stretching',
      'Uniform appearance and soft texture',
      'Seamless trim and corner integration',
      'Professional finishing techniques'
    ],
    workType: 'Carpet Installation'
  },

  // Basement Finishing Projects
  {
    id: 'basement-media-finished',
    src: '/IMG_7066.JPG',
    title: 'Finished Basement Media Room',
    description: 'Finished media room setup in a basement featuring a mounted flat-screen TV and LED cove lighting around a dropped ceiling perimeter. The lighting adds ambiance and showcases clean ceiling drywall work, baseboard trim, and a dark-toned floor finish. Part of a basement finishing project designed for comfort and entertainment.',
    category: 'Basement Remodeling',
    beforeAfter: 'after',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Professional basement media room finishing',
      'LED cove lighting installation',
      'Clean ceiling drywall and trim work',
      'Entertainment-focused design and layout'
    ],
    workType: 'Basement Finishing'
  },
  {
    id: 'basement-media-progress',
    src: '/IMG_7067.JPG',
    title: 'Basement Media Room in Progress',
    description: 'Earlier stage of the same basement media room. TV and stand are present, but no lighting has been installed yet. Power cords and unfinished trim work suggest mid-project wiring and finishing. This image provides valuable before-and-after comparison within the same space.',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Mid-project basement finishing stage',
      'Electrical wiring and power installation',
      'Unfinished trim work in progress',
      'Before-and-after comparison documentation'
    ],
    workType: 'Construction Progress'
  },
  {
    id: 'basement-framing-insulation-1',
    src: '/IMG_7068.JPG',
    title: 'Basement Framing and Insulation',
    description: 'In-progress basement framing with exposed insulation installed between wall studs. Yellow electrical wiring is pulled and looped through structural members. Ceiling ducts and joists remain exposed, confirming this is the rough-in stage of a full basement renovation.',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Professional basement framing work',
      'Insulation installation between studs',
      'Electrical rough-in with proper wiring',
      'Coordination with existing ductwork'
    ],
    workType: 'Framing and Insulation'
  },
  {
    id: 'basement-framing-prep',
    src: '/IMG_7069.JPG',
    title: 'Basement Wall Preparation',
    description: 'More basement framing and insulation work. Concrete foundation wall behind studs has been painted white. Electrical boxes are installed, and wiring is partially routed. Ceiling and lighting prep remain to be completed. Indicates professional sequencing of wall prep before drywall goes up.',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Foundation wall preparation and painting',
      'Electrical box installation and wiring',
      'Professional construction sequencing',
      'Pre-drywall preparation work'
    ],
    workType: 'Wall Preparation'
  },
  {
    id: 'basement-electrical-detail',
    src: '/IMG_7070.JPG',
    title: 'Basement Electrical Rough-In',
    description: 'Close-up view of framed basement wall showing newly installed electrical wiring routed through pre-drilled studs. A glass block window is framed in with header support, and the wall surface is painted concrete block. The rough-in stage for outlets is underway using blue electrical boxes, signaling precise electrical layout before drywall.',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Precise electrical wiring through pre-drilled studs',
      'Glass block window framing with header support',
      'Professional outlet rough-in with blue boxes',
      'Code-compliant electrical layout'
    ],
    workType: 'Electrical Rough-In'
  },
  {
    id: 'basement-insulation-progress-1',
    src: '/IMG_7072.JPG',
    title: 'Large Basement Framing Project',
    description: 'Progress photo of a large basement framing and insulation job. Brown fiberglass batts have been partially installed between the studs, with visible wiring runs overhead and across the walls. Construction tools and furniture are present, indicating work in an occupied home.',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Large-scale basement framing project',
      'Fiberglass batt insulation installation',
      'Overhead and wall wiring coordination',
      'Work performed in occupied home'
    ],
    workType: 'Framing and Insulation'
  },
  {
    id: 'basement-wide-framing',
    src: '/IMG_7073.JPG',
    title: 'Multi-Room Basement Framing',
    description: 'Another wide shot of basement framing with visible fiberglass insulation, yellow Romex wiring, and open ceiling joists. Wiring is in place for lighting and outlets. The framing spans multiple rooms, indicating a large-scale basement finishing project.',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Multi-room basement framing layout',
      'Fiberglass insulation and Romex wiring',
      'Lighting and outlet electrical preparation',
      'Large-scale finishing project coordination'
    ],
    workType: 'Multi-Room Framing'
  },
  {
    id: 'basement-systems-coordination',
    src: '/IMG_7074.JPG',
    title: 'Basement Systems Integration',
    description: 'Expanded view of framed basement walls, with insulation in various stages of install. Electrical outlet boxes are placed consistently along the wall, and the basement ceiling remains open, showing ductwork and joists. This image demonstrates coordination of mechanical, insulation, and electrical systems during renovation.',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Coordinated mechanical and electrical systems',
      'Consistent electrical outlet placement',
      'Insulation installation in progress',
      'Professional systems integration'
    ],
    workType: 'Systems Coordination'
  },
  {
    id: 'basement-insulation-complete',
    src: '/IMG_7075.JPG',
    title: 'Basement Insulation Installation',
    description: 'Long wall view in basement with full insulation placed between studs. Clean, tight installation shows attention to thermal performance. Framing is ready for drywall, and multiple outlet boxes are evenly installed across the wall.',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Complete insulation installation between studs',
      'Attention to thermal performance',
      'Drywall-ready framing preparation',
      'Evenly spaced electrical outlet installation'
    ],
    workType: 'Insulation and Electrical'
  },
  {
    id: 'basement-pre-drywall-1',
    src: '/IMG_7076.JPG',
    title: 'Pre-Drywall Basement Preparation',
    description: 'Framing and insulation nearly completed. Blue electrical boxes are set, and ceiling prep continues with wiring for lighting. Unfinished flooring and stacked materials indicate active construction. This stage follows rough-in inspections and precedes drywall.',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Near-complete framing and insulation',
      'Electrical boxes and lighting preparation',
      'Post-inspection, pre-drywall stage',
      'Active construction with material staging'
    ],
    workType: 'Pre-Drywall Preparation'
  },
  {
    id: 'basement-infrastructure',
    src: '/IMG_7077.JPG',
    title: 'Basement Infrastructure Work',
    description: 'Angled basement view showing deep insulation coverage, open ceiling, and consistent electrical runs. This detailed infrastructure work forms the backbone of safe, comfortable living space below grade.',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Deep insulation coverage for comfort',
      'Consistent electrical infrastructure',
      'Below-grade living space preparation',
      'Safety and comfort-focused design'
    ],
    workType: 'Infrastructure Development'
  },
  {
    id: 'basement-large-project',
    src: '/IMG_7078.JPG',
    title: 'Large-Scale Basement Project',
    description: 'Large basement construction site showing insulation in full swing, multiple wiring drops from the ceiling, and structural framing details. The layout reveals multiple rooms and transitions — a full basement finishing project near completion of rough work.',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Large-scale basement construction',
      'Multiple ceiling wiring drops',
      'Multi-room layout and transitions',
      'Near-completion of rough work phase'
    ],
    workType: 'Large-Scale Construction'
  },
  {
    id: 'basement-final-prep',
    src: '/IMG_7079.JPG',
    title: 'Final Basement Preparation Stage',
    description: 'Final stage of pre-drywall basement work. Insulation is 90% installed. All outlet boxes are wired, and the concrete slab floor is prepped. The image shows a transition to the cleanup and wall board installation phase.',
    category: 'Basement Remodeling',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      '90% insulation installation complete',
      'All electrical outlets wired and ready',
      'Concrete slab floor preparation',
      'Transition to drywall installation phase'
    ],
    workType: 'Final Preparation'
  },

  // Roofing and Structural Work
  {
    id: 'roofing-tearoff',
    src: '/IMG_7071.JPG',
    title: 'Professional Roof Tear-Off and Inspection',
    description: 'Roofing crew on top of a residential home performing tear-off and deck inspection. Old roofing material is being removed down to the sheathing in preparation for new underlayment and shingle installation. This image demonstrates Crider Home Improvement\'s capability for full roof replacement or repair following storm or fire damage.',
    category: 'Roofing Services',
    beforeAfter: 'during',
    location: 'Rock Island, IL',
    technicalDetails: [
      'Professional roofing crew tear-off work',
      'Complete removal to sheathing level',
      'Deck inspection and preparation',
      'Storm and fire damage restoration capability'
    ],
    workType: 'Roof Replacement'
  }
];

export const categories = [
  'All Projects',
  'Basement Remodeling',
  'Bathroom Remodeling',
  'Siding Installation',
  'Flooring',
  'Concrete & Walkways',
  'Roofing Services',
  'Interior Finishing',
  'General Construction',
  'Project Management'
];