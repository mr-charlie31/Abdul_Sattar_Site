export interface Product {
  id: string;
  name: string;
  displayName: string;
  location: string;
  category: string;
  price: string;
  image: string;
  description: string;
  effects: string;
  usage: string;
  quality: string;
}

const products: Product[] = [
  {
    id: 'thc-tablets',
    name: 'THC tablets',
    displayName: 'THC Tablets',
    location: 'Dera Dubai',
    category: 'Medical',
    price: '$150 - $250',
    image: 'https://readdy.ai/api/search-image?query=Premium%20pharmaceutical%20THC%20tablets%20pills%20in%20blister%20pack%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20medical%20product%20aesthetic%2C%20sharp%20focus%20crystal%20clear%20details%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20pharmaceutical%20grade%20packaging&width=600&height=600&seq=dxb-white-thc-tablets-v2&orientation=squarish',
    description: 'Premium pharmaceutical-grade THC tablets offering precise and consistent dosing. Each tablet is carefully formulated to provide a reliable experience with predictable effects. Ideal for those seeking a discreet and convenient consumption method without the need for smoking or vaporizing.',
    effects: 'Gradual onset with long-lasting effects. Provides deep relaxation, mild euphoria, and relief from discomfort. Effects typically begin within 30-60 minutes and can last 4-6 hours depending on dosage and individual tolerance.',
    usage: 'Take 1 tablet orally with water. Start with a low dose to assess tolerance. Do not exceed recommended dosage. Store in a cool, dry place away from direct sunlight. Keep out of reach of children.',
    quality: 'Pharmaceutical-grade manufacturing with strict quality control. Each batch is tested for potency and purity. Consistent dosage in every tablet ensures a reliable experience every time.',
  },
  {
    id: 'coocoo',
    name: 'coocoo or coco',
    displayName: 'Coocoo / Coco',
    location: 'Al Quoz',
    category: 'coocoo',
    price: '$200 - $400',
    image: 'https://readdy.ai/api/search-image?query=Premium%20white%20crystalline%20powder%20substance%20in%20clear%20glass%20vial%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20luxury%20product%20aesthetic%2C%20sharp%20focus%20crystal%20clear%20details%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20reflective%20glass%20container&width=600&height=600&seq=dxb-white-coocoo-v2&orientation=squarish',
    description: 'The highest purity product available, sourced from premium suppliers and verified for exceptional quality. This product delivers a clean, potent experience that discerning customers have come to expect. Each batch undergoes rigorous testing to ensure consistency and purity.',
    effects: 'Intense euphoric onset with heightened energy and alertness. Produces a powerful sense of confidence and well-being. Effects are fast-acting and can last 30-60 minutes depending on dosage and individual tolerance.',
    usage: 'Handle with care. Start with minimal amounts to assess potency. Store in a cool, dry place in an airtight container. For responsible use only. Not for novice users.',
    quality: 'Triple-tested for purity and quality. Sourced from premium international suppliers. Every batch is verified for consistency before being made available to customers.',
  },
  {
    id: 'hash',
    name: '|-|@$Hi$H',
    displayName: 'Hash',
    location: 'H@$Hi$H',
    category: 'Hash',
    price: '$160 - $590',
    image: 'https://readdy.ai/api/search-image?query=Premium%20dark%20cannabis%20hash%20resin%20block%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20product%20aesthetic%2C%20sharp%20focus%20showing%20rich%20texture%20and%20trichomes%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20natural%20organic%20material&width=600&height=600&seq=dxb-white-hash-v2&orientation=squarish',
    description: 'Premium quality cannabis hash made from carefully selected strains using traditional and modern extraction methods. This rich, aromatic resin delivers a potent and flavorful experience. Available in multiple grades to suit different preferences and budgets.',
    effects: 'Deep body relaxation combined with a pleasant mental calm. Rich, full-bodied experience that soothes muscles and eases the mind. Effects are immediate when smoked and can last 2-3 hours. Known for its smooth, mellow high.',
    usage: 'Can be crumbled and smoked in a pipe, mixed with flower, or vaporized. Start with a small amount as potency can vary. Store in a cool, dark place in an airtight container to preserve freshness and aroma.',
    quality: 'Premium grade resin extracted from top-quality cannabis plants. Carefully aged and cured for optimal flavor and potency. Each batch is hand-inspected for texture, aroma, and consistency.',
  },
  {
    id: 'mahuu-meds-2g',
    name: '/\\/\\AHUU Meds 2g',
    displayName: 'MAHUU Meds 2g',
    location: 'Dera Dubai',
    category: 'Vape',
    price: '$150 - $250',
    image: 'https://readdy.ai/api/search-image?query=Premium%20cannabis%20vape%20cartridge%20with%20golden%20oil%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20vape%20aesthetic%2C%20sharp%20focus%20showing%20oil%20clarity%20and%20quality%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20modern%20vape%20hardware&width=600&height=600&seq=dxb-white-mahuu-v2&orientation=squarish',
    description: 'Premium medical-grade cannabis vape cartridge containing 2 grams of high-quality cannabis oil. This cartridge delivers a clean, flavorful vapor with a balanced cannabinoid profile. Perfect for those seeking a discreet and convenient consumption method with medical-grade quality.',
    effects: 'Smooth, clean vapor with rapid onset of effects. Provides a balanced experience suitable for both daytime and evening use. Fast-acting relief with effects that can be felt within minutes and last 1-3 hours.',
    usage: 'Attach to any standard 510-thread battery. Start with small puffs and wait to assess effects before consuming more. Store upright in a cool place. Keep away from extreme heat.',
    quality: 'Medical-grade cannabis oil extracted using state-of-the-art CO2 extraction methods. Each cartridge is lab-tested for purity, potency, and the absence of harmful additives. Consistent performance from first puff to last.',
  },
  {
    id: 'sativa',
    name: '|/\\|EED$ $ativa',
    displayName: 'Sativa Strain',
    location: 'Al Quoz',
    category: 'Weed',
    price: '$160 - $590',
    image: 'https://readdy.ai/api/search-image?query=Premium%20cannabis%20sativa%20buds%20flowers%20with%20vibrant%20green%20color%20and%20orange%20pistils%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20product%20aesthetic%2C%20sharp%20focus%20showing%20trichomes%20and%20bud%20structure%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20fresh%20natural%20flower&width=600&height=600&seq=dxb-white-sativa-v2&orientation=squarish',
    description: 'Premium Sativa-dominant cannabis flower with uplifting and energizing effects. These beautiful buds are carefully cultivated and cured to preserve their unique terpene profile and potency. Known for its bright, citrusy aroma and cerebral high, this strain is perfect for daytime use and creative activities.',
    effects: 'Uplifting, energizing, and creative cerebral high. Promotes focus, creativity, and sociability. Ideal for daytime use when you need to stay active and productive. Provides a clear-headed experience without heavy body sedation.',
    usage: 'Can be smoked in a pipe, rolled into a joint, or vaporized. Start with a small amount to assess potency. Store in an airtight container in a cool, dark place to maintain freshness and potency.',
    quality: 'Hand-trimmed, slow-cured premium buds. Cultivated under optimal conditions with careful attention to nutrient profiles and harvest timing. Each batch is inspected for appearance, aroma, and moisture content.',
  },
  {
    id: 'tramadol-200mg',
    name: 'TR@M@DOOLL 200 mg',
    displayName: 'Tramadol 200mg',
    location: 'H@$Hi$H',
    category: 'Pharma',
    price: '$100 - $180',
    image: 'https://readdy.ai/api/search-image?query=Premium%20pharmaceutical%20pain%20relief%20tablets%20in%20blister%20pack%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20medical%20product%20aesthetic%2C%20sharp%20focus%20crystal%20clear%20details%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20pharmaceutical%20packaging%20with%20pills&width=600&height=600&seq=dxb-white-tramadol-v2&orientation=squarish',
    description: 'Pharmaceutical-grade pain relief medication providing effective relief for moderate to severe discomfort. These 200mg tablets are manufactured to the highest standards, ensuring consistent potency and reliable results with every dose.',
    effects: 'Provides effective relief from moderate to severe pain. Onset typically within 30-60 minutes with effects lasting 4-6 hours. Produces a sense of calm and well-being while targeting discomfort at its source.',
    usage: 'Take as directed. Swallow whole with water. Do not crush or chew. Do not exceed the recommended dosage. Consult a healthcare professional before use. Store at room temperature away from moisture.',
    quality: 'Pharmaceutical-grade manufacturing in certified facilities. Each tablet contains precisely 200mg of active ingredient. Stringent quality control ensures batch-to-batch consistency and purity.',
  },
  {
    id: 'hybrid',
    name: '|/\\|EED$ Hybrid',
    displayName: 'Hybrid Strain',
    location: 'Dera Dubai',
    category: 'Weed',
    price: '$160 - $590',
    image: 'https://readdy.ai/api/search-image?query=Premium%20cannabis%20hybrid%20buds%20flowers%20with%20rich%20green%20purple%20hues%20and%20frosty%20trichomes%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20product%20aesthetic%2C%20sharp%20focus%20showing%20bud%20density%20and%20crystal%20coverage%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting&width=600&height=600&seq=dxb-white-hybrid-v2&orientation=squarish',
    description: 'Premium Hybrid cannabis flower offering the perfect balance of both Indica and Sativa effects. These dense, trichome-covered buds deliver a well-rounded experience that combines physical relaxation with mental clarity. The best of both worlds in every bud.',
    effects: 'Balanced experience combining body relaxation with mental uplift. Starts with a pleasant cerebral buzz that gradually settles into full-body comfort. Versatile effects suitable for any time of day. Good for both social situations and solo relaxation.',
    usage: 'Can be smoked, vaporized, or used in edibles. The balanced profile makes it versatile for various consumption methods. Start with a small amount to gauge your personal response. Store properly to maintain freshness.',
    quality: 'Expertly cultivated hybrid genetics selected for their balanced cannabinoid and terpene profiles. Each bud is hand-trimmed and slow-cured to perfection. Consistent potency and flavor profile across batches.',
  },
  {
    id: 'hybrid-mix',
    name: 'Hybrid. $ativa.Indcia',
    displayName: 'Hybrid Sativa Indica Mix',
    location: 'Al Quoz',
    category: 'Weed',
    price: '$160 - $590',
    image: 'https://readdy.ai/api/search-image?query=Premium%20mixed%20cannabis%20strains%20variety%20buds%20assortment%20with%20different%20colors%20shapes%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20product%20aesthetic%2C%20sharp%20focus%20showing%20strain%20diversity%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20collection%20of%20premium%20flowers&width=600&height=600&seq=dxb-white-mix-v2&orientation=squarish',
    description: 'A premium blend of Hybrid, Sativa, and Indica strains carefully selected to create a versatile and complete cannabis experience. This curated mix gives you access to multiple strain profiles in one convenient package, allowing you to choose the right effect for any occasion.',
    effects: 'Full spectrum experience with access to Sativa energy, Indica relaxation, and Hybrid balance. The variety allows users to tailor their experience based on time of day and desired effects. From creative stimulation to deep relaxation — all in one collection.',
    usage: 'Choose the strain that matches your desired effects. Sativas for daytime, Indicas for evening, and Hybrids for any time. Smoke, vaporize, or use as desired. Store each strain separately to preserve individual terpene profiles.',
    quality: 'Each strain in the mix is independently sourced, tested, and verified for quality. Only premium buds meeting strict visual and aromatic standards are included. A truly curated selection for the discerning customer.',
  },
  {
    id: 'morocco',
    name: '|/\\|EED$ Moraco',
    displayName: 'Morocco Strain',
    location: 'H@$Hi$H',
    category: 'Weed',
    price: '$160 - $590',
    image: 'https://readdy.ai/api/search-image?query=Premium%20authentic%20moroccan%20cannabis%20buds%20flowers%20with%20distinctive%20golden%20amber%20hues%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20product%20aesthetic%2C%20sharp%20focus%20showing%20unique%20bud%20structure%20and%20trichomes%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20exotic%20imported%20flower&width=600&height=600&seq=dxb-white-morocco-v2&orientation=squarish',
    description: 'Authentic Moroccan cannabis strain with a unique flavor profile and exceptional effects. This imported strain carries the heritage of traditional Moroccan cultivation methods combined with modern growing techniques. A rare and sought-after variety with distinctive characteristics.',
    effects: 'Unique aromatic experience with a smooth, flavorful smoke. Provides a warm, comforting body sensation paired with a gentle mental clarity. The effects are well-balanced, making it suitable for both relaxation and social settings.',
    usage: 'Best enjoyed in its natural form to fully appreciate the unique flavor profile. Can be smoked or vaporized. The distinct taste makes it a favorite for connoisseurs. Store in optimal conditions to preserve the delicate terpenes.',
    quality: 'Imported directly from trusted sources using traditional cultivation methods passed down through generations. Each batch is carefully inspected upon arrival. The distinctive aroma and appearance are hallmarks of authentic Moroccan genetics.',
  },
  {
    id: 'vapes',
    name: '\\/\\@pes',
    displayName: 'Vape Pens',
    location: 'H@$Hi$H',
    category: 'Vape',
    price: '$150 - $250',
    image: 'https://readdy.ai/api/search-image?query=Premium%20sleek%20cannabis%20vape%20pen%20device%20modern%20design%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20vape%20aesthetic%2C%20sharp%20focus%20showing%20device%20details%20and%20finish%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20contemporary%20hardware%20design&width=600&height=600&seq=dxb-white-vapes-v2&orientation=squarish',
    description: 'Sleek, modern cannabis vape pens designed for discretion and performance. These devices deliver clean, flavorful vapor in a compact form factor. Pre-filled and ready to use, they offer the ultimate in convenience for on-the-go consumption.',
    effects: 'Fast-acting effects with clean, smooth vapor delivery. Each pen is calibrated for optimal temperature to preserve flavor and potency. Effects are felt within minutes and provide a consistent, enjoyable experience.',
    usage: 'Ready to use right out of the box. Simply inhale to activate. No buttons, no settings, no hassle. Each pen provides approximately 200 puffs. Dispose of responsibly when finished.',
    quality: 'Premium hardware with ceramic heating elements for pure, clean vapor. Each pen is individually tested before packaging. High-quality cannabis oil with no cutting agents or harmful additives.',
  },
  {
    id: 'pankman-vapes',
    name: 'Pankman \\/\\@pes',
    displayName: 'Pankman Vapes',
    location: 'H@$Hi$H',
    category: 'Vape',
    price: '$150 - $250',
    image: 'https://readdy.ai/api/search-image?query=Premium%20branded%20cannabis%20vape%20device%20in%20elegant%20packaging%20box%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20vape%20aesthetic%2C%20sharp%20focus%20showing%20packaging%20details%20and%20branding%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20luxury%20product%20presentation&width=600&height=600&seq=dxb-white-pankman-v2&orientation=squarish',
    description: 'Pankman branded vape devices featuring specialized formulations for targeted therapeutic effects. These premium vape pens combine cutting-edge hardware with carefully crafted oil formulations to deliver a superior vaping experience with consistent, reliable results.',
    effects: 'Smooth, flavorful vapor with effects tailored to the specific formulation. Each variant delivers a unique experience ranging from relaxing to uplifting. Fast onset with effects lasting 1-2 hours per session.',
    usage: 'Inhale gently to activate the automatic draw system. Start with small puffs and wait between inhalations. Each device is pre-charged and pre-filled for immediate use. Store at room temperature.',
    quality: 'Pankman branded devices manufactured to the highest standards. Each unit undergoes quality assurance testing. Premium cannabis oil sourced from select cultivators. No fillers, no additives, just pure quality.',
  },
  {
    id: 'irani-alkoz',
    name: '|/\\|EED$ irani-alkoz',
    displayName: 'Irani Alkoz',
    location: 'H@$Hi$H',
    category: 'Weed',
    price: '$160 - $590',
    image: 'https://readdy.ai/api/search-image?query=Premium%20exotic%20iranian%20cannabis%20buds%20with%20distinctive%20aroma%20dense%20structure%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20product%20aesthetic%2C%20sharp%20focus%20showing%20unique%20bud%20characteristics%20and%20crystal%20coverage%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20rare%20imported%20flower&width=600&height=600&seq=dxb-white-irani-v2&orientation=squarish',
    description: 'Rare Iranian cannabis strain with a distinctive aroma profile and potent effects. This exotic import is highly sought after for its unique characteristics and limited availability. Each bud is a testament to the rich cannabis heritage of the region.',
    effects: 'Potent and distinctive experience with a complex aroma that sets it apart from other strains. Provides a powerful yet smooth experience with long-lasting effects. The unique terpene profile offers an experience unlike any other strain.',
    usage: 'Best appreciated in its pure form to experience the full range of flavors and effects. Smoke or vaporize at moderate temperatures to preserve the delicate terpenes. Due to potency, start with small amounts.',
    quality: 'Limited availability strain sourced from exclusive cultivators. Each batch is carefully inspected for authenticity and quality. The distinctive aroma and appearance confirm genuine Iranian genetics.',
  },
  {
    id: 'charas',
    name: '(H@R$',
    displayName: 'Charas',
    location: 'H@$Hi$H',
    category: 'Hash',
    price: '$160 - $590',
    image: 'https://readdy.ai/api/search-image?query=Premium%20dark%20cannabis%20charas%20soft%20resin%20hand-rubbed%20hash%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20product%20aesthetic%2C%20sharp%20focus%20showing%20rich%20dark%20color%20and%20soft%20texture%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20traditional%20handmade%20product&width=600&height=600&seq=dxb-white-charas-v2&orientation=squarish',
    description: 'Traditional hand-rubbed charas made using time-honored techniques passed down through generations. This soft, aromatic resin is crafted from live cannabis plants, resulting in a unique product with rich flavors and potent effects. A true connoisseur\'s choice.',
    effects: 'Rich, full-bodied experience with a warm, comforting sensation. The hand-rubbed production method preserves a full spectrum of cannabinoids and terpenes. Effects are smooth, long-lasting, and deeply relaxing, perfect for evening use.',
    usage: 'Best enjoyed by crumbling small pieces and smoking in a pipe or with flower. The soft texture makes it easy to work with. Store in a cool, dark place in parchment paper to preserve the ideal consistency.',
    quality: 'Authentic hand-rubbed charas produced using traditional methods. Each batch is evaluated for aroma, texture, and potency. The labor-intensive production process ensures a premium product that stands apart from machine-made alternatives.',
  },
  {
    id: 'thc-pills',
    name: '|-|$TC pilis',
    displayName: 'THC Pills',
    location: 'H@$Hi$H',
    category: 'Medical',
    price: '$150 - $250',
    image: 'https://readdy.ai/api/search-image?query=Premium%20pharmaceutical%20THC%20capsules%20pills%20in%20bottle%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20medical%20product%20aesthetic%2C%20sharp%20focus%20crystal%20clear%20details%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20medical%20grade%20supplement%20packaging&width=600&height=600&seq=dxb-white-thc-pills-v2&orientation=squarish',
    description: 'Premium pharmaceutical-grade THC capsules offering a precise, convenient, and discreet method of consumption. Each capsule contains a measured dose of high-quality THC extract, providing consistent and predictable effects without the need for smoking or vaping.',
    effects: 'Gradual onset over 45-90 minutes with effects lasting 4-8 hours. Provides sustained relief with a smooth, manageable experience. The encapsulated form ensures precise dosing and eliminates the variability of other consumption methods.',
    usage: 'Take 1 capsule orally with water. Effects take longer to onset compared to inhalation methods — be patient and avoid taking additional doses too soon. Store in a cool, dry place. Keep out of reach of children.',
    quality: 'Pharmaceutical-grade production in certified facilities. Each capsule contains a precisely measured dose for consistency. Lab-tested for potency and purity. Manufactured under strict quality control standards.',
  },
  {
    id: 'lyrica-300mg-india',
    name: 'L@RYCI@ 300 mg india',
    displayName: 'Lyrica 300mg India',
    location: 'H@$Hi$H',
    category: 'Pharma',
    price: '$80 - $150',
    image: 'https://readdy.ai/api/search-image?query=Premium%20pharmaceutical%20capsules%20medication%20in%20blister%20pack%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20medical%20product%20aesthetic%2C%20sharp%20focus%20crystal%20clear%20details%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20pharmaceutical%20grade%20packaging&width=600&height=600&seq=dxb-white-lyrica300-v2&orientation=squarish',
    description: 'High-quality pharmaceutical-grade medication for neuropathic pain treatment. These 300mg capsules from India offer proven efficacy for managing nerve-related discomfort. Manufactured to international standards with consistent potency in every dose.',
    effects: 'Provides effective relief from neuropathic pain. Onset typically within 1-2 hours with effects lasting 6-8 hours. Helps manage chronic nerve pain conditions and improves overall comfort and quality of life.',
    usage: 'Take as directed by a healthcare professional. Swallow capsule whole with water. Do not crush or open the capsule. Consistent daily use may be required for optimal results. Store at room temperature.',
    quality: 'Manufactured in GMP-certified facilities in India. Each capsule contains precisely 300mg of active ingredient. Rigorous quality testing ensures batch-to-batch consistency and purity.',
  },
  {
    id: 'lyrica-150mg-pfizer',
    name: 'L@RYCI@ 150 mg Pifzer',
    displayName: 'Lyrica 150mg Pfizer',
    location: 'H@$Hi$H',
    category: 'Pharma',
    price: '$60 - $120',
    image: 'https://readdy.ai/api/search-image?query=Premium%20branded%20pharmaceutical%20capsules%20pills%20Pfizer%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20medical%20product%20aesthetic%2C%20sharp%20focus%20crystal%20clear%20details%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20trusted%20brand%20pharmaceutical%20packaging&width=600&height=600&seq=dxb-white-lyrica150-v2&orientation=squarish',
    description: 'Original Pfizer formulation providing trusted quality and consistent therapeutic effects. These 150mg capsules are the gold standard for neuropathic pain management, backed by extensive research and clinical testing. The most recognized and trusted brand in its category.',
    effects: 'Clinically proven effectiveness for neuropathic pain conditions. The original formulation with optimal bioavailability for reliable results. Effects last 6-8 hours with consistent symptom management throughout the day.',
    usage: 'Follow the prescribed dosage regimen. Take with or without food as directed. Swallow whole with a full glass of water. Do not abruptly discontinue without medical guidance. Store in original packaging.',
    quality: 'Original Pfizer-manufactured product ensuring the highest quality standards. Produced in FDA-approved facilities with rigorous quality control. The trusted brand name guarantees authenticity and consistent therapeutic effects.',
  },
  {
    id: 'lyrica-450mg-india',
    name: 'L@RYCI@ 450 mg india',
    displayName: 'Lyrica 450mg India',
    location: 'H@$Hi$H',
    category: 'Pharma',
    price: '$100 - $180',
    image: 'https://readdy.ai/api/search-image?query=Premium%20pharmaceutical%20high%20dosage%20capsules%20pills%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20medical%20product%20aesthetic%2C%20sharp%20focus%20crystal%20clear%20details%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20pharmaceutical%20strength%20medication&width=600&height=600&seq=dxb-white-lyrica450-v2&orientation=squarish',
    description: 'High-dose 450mg formulation designed for severe neuropathic pain management. These capsules provide maximum strength relief for patients requiring higher dosage levels. Manufactured in India to international pharmaceutical standards.',
    effects: 'Maximum strength formulation for severe neuropathic conditions. Provides powerful and sustained pain relief throughout the day. The higher dosage is suited for patients who have developed tolerance or require more intensive pain management.',
    usage: 'For use under medical supervision only. The higher dosage requires careful monitoring. Take exactly as prescribed. Do not combine with other medications without consulting a healthcare professional.',
    quality: 'High-potency formulation manufactured under strict GMP standards. Each capsule delivers a precise 450mg dose. Batch testing ensures consistent quality and potency. For patients requiring maximum therapeutic support.',
  },
  {
    id: 'morocco-2',
    name: '|/\\|EED$ Moraco',
    displayName: 'Morocco Strain',
    location: 'H@$Hi$H',
    category: 'Weed',
    price: '$160 - $590',
    image: 'https://readdy.ai/api/search-image?query=Premium%20moroccan%20cannabis%20buds%20flowers%20closeup%20with%20golden%20amber%20trichomes%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20product%20aesthetic%2C%20sharp%20focus%20showing%20dense%20bud%20structure%20and%20crystal%20coverage%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20exotic%20imported%20premium%20flower&width=600&height=600&seq=dxb-white-morocco2-v2&orientation=squarish',
    description: 'Another exceptional batch of authentic Moroccan cannabis, showcasing the finest qualities this region has to offer. This premium import features dense, resinous buds with a complex terpene profile and potent effects that experienced users will appreciate.',
    effects: 'Rich, earthy aroma with a smooth, flavorful smoke. Delivers a balanced experience combining gentle mental stimulation with soothing body relaxation. The effects are long-lasting and satisfying, making it a versatile choice for any time of day.',
    usage: 'Enjoy in its natural form through smoking or vaporizing. The rich resin content makes it excellent for extraction as well. Store in optimal conditions to preserve the distinctive Moroccan terpene profile.',
    quality: 'Premium imported Moroccan flower from select cultivators. Each batch is hand-inspected for bud structure, trichome density, and aroma profile. Consistent quality that has made Moroccan cannabis renowned worldwide.',
  },
  {
    id: 'ice-hash',
    name: 'L(E H@$H',
    displayName: 'Ice Hash',
    location: 'H@$Hi$H',
    category: 'Hash',
    price: '$180 - $350',
    image: 'https://readdy.ai/api/search-image?query=Premium%20ice%20water%20hash%20light%20golden%20blonde%20crumbly%20cannabis%20concentrate%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20extract%20aesthetic%2C%20sharp%20focus%20showing%20powdery%20crystalline%20texture%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20artisanal%20solventless%20extract&width=600&height=600&seq=dxb-white-ice-hash-v1&orientation=squarish',
    description: 'Premium ice water hash extracted using the finest bubble bag technique and ice-cold water to preserve every trichome head. This solventless concentrate delivers an incredibly clean and flavorful experience. The golden-blonde color is a testament to its exceptional purity and quality.',
    effects: 'Clean, smooth, and incredibly potent. The ice water extraction preserves the full terpene profile, resulting in an aromatic and flavorful experience. Effects are fast-acting with a clear, uplifting head high followed by gentle full-body relaxation.',
    usage: 'Best vaporized at low temperatures to fully appreciate the delicate terpenes. Can also be crumbled and added to flower for an enhanced experience. Store in a cool, dark place in parchment paper to maintain consistency.',
    quality: 'Made using only premium fresh-frozen cannabis and ice-cold water extraction. No solvents used at any stage. Each batch is micro-planed and slow-dried for optimal texture and potency retention.',
  },
  {
    id: 'bubble-hash',
    name: 'Bubble H@$H',
    displayName: 'Bubble Hash',
    location: 'Dera Dubai',
    category: 'Hash',
    price: '$140 - $280',
    image: 'https://readdy.ai/api/search-image?query=Premium%20bubble%20hash%20dark%20brown%20soft%20malleable%20cannabis%20resin%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20concentrate%20aesthetic%2C%20sharp%20focus%20showing%20glossy%20rich%20texture%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20traditional%20bubble%20bag%20extract&width=600&height=600&seq=dxb-white-bubble-hash-v1&orientation=squarish',
    description: 'Classic bubble hash made using traditional bubble bag filtration methods. This soft, malleable resin is packed with cannabinoids and terpenes, offering a full-spectrum experience. The rich brown color and pliable texture indicate proper maturation and high oil content.',
    effects: 'Rich, flavorful smoke with a heavy, relaxing body high. The full-spectrum extraction provides a well-rounded experience that combines mental clarity with deep physical relaxation. Long-lasting effects perfect for evening sessions.',
    usage: 'Roll into small pieces and smoke in a pipe or mix with flower. The soft texture makes it easy to handle and dose. For best flavor, use low temperatures when smoking. Store wrapped in parchment in a cool place.',
    quality: 'Produced using multi-stage bubble bag filtration for optimal purity. Only the finest mesh screens are used to isolate the best trichome heads. Each batch is carefully dried and cured for maximum potency and flavor.',
  },
  {
    id: 'dry-sift-hash',
    name: 'Dr@ Sift H@$H',
    displayName: 'Dry Sift Hash',
    location: 'Al Quoz',
    category: 'Hash',
    price: '$170 - $320',
    image: 'https://readdy.ai/api/search-image?query=Premium%20dry%20sift%20hash%20light%20brown%20sandy%20textured%20cannabis%20kief%20concentrate%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20extract%20aesthetic%2C%20sharp%20focus%20showing%20fine%20granular%20texture%20and%20trichome%20heads%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20artisanal%20dry%20sift&width=600&height=600&seq=dxb-white-dry-sift-v1&orientation=squarish',
    description: 'Artisanal dry sift hash created through careful mechanical separation of trichome heads from premium cannabis flowers. This solventless concentrate preserves the plant\'s natural essence in its purest form. The sandy texture and light color reflect the high-quality starting material.',
    effects: 'Exceptionally clean and flavorful with a powerful yet smooth high. The mechanical extraction preserves delicate terpenes that are often lost in other methods. Expect an immediate, full-spectrum experience with balanced mental and physical effects.',
    usage: 'Sprinkle over flower in a bowl or joint for an enhanced experience. Can also be vaporized or pressed into rosin. A little goes a long way, so start small. Store in a cool, dark, dry place in glass or parchment.',
    quality: 'Sifted from premium, properly cured cannabis flowers using multi-screen techniques. Only the finest mesh fractions are collected. No heat, water, or solvents used — just pure mechanical separation and patience.',
  },
  {
    id: 'disposable-vape',
    name: 'D$!sposable \\/\\@pe',
    displayName: 'Disposable Vape Pen',
    location: 'Dera Dubai',
    category: 'Vape',
    price: '$120 - $200',
    image: 'https://readdy.ai/api/search-image?query=Premium%20disposable%20cannabis%20vape%20pen%20sleek%20compact%20colorful%20device%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20vape%20aesthetic%2C%20sharp%20focus%20showing%20modern%20device%20design%20and%20finish%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20portable%20ready%20to%20use&width=600&height=600&seq=dxb-white-disposable-v1&orientation=squarish',
    description: 'Sleek, colorful disposable vape pens pre-filled with premium cannabis oil. These compact devices offer the ultimate in convenience — no charging, no refilling, no maintenance. Simply open and enjoy. Each pen is calibrated for optimal vapor production and flavor delivery.',
    effects: 'Fast-acting effects delivered through smooth, flavorful vapor. The optimized heating element ensures consistent draws from first to last puff. Each pen delivers approximately 300 puffs of pure enjoyment.',
    usage: 'Ready to use immediately. Simply inhale to activate — no buttons required. Perfect for travel, events, or discreet on-the-go use. Dispose of responsibly after use. Store at room temperature away from direct sunlight.',
    quality: 'Each disposable pen is filled with premium cannabis oil free from cutting agents and additives. Ceramic heating elements ensure pure, clean vapor. Individually tested before packaging. Consistent performance guaranteed.',
  },
  {
    id: 'live-resin-vape',
    name: 'L!ve R$in \\/\\@pe',
    displayName: 'Live Resin Vape',
    location: 'Al Quoz',
    category: 'Vape',
    price: '$180 - $300',
    image: 'https://readdy.ai/api/search-image?query=Premium%20live%20resin%20cannabis%20vape%20cartridge%20with%20golden%20amber%20oil%20and%20visible%20terpene%20layer%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20extract%20aesthetic%2C%20sharp%20focus%20showing%20oil%20clarity%20and%20richness%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20fresh%20frozen%20extract%20cartridge&width=600&height=600&seq=dxb-white-live-resin-v1&orientation=squarish',
    description: 'Ultra-premium live resin vape cartridge made from fresh-frozen cannabis plants to preserve the complete terpene and cannabinoid profile. Unlike distillate cartridges, live resin retains the plant\'s natural essence, delivering an experience closest to smoking fresh flower.',
    effects: 'Incredibly flavorful and aromatic with a full-spectrum high that mirrors the living plant. The preserved terpenes create an entourage effect that enhances both flavor and potency. Smooth, satisfying vapor with effects that evolve through the session.',
    usage: 'Attach to any standard 510-thread battery. Use low voltage settings (2.0-2.5V) to preserve the delicate terpenes. Take small draws and savor the flavor. Store upright in a cool place away from heat and light.',
    quality: 'Made exclusively from fresh-frozen, single-source cannabis plants. Flash-frozen immediately after harvest to lock in terpenes. Hydrocarbon extraction by experienced processors. Each cartridge is hand-filled and tested for purity and potency.',
  },
  {
    id: 'cbd-oil',
    name: 'CBD O!l',
    displayName: 'CBD Oil Drops',
    location: 'Dera Dubai',
    category: 'Medical',
    price: '$100 - $200',
    image: 'https://readdy.ai/api/search-image?query=Premium%20CBD%20oil%20dropper%20bottle%20with%20golden%20liquid%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20wellness%20product%20aesthetic%2C%20sharp%20focus%20showing%20glass%20bottle%20and%20dropper%20detail%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20natural%20supplement&width=600&height=600&seq=dxb-white-cbd-oil-v1&orientation=squarish',
    description: 'Premium full-spectrum CBD oil extracted from organically grown hemp plants. Each dropper delivers a precise dose of high-quality CBD along with beneficial terpenes and minor cannabinoids. A natural wellness solution for those seeking balance without psychoactive effects.',
    effects: 'Promotes a sense of calm and well-being without any intoxicating effects. May help with stress management, sleep quality, and overall balance. Effects build gradually with consistent use. Non-psychoactive and suitable for daily use.',
    usage: 'Place the desired number of drops under the tongue and hold for 60 seconds before swallowing. Start with a low dose and adjust as needed. Can be taken morning or evening. Shake well before each use.',
    quality: 'Extracted using clean CO2 methods from certified organic hemp. Third-party lab tested for potency, purity, and the absence of heavy metals, pesticides, and residual solvents. Full-spectrum formula retains beneficial plant compounds.',
  },
  {
    id: 'thc-tincture',
    name: 'THC T!ncture',
    displayName: 'THC Tincture',
    location: 'H@$Hi$H',
    category: 'Medical',
    price: '$130 - $220',
    image: 'https://readdy.ai/api/search-image?query=Premium%20THC%20tincture%20amber%20liquid%20in%20glass%20dropper%20bottle%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20medical%20cannabis%20product%20aesthetic%2C%20sharp%20focus%20showing%20glass%20bottle%20and%20precise%20dropper%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20pharmaceutical%20grade%20tincture&width=600&height=600&seq=dxb-white-thc-tincture-v1&orientation=squarish',
    description: 'Pharmaceutical-grade THC tincture offering precise sublingual dosing for fast, consistent effects. Each drop contains a measured amount of THC in a clean MCT oil base. The sublingual delivery method allows for rapid absorption and easy dose control.',
    effects: 'Fast-acting effects when taken sublingually, with onset within 15-30 minutes. Provides a clean, manageable experience that can be precisely dosed. Effects typically last 3-5 hours. Ideal for those who prefer not to smoke or vape.',
    usage: 'Place drops under the tongue using the calibrated dropper. Hold for 60-90 seconds before swallowing for maximum absorption. Start with a low dose (2-3 drops) and increase gradually as needed. Store upright in a cool, dark place.',
    quality: 'Pharmaceutical-grade production in certified facilities. Each bottle contains a precisely measured THC concentration. MCT oil base ensures optimal absorption and long shelf life. Batch tested for potency and purity.',
  },
  {
    id: 'medical-gummies',
    name: 'M$d!cal Gumm!es',
    displayName: 'Medical Gummies',
    location: 'Al Quoz',
    category: 'Medical',
    price: '$80 - $160',
    image: 'https://readdy.ai/api/search-image?query=Premium%20cannabis%20infused%20gummies%20colorful%20fruit%20flavored%20edibles%20in%20package%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20cannabis%20edible%20aesthetic%2C%20sharp%20focus%20showing%20gummy%20texture%20and%20sugar%20coating%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20medical%20grade%20edibles&width=600&height=600&seq=dxb-white-gummies-v1&orientation=squarish',
    description: 'Delicious fruit-flavored medical gummies infused with precisely measured cannabis extract. Each gummy contains a consistent dose, making them the perfect choice for those who want a tasty, discreet, and reliable consumption method. Available in assorted flavors.',
    effects: 'Gradual onset over 45-90 minutes with long-lasting effects up to 6-8 hours. The edible format provides a different experience from smoking, with effects that are typically more body-focused and deeply relaxing. Ideal for sustained relief.',
    usage: 'Start with half a gummy to assess individual tolerance. Wait at least 2 hours before considering additional doses. The effects from edibles are stronger and longer-lasting than inhalation methods. Store in a cool place away from direct sunlight.',
    quality: 'Made with premium cannabis extract and natural fruit flavors. Each gummy is precisely dosed for consistency. No artificial colors or high-fructose corn syrup. Lab-tested to ensure accurate potency in every piece.',
  },
  {
    id: 'xanax-2mg',
    name: 'X@N@X 2mg',
    displayName: 'Xanax 2mg',
    location: 'H@$Hi$H',
    category: 'Pharma',
    price: '$70 - $140',
    image: 'https://readdy.ai/api/search-image?query=Premium%20pharmaceutical%20anti%20anxiety%20medication%20tablets%20in%20blister%20pack%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20medical%20product%20aesthetic%2C%20sharp%20focus%20crystal%20clear%20details%20showing%20pill%20markings%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20pharmaceutical%20grade%20medication&width=600&height=600&seq=dxb-white-xanax-v1&orientation=squarish',
    description: 'Pharmaceutical-grade anxiety management medication providing rapid relief from acute anxiety and panic symptoms. These 2mg tablets are manufactured to stringent quality standards, ensuring consistent potency and reliable therapeutic effects.',
    effects: 'Fast-acting relief from anxiety and panic symptoms. Onset typically within 15-30 minutes with effects lasting 4-6 hours. Promotes a sense of calm and tranquility while reducing excessive worry and tension.',
    usage: 'Take exactly as prescribed by a healthcare professional. The 2mg tablet can be split for lower doses if needed. Do not combine with alcohol or other central nervous system depressants. Store at room temperature in original packaging.',
    quality: 'Manufactured in GMP-certified pharmaceutical facilities. Each tablet contains precisely 2mg of active ingredient. Rigorous quality control testing ensures batch-to-batch consistency and purity.',
  },
  {
    id: 'coocoo-rock',
    name: '(OO(OO Rock',
    displayName: 'Coocoo Rock',
    location: 'Dera Dubai',
    category: 'coocoo',
    price: '$250 - $500',
    image: 'https://readdy.ai/api/search-image?query=Premium%20crystalline%20rock%20formation%20substance%20in%20clear%20glass%20container%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20luxury%20product%20aesthetic%2C%20sharp%20focus%20showing%20crystalline%20structure%20and%20clarity%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20premium%20crystal%20product&width=600&height=600&seq=dxb-white-coocoo-rock-v1&orientation=squarish',
    description: 'The pinnacle of quality — premium crystalline rock formation prized for its exceptional purity and potency. Each piece is carefully selected for clarity, density, and structural integrity. This is the connoisseur\'s choice, delivering an unparalleled experience that sets the standard in its class.',
    effects: 'Powerful, clean onset with a rush of euphoria and enhanced sensory perception. The crystalline form ensures rapid absorption and intense effects. Produces a profound sense of confidence, energy, and well-being that discerning users seek.',
    usage: 'Handle with extreme care and respect. The potency of this product demands responsible use. Start with minimal amounts. Store in a cool, dry place in an airtight glass container. Not suitable for inexperienced users.',
    quality: 'The highest grade available, selected piece by piece for exceptional quality. Each rock is inspected for clarity, density, and structural integrity. Triple-verified for purity. The gold standard in its category.',
  },
  {
    id: 'coocoo-crystal',
    name: '(OO(OO Crystal',
    displayName: 'Coocoo Crystal',
    location: 'H@$Hi$H',
    category: 'coocoo',
    price: '$220 - $450',
    image: 'https://readdy.ai/api/search-image?query=Premium%20clear%20crystalline%20powder%20substance%20in%20glass%20vial%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20luxury%20product%20aesthetic%2C%20sharp%20focus%20showing%20crystalline%20sparkle%20and%20clarity%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20premium%20crystal%20product&width=600&height=600&seq=dxb-white-coocoo-crystal-v1&orientation=squarish',
    description: 'Premium crystal form offering exceptional clarity and potency. Each batch is carefully processed to achieve the perfect crystalline structure that delivers a clean, powerful experience. The sparkling appearance reflects the uncompromising quality standards maintained throughout production.',
    effects: 'Intense, clean effects with rapid onset. The crystalline form provides a smooth, powerful experience characterized by heightened alertness, enhanced mood, and a profound sense of well-being. Effects are immediate and can last 45-90 minutes.',
    usage: 'For experienced users who appreciate quality. Handle responsibly and start with minimal amounts. The high purity demands respect and caution. Store in an airtight container in a cool, dark place to preserve crystalline integrity.',
    quality: 'Carefully processed to achieve optimal crystalline structure. Each batch undergoes multiple purification stages. Inspected for clarity, consistency, and purity. A premium product for those who demand the very best.',
  },
  {
    id: 'coocoo-powder',
    name: '(OO(OO P0wder',
    displayName: 'Coocoo Powder',
    location: 'Al Quoz',
    category: 'coocoo',
    price: '$180 - $350',
    image: 'https://readdy.ai/api/search-image?query=Premium%20fine%20white%20powder%20substance%20in%20clear%20container%20on%20clean%20pure%20white%20background%2C%20professional%20studio%20product%20photography%20with%20soft%20diffused%20lighting%2C%20elegant%20minimal%20presentation%2C%20white%20seamless%20backdrop%2C%20high-end%20luxury%20product%20aesthetic%2C%20sharp%20focus%20showing%20fine%20powder%20texture%20and%20consistency%2C%20commercial%20product%20shot%2C%20clean%20bright%20studio%20setting%2C%20premium%20quality%20powder&width=600&height=600&seq=dxb-white-coocoo-powder-v1&orientation=squarish',
    description: 'Premium quality powder with an exceptionally fine, consistent texture. Processed to exacting standards to ensure a smooth, uniform product that delivers reliable results every time. The perfect balance of quality and value in its category.',
    effects: 'Smooth, consistent experience with reliable effects. The fine texture ensures even distribution and predictable onset. Delivers the characteristic euphoria, energy boost, and enhanced confidence that users expect from premium quality.',
    usage: 'Handle with appropriate care and respect. The fine powder consistency requires careful measurement. Start small and assess tolerance. Store in a cool, dry place in an airtight container away from moisture and light.',
    quality: 'Processed through multiple refinement stages to achieve the ideal texture and consistency. Each batch is tested for purity and uniformity. A reliable, consistent product that maintains quality standards batch after batch.',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter((p) => p.category === category);
}

export function getAllProductIds(): string[] {
  return products.map((p) => p.id);
}

export function getBestSellers(): Product[] {
  const ids = ['hybrid', 'sativa', 'mahuu-meds-2g', 'hash'];
  return ids.map((id) => products.find((p) => p.id === id)).filter(Boolean) as Product[];
}

export function getShopProducts(): Product[] {
  return products.filter(
    (p) => p.category === 'Hash' ||
    p.category === 'Weed' ||
    p.category === 'Vape' ||
    p.category === 'Medical' ||
    p.category === 'Pharma' ||
    p.category === 'coocoo'
  );
}

export function getRelatedProducts(productId: string, limit: number = 4): Product[] {
  const current = products.find((p) => p.id === productId);
  if (!current) return [];
  return products
    .filter((p) => p.category === current.category && p.id !== productId)
    .slice(0, limit);
}

export function getAllLocations(): string[] {
  const locationSet = new Set(products.map((p) => p.location));
  return Array.from(locationSet).sort();
}

export const categories = [
  { label: 'All Products', value: 'all' },
  { label: 'Hash', value: 'Hash' },
  { label: 'Weed', value: 'Weed' },
  { label: 'Vape', value: 'Vape' },
  { label: 'Medical', value: 'Medical' },
  { label: 'Pharma', value: 'Pharma' },
  { label: 'Coocoo', value: 'coocoo' },
];

export default products;