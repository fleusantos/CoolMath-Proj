import $ from 'jquery'

/////// resource import ///////
import grayb from '../assets/images/Character/Body/Body_Grayscale.png'
import outlineb from '../assets/images/Character/Body/Body_Outline.png'
import { ReactComponent as colorb } from '../assets/images/Character/Body/Body_WhiteOverlay.svg'
import angry from '../assets/images/Character/FacialExpression/FacialExpression_Angry.png'
import concerned from '../assets/images/Character/FacialExpression/FacialExpression_Concerned.png'
import excited from '../assets/images/Character/FacialExpression/FacialExpression_Excited.png'
import happy from '../assets/images/Character/FacialExpression/FacialExpression_Happy.png'
import naughty from '../assets/images/Character/FacialExpression/FacialExpression_Naughty.png'
import neuitral from '../assets/images/Character/FacialExpression/FacialExpression_Neuitral.png'
import playful from '../assets/images/Character/FacialExpression/FacialExpression_Playful.png'
import surprise from '../assets/images/Character/FacialExpression/FacialExpression_Surprise.png'

/////////// Face Accessories ////////////
import nonesr from '../assets/images/Character/Accessory/Accessory_DNE.png'

import grayfa from '../assets/images/Character/Accessory/FaceAccessory/FeatherMask/FaceAccessory_FeatherMask_Grayscale.png'
import outlinefa from '../assets/images/Character/Accessory/FaceAccessory/FeatherMask/FaceAccessory_FeatherMask_Outline.png'
import highlightfa from '../assets/images/Character/Accessory/FaceAccessory/FeatherMask/FaceAccessory_FeatherMask_Highlight.png'
import { ReactComponent as colorfa } from '../assets/images/Character/Accessory/FaceAccessory/FeatherMask/FaceAccessory_FeatherMask_WhiteOverlay.svg'

import outlinefa2 from '../assets/images/Character/Accessory/FaceAccessory/RoundGlasses/FaceAccessory_RoundGlasses_Outline.png'
import { ReactComponent as colorfa2 } from '../assets/images/Character/Accessory/FaceAccessory/RoundGlasses/FaceAccessory_RoundGlasses_WhiteOverlay.svg'

import outlinefa3 from '../assets/images/Character/Accessory/FaceAccessory/SquareGlasses/FaceAccessory_SquareGlasses_Outline.png'
import { ReactComponent as colorfa3 } from '../assets/images/Character/Accessory/FaceAccessory/SquareGlasses/FaceAccessory_SquareGlasses_WhiteOverlay.svg'

import outlinefa4 from '../assets/images/Character/Accessory/FaceAccessory/StarGlasses/FaceAccessory_StarGlasses_Outline.png'
import { ReactComponent as colorfa4 } from '../assets/images/Character/Accessory/FaceAccessory/StarGlasses/FaceAccessory_StarGlasses_WhiteOverlay.svg'

import outlinefa5 from '../assets/images/Character/Accessory/FaceAccessory/SwirlGlasses/FaceAccessory_SwirlGlasses_Outline.png'
import { ReactComponent as colorfa5 } from '../assets/images/Character/Accessory/FaceAccessory/SwirlGlasses/FaceAccessory_SwirlGlasses_WhiteOverlay.svg'

import grayfacl from '../assets/images/Character/Accessory/FaceAccessory/ClownMakeup/FaceAccessory_ClownMakeup_Grayscale.png'
import outlinefacl from '../assets/images/Character/Accessory/FaceAccessory/ClownMakeup/FaceAccessory_ClownMakeup_Outline.png'
import highlightfacl from '../assets/images/Character/Accessory/FaceAccessory/ClownMakeup/FaceAccessory_ClownMakeup_Highlight.png'
import { ReactComponent as colorfacl } from '../assets/images/Character/Accessory/FaceAccessory/ClownMakeup/FaceAccessory_ClownMakeup_WhiteOverlay.svg'

import grayhta from '../assets/images/Character/Accessory/HatAccessory/ChefHat/HatAccessory_ChefHat_Grayscale.png'
import outlinehta from '../assets/images/Character/Accessory/HatAccessory/ChefHat/HatAccessory_ChefHat_Outline.png'
import { ReactComponent as colorhta } from '../assets/images/Character/Accessory/HatAccessory/ChefHat/HatAccessory_ChefHat_WhiteOverlay.svg'

import grayhta2 from '../assets/images/Character/Accessory/HatAccessory/FancyHat/HatAccessory_FancyHat_Grayscale.png'
import outlinehta2 from '../assets/images/Character/Accessory/HatAccessory/FancyHat/HatAccessory_FancyHat_Outline.png'
import highlighthta2 from '../assets/images/Character/Accessory/HatAccessory/FancyHat/HatAccessory_FancyHat_Highlight.png'
import { ReactComponent as colorhta2 } from '../assets/images/Character/Accessory/HatAccessory/FancyHat/HatAccessory_FancyHat_WhiteOverlay.svg'

import grayhtaba from '../assets/images/Character/Accessory/HatAccessory/BaseballCap/HatAccessory_BaseballCap_Grayscale.png'
import outlinehtaba from '../assets/images/Character/Accessory/HatAccessory/BaseballCap/HatAccessory_BaseballCap_Outline.png'
import highlighthtaba from '../assets/images/Character/Accessory/HatAccessory/BaseballCap/HatAccessory_BaseballCap_Highlight.png'
import { ReactComponent as colorhtaba } from '../assets/images/Character/Accessory/HatAccessory/BaseballCap/HatAccessory_BaseballCap_WhiteOverlay.svg'

import grayhtabe from '../assets/images/Character/Accessory/HatAccessory/Beanie/HatAccessory_Beanie_Grayscale.png'
import outlinehtabe from '../assets/images/Character/Accessory/HatAccessory/Beanie/HatAccessory_Beanie_Outline.png'
import highlighthtabe from '../assets/images/Character/Accessory/HatAccessory/Beanie/HatAccessory_Beanie_Highlight.png'
import { ReactComponent as colorhtabe } from '../assets/images/Character/Accessory/HatAccessory/Beanie/HatAccessory_Beanie_WhiteOverlay.svg'

import grayhtaber from '../assets/images/Character/Accessory/HatAccessory/Beret/HatAccessory_Beret_Grayscale.png'
import outlinehtaber from '../assets/images/Character/Accessory/HatAccessory/Beret/HatAccessory_Beret_Outline.png'
// import highlighthtaber from '../assets/images/Character/Accessory/HatAccessory/Beret/HatAccessory_Beret_Highlight.png'
import { ReactComponent as colorhtaber } from '../assets/images/Character/Accessory/HatAccessory/Beret/HatAccessory_Beret_WhiteOverlay.svg'

import grayhtapen from '../assets/images/Character/Accessory/HatAccessory/Pencil/HatAccessory_Pencil_Grayscale.png'
import outlinehtapen from '../assets/images/Character/Accessory/HatAccessory/Pencil/HatAccessory_Pencil_Outline.png'
import highlighthtapen from '../assets/images/Character/Accessory/HatAccessory/Pencil/HatAccessory_Pencil_Highlight.png'
import { ReactComponent as colorhtapen } from '../assets/images/Character/Accessory/HatAccessory/Pencil/HatAccessory_Pencil_WhiteOverlay.svg'
/////////// Face Accessories ////////////

/////////// Bottoms ////////////
import graybt from '../assets/images/Character/Bottom/LongPants/Bottom_LongPants_Grayscale.png'
import outlinebt from '../assets/images/Character/Bottom/LongPants/Bottom_LongPants_Outline.png'
import highlightbt from '../assets/images/Character/Bottom/LongPants/Bottom_LongPants_Highlight.png'
import { ReactComponent as colorbt } from '../assets/images/Character/Bottom/LongPants/Bottom_LongPants_WhiteOverlay.svg'

import graybt2 from '../assets/images/Character/Bottom/LongSkirt/Bottom_LongSkirt_Grayscale.png'
import outlinebt2 from '../assets/images/Character/Bottom/LongSkirt/Bottom_LongSkirt_Outline.png'
import highlightbt2 from '../assets/images/Character/Bottom/LongSkirt/Bottom_LongSkirt_Highlight.png'
import { ReactComponent as colorbt2 } from '../assets/images/Character/Bottom/LongSkirt/Bottom_LongSkirt_WhiteOverlay.svg'

import graybtbs from '../assets/images/Character/Bottom/BasicShorts/Bottom_BasicShorts_Grayscale.png'
import outlinebtbs from '../assets/images/Character/Bottom/BasicShorts/Bottom_BasicShorts_Outline.png'
import highlightbtbs from '../assets/images/Character/Bottom/BasicShorts/Bottom_BasicShorts_Highlight.png'
import { ReactComponent as colorbtbs } from '../assets/images/Character/Bottom/BasicShorts/Bottom_BasicShorts_WhiteOverlay.svg'

import graybtpfsh from '../assets/images/Character/Bottom/PuffyShorts/Bottom_PuffyShorts_Grayscale.png'
import outlinebtpfsh from '../assets/images/Character/Bottom/PuffyShorts/Bottom_PuffyShorts_Outline.png'
import highlightbtpfsh from '../assets/images/Character/Bottom/PuffyShorts/Bottom_PuffyShorts_Highlight.png'
import { ReactComponent as colorbtpfsh } from '../assets/images/Character/Bottom/PuffyShorts/Bottom_PuffyShorts_WhiteOverlay.svg'

import graybtsk from '../assets/images/Character/Bottom/Skirt/Bottom_Skirt_Grayscale.png'
import outlinebtsk from '../assets/images/Character/Bottom/Skirt/Bottom_Skirt_Outline.png'
import highlightbtsk from '../assets/images/Character/Bottom/Skirt/Bottom_Skirt_Highlight.png'
import { ReactComponent as colorbtsk } from '../assets/images/Character/Bottom/Skirt/Bottom_Skirt_WhiteOverlay.svg'

import graybtswpn from '../assets/images/Character/Bottom/SweatPants/Bottom_SweatPants_Grayscale.png'
import outlinebtswpn from '../assets/images/Character/Bottom/SweatPants/Bottom_SweatPants_Outline.png'
import highlightbtswpn from '../assets/images/Character/Bottom/SweatPants/Bottom_SweatPants_Highlight.png'
import { ReactComponent as colorbtswpn } from '../assets/images/Character/Bottom/SweatPants/Bottom_SweatPants_WhiteOverlay.svg'

import graybtwvsk from '../assets/images/Character/Bottom/WavySkirt/Bottom_WavySkirt_Grayscale.png'
import outlinebtwvsk from '../assets/images/Character/Bottom/WavySkirt/Bottom_WavySkirt_Outline.png'
import highlightbtwvsk from '../assets/images/Character/Bottom/WavySkirt/Bottom_WavySkirt_Highlight.png'
import { ReactComponent as colorbtwvsk } from '../assets/images/Character/Bottom/WavySkirt/Bottom_WavySkirt_WhiteOverlay.svg'
/////////// Bottoms ////////////

/////////// Hair ////////////
import grayhr from '../assets/images/Character/Hair/Long/Hair_Long_Grayscale.png'
import outlinehr from '../assets/images/Character/Hair/Long/Hair_Long_Outline.png'
import { ReactComponent as colorhr } from '../assets/images/Character/Hair/Long/Hair_Long_WhiteOverlay.svg'

import grayhrpf from '../assets/images/Character/Hair/Poofy/Hair_Poofy_Grayscale.png'
import outlinehrpf from '../assets/images/Character/Hair/Poofy/Hair_Poofy_Outline.png'
import { ReactComponent as colorhrpf } from '../assets/images/Character/Hair/Poofy/Hair_Poofy_WhiteOverlay.svg'

import grayhrbn from '../assets/images/Character/Hair/Bang/Hair_Bang_Grayscale.png'
import outlinehrbn from '../assets/images/Character/Hair/Bang/Hair_Bang_Outline.png'
import { ReactComponent as colorhrbn } from '../assets/images/Character/Hair/Bang/Hair_Bang_WhiteOverlay.svg'

import grayhrmh from '../assets/images/Character/Hair/Mohawk/Hair_Mohawk_Grayscale.png'
import outlinehrmh from '../assets/images/Character/Hair/Mohawk/Hair_Mohawk_Outline.png'
import { ReactComponent as colorhrmh } from '../assets/images/Character/Hair/Mohawk/Hair_Mohawk_WhiteOverlay.svg'

import grayhrpt from '../assets/images/Character/Hair/Pigtail/Hair_Pigtail_Grayscale.png'
import outlinehrpt from '../assets/images/Character/Hair/Pigtail/Hair_Pigtail_Outline.png'
import { ReactComponent as colorhrpt } from '../assets/images/Character/Hair/Pigtail/Hair_Pigtail_WhiteOverlay.svg'

import grayhrspt from '../assets/images/Character/Hair/SidePonytail/Hair_SidePonytail_Grayscale.png'
import outlinehrspt from '../assets/images/Character/Hair/SidePonytail/Hair_SidePonytail_Outline.png'
import { ReactComponent as colorhrspt } from '../assets/images/Character/Hair/SidePonytail/Hair_SidePonytail_WhiteOverlay.svg'

import grayhrsp from '../assets/images/Character/Hair/Spiky/Hair_Spiky_Grayscale.png'
import outlinehrsp from '../assets/images/Character/Hair/Spiky/Hair_Spiky_Outline.png'
import { ReactComponent as colorhrsp } from '../assets/images/Character/Hair/Spiky/Hair_Spiky_WhiteOverlay.svg'

import grayhrwv from '../assets/images/Character/Hair/Wavy/Hair_Wavy_Grayscale.png'
import outlinehrwv from '../assets/images/Character/Hair/Wavy/Hair_Wavy_Outline.png'
import { ReactComponent as colorhrwv } from '../assets/images/Character/Hair/Wavy/Hair_Wavy_WhiteOverlay.svg'
/////////// Hair ////////////

/////////// Head ////////////
import gray from '../assets/images/Character/Head/Triangle/Head_Triangle_Grayscale.png'
import outline from '../assets/images/Character/Head/Triangle/Head_Triangle_Outline.png'
import { ReactComponent as color } from '../assets/images/Character/Head/Triangle/Head_Triangle_WhiteOverlay.svg'

import gray2 from '../assets/images/Character/Head/Oval/Head_Oval_Grayscale.png'
import outline2 from '../assets/images/Character/Head/Oval/Head_Oval_Outline.png'
import { ReactComponent as color2 } from '../assets/images/Character/Head/Oval/Head_Oval_WhiteOverlay.svg'

import grayhbe from '../assets/images/Character/Head/Bean/Head_Bean_Grayscale.png'
import outlinehbe from '../assets/images/Character/Head/Bean/Head_Bean_Outline.png'
import { ReactComponent as colorhbe } from '../assets/images/Character/Head/Bean/Head_Bean_WhiteOverlay.svg'

import grayhcir from '../assets/images/Character/Head/Circular/Head_Circular_Grayscale.png'
import outlinehcir from '../assets/images/Character/Head/Circular/Head_Circular_Outline.png'
import { ReactComponent as colorhcir } from '../assets/images/Character/Head/Circular/Head_Circular_WhiteOverlay.svg'

import grayhcr from '../assets/images/Character/Head/Crazy/Head_Crazy_Grayscale.png'
import outlinehcr from '../assets/images/Character/Head/Crazy/Head_Crazy_Outline.png'
import { ReactComponent as colorhcr } from '../assets/images/Character/Head/Crazy/Head_Crazy_WhiteOverlay.svg'

import grayhda from '../assets/images/Character/Head/Diamond/Head_Diamond_Grayscale.png'
import outlinehda from '../assets/images/Character/Head/Diamond/Head_Diamond_Outline.png'
import { ReactComponent as colorhda } from '../assets/images/Character/Head/Diamond/Head_Diamond_WhiteOverlay.svg'

import grayhna from '../assets/images/Character/Head/Natural/Head_Natural_Grayscale.png'
import outlinehna from '../assets/images/Character/Head/Natural/Head_Natural_Outline.png'
import { ReactComponent as colorhna } from '../assets/images/Character/Head/Natural/Head_Natural_WhiteOverlay.svg'

import grayhst from '../assets/images/Character/Head/Star/Head_Star_Grayscale.png'
import outlinehst from '../assets/images/Character/Head/Star/Head_Star_Outline.png'
import { ReactComponent as colorhst } from '../assets/images/Character/Head/Star/Head_Star_WhiteOverlay.svg'
/////////// Head ////////////

/////////// Shoe ////////////
import graysh from '../assets/images/Character/Shoe/Boots/Shoe_Boots_Grayscale.png'
import outlinesh from '../assets/images/Character/Shoe/Boots/Shoe_Boots_Outline.png'
import highlightsh from '../assets/images/Character/Shoe/Boots/Shoe_Boots_Highlight.png'
import { ReactComponent as colorsh } from '../assets/images/Character/Shoe/Boots/Shoe_Boots_WhiteOverlay.svg'

import graysh2 from '../assets/images/Character/Shoe/Skates/Shoe_Skates_Grayscale.png'
import outlinesh2 from '../assets/images/Character/Shoe/Skates/Shoe_Skates_Outline.png'
import highlightsh2 from '../assets/images/Character/Shoe/Skates/Shoe_Skates_Highlight.png'

import grayshcl from '../assets/images/Character/Shoe/ClownShoes/Shoe_ClownShoes_Grayscale.png'
import outlineshcl from '../assets/images/Character/Shoe/ClownShoes/Shoe_ClownShoes_Outline.png'
import highlightshcl from '../assets/images/Character/Shoe/ClownShoes/Shoe_ClownShoes_Highlight.png'
import { ReactComponent as colorshcl } from '../assets/images/Character/Shoe/ClownShoes/Shoe_ClownShoes_WhiteOverlay.svg'

import grayshhl from '../assets/images/Character/Shoe/Heels/Shoe_Heels_Grayscale.png'
import outlineshhl from '../assets/images/Character/Shoe/Heels/Shoe_Heels_Outline.png'
import highlightshhl from '../assets/images/Character/Shoe/Heels/Shoe_Heels_Highlight.png'
import { ReactComponent as colorshhl } from '../assets/images/Character/Shoe/Heels/Shoe_Heels_WhiteOverlay.svg'

import grayshpf from '../assets/images/Character/Shoe/PuffyBoots/Shoe_PuffyBoots_Grayscale.png'
import outlineshpf from '../assets/images/Character/Shoe/PuffyBoots/Shoe_PuffyBoots_Outline.png'
import { ReactComponent as colorshpf } from '../assets/images/Character/Shoe/PuffyBoots/Shoe_PuffyBoots_WhiteOverlay.svg'

import grayshsh from '../assets/images/Character/Shoe/ShortBoots/Shoe_ShortBoots_Grayscale.png'
import outlineshsh from '../assets/images/Character/Shoe/ShortBoots/Shoe_ShortBoots_Outline.png'
import highlightshsh from '../assets/images/Character/Shoe/ShortBoots/Shoe_ShortBoots_Highlight.png'
import { ReactComponent as colorshsh } from '../assets/images/Character/Shoe/ShortBoots/Shoe_ShortBoots_WhiteOverlay.svg'

import grayshsl from '../assets/images/Character/Shoe/Slippers/Shoe_Slippers_Grayscale.png'
import outlineshsl from '../assets/images/Character/Shoe/Slippers/Shoe_Slippers_Outline.png'
import { ReactComponent as colorshsl } from '../assets/images/Character/Shoe/Slippers/Shoe_Slippers_WhiteOverlay.svg'

import grayshsn from '../assets/images/Character/Shoe/Sneakers/Shoe_Sneakers_Grayscale.png'
import outlineshsn from '../assets/images/Character/Shoe/Sneakers/Shoe_Sneakers_Outline.png'
import highlightshsn from '../assets/images/Character/Shoe/Sneakers/Shoe_Sneakers_Highlight.png'
import { ReactComponent as colorshsn } from '../assets/images/Character/Shoe/Sneakers/Shoe_Sneakers_WhiteOverlay.svg'
/////////// Shoe ////////////

/////////// Top ////////////
import graytop from '../assets/images/Character/Top/Coat/Top_Coat_Grayscale.png'
import outlinetop from '../assets/images/Character/Top/Coat/Top_Coat_Outline.png'
import highlighttop from '../assets/images/Character/Top/Coat/Top_Coat_Highlight.png'
import { ReactComponent as colortop } from '../assets/images/Character/Top/Coat/Top_Coat_WhiteOverlay.svg'

import graytop2 from '../assets/images/Character/Top/Vest/Top_Vest_Grayscale.png'
import outlinetop2 from '../assets/images/Character/Top/Vest/Top_Vest_Outline.png'
import highlighttop2 from '../assets/images/Character/Top/Vest/Top_Vest_Highlight.png'
import { ReactComponent as colortop2 } from '../assets/images/Character/Top/Vest/Top_Vest_WhiteOverlay.svg'

import graytopb from '../assets/images/Character/Top/Beast/Top_Beast_Grayscale.png'
import outlinetopb from '../assets/images/Character/Top/Beast/Top_Beast_Outline.png'
import highlighttopb from '../assets/images/Character/Top/Beast/Top_Beast_Highlight.png'
import { ReactComponent as colortopb } from '../assets/images/Character/Top/Beast/Top_Beast_WhiteOverlay.svg'

import graytopco from '../assets/images/Character/Top/CollaredShirt/Top_CollaredShirt_Grayscale.png'
import outlinetopco from '../assets/images/Character/Top/CollaredShirt/Top_CollaredShirt_Outline.png'
import highlighttopco from '../assets/images/Character/Top/CollaredShirt/Top_CollaredShirt_Highlight.png'
import { ReactComponent as colortopco } from '../assets/images/Character/Top/CollaredShirt/Top_CollaredShirt_WhiteOverlay.svg'

import graytoph from '../assets/images/Character/Top/Hoodie/Top_Hoodie_Grayscale.png'
import outlinetoph from '../assets/images/Character/Top/Hoodie/Top_Hoodie_Outline.png'
import highlighttoph from '../assets/images/Character/Top/Hoodie/Top_Hoodie_Highlight.png'
import { ReactComponent as colortoph } from '../assets/images/Character/Top/Hoodie/Top_Hoodie_WhiteOverlay.svg'

import graytopk from '../assets/images/Character/Top/KnittedSweater/Top_KnittedSweater_Grayscale.png'
import outlinetopk from '../assets/images/Character/Top/KnittedSweater/Top_KnittedSweater_Outline.png'
import highlighttopk from '../assets/images/Character/Top/KnittedSweater/Top_KnittedSweater_Highlight.png'
import { ReactComponent as colortopk } from '../assets/images/Character/Top/KnittedSweater/Top_KnittedSweater_WhiteOverlay.svg'

import graytopp from '../assets/images/Character/Top/PlainShirt/Top_PlainShirt_Grayscale.png'
import outlinetopp from '../assets/images/Character/Top/PlainShirt/Top_PlainShirt_Outline.png'
import highlighttopp from '../assets/images/Character/Top/PlainShirt/Top_PlainShirt_Highlight.png'
import { ReactComponent as colortopp } from '../assets/images/Character/Top/PlainShirt/Top_PlainShirt_WhiteOverlay.svg'
/////////// Top ////////////

import { ReactComponent as colorsh2 } from '../assets/images/Character/Shoe/Skates/Shoe_Skates_WhiteOverlay.svg'
import tileOutline from '../assets/images/UI/Mobile/MainPage/ColorPalette/UIMobile_ColorPalette_Outline.png'
import { ReactComponent as tileColor } from '../assets/images/UI/Mobile/MainPage/ColorPalette/UIMobile_ColorPalette_WhiteOverlay.svg'

import { getCookie } from './cmg-character-tool'

const triangle = {
  layers: {
    gray,
    color,
    outline
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const oval = {
  layers: {
    gray: gray2,
    color: color2,
    outline: outline2,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const bean = {
  layers: {
    gray: grayhbe,
    color: colorhbe,
    outline: outlinehbe,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const circular = {
  layers: {
    gray: grayhcir,
    color: colorhcir,
    outline: outlinehcir,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const crazy = {
  layers: {
    gray: grayhcr,
    color: colorhcr,
    outline: outlinehcr,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const diamond = {
  layers: {
    gray: grayhda,
    color: colorhda,
    outline: outlinehda,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const natural = {
  layers: {
    gray: grayhna,
    color: colorhna,
    outline: outlinehna,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const star = {
  layers: {
    gray: grayhst,
    color: colorhst,
    outline: outlinehst,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
export const heads = { triangle, oval, bean, circular, crazy, diamond, natural, star }
export const body = {
  layers: {
    gray: grayb,
    color: colorb,
    outline: outlineb
  },
  original: {
    width: 1024,
    height: 1024
  }
}
export const bodies = { body }
const longPants = {
  layers: {
    gray: graybt,
    color: colorbt,
    outline: outlinebt,
    highlight: highlightbt
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const longSkirt = {
  layers: {
    gray: graybt2,
    color: colorbt2,
    outline: outlinebt2,
    highlight: highlightbt2
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const basicShorts = {
  layers: {
    gray: graybtbs,
    color: colorbtbs,
    outline: outlinebtbs,
    highlight: highlightbtbs
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const puffyShorts = {
  layers: {
    gray: graybtpfsh,
    color: colorbtpfsh,
    outline: outlinebtpfsh,
    highlight: highlightbtpfsh
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const skirt = {
  layers: {
    gray: graybtsk,
    color: colorbtsk,
    outline: outlinebtsk,
    highlight: highlightbtsk
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const sweatPants = {
  layers: {
    gray: graybtswpn,
    color: colorbtswpn,
    outline: outlinebtswpn,
    highlight: highlightbtswpn
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const wavySkirt = {
  layers: {
    gray: graybtwvsk,
    color: colorbtwvsk,
    outline: outlinebtwvsk,
    highlight: highlightbtwvsk
  },
  original: {
    width: 1024,
    height: 1024
  }
}
export const bottoms = { longPants, longSkirt, basicShorts, puffyShorts, skirt, sweatPants, wavySkirt }
const hairLong = {
  layers: {
    gray: grayhr,
    color: colorhr,
    outline: outlinehr,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const hairPoofy = {
  layers: {
    gray: grayhrpf,
    color: colorhrpf,
    outline: outlinehrpf,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const bang = {
  layers: {
    gray: grayhrbn,
    color: colorhrbn,
    outline: outlinehrbn,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const mohawk = {
  layers: {
    gray: grayhrmh,
    color: colorhrmh,
    outline: outlinehrmh,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const pigtail = {
  layers: {
    gray: grayhrpt,
    color: colorhrpt,
    outline: outlinehrpt,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const sidePony = {
  layers: {
    gray: grayhrspt,
    color: colorhrspt,
    outline: outlinehrspt,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const spiky = {
  layers: {
    gray: grayhrsp,
    color: colorhrsp,
    outline: outlinehrsp,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const wavy = {
  layers: {
    gray: grayhrwv,
    color: colorhrwv,
    outline: outlinehrwv,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
export const hairs = { hairLong, hairPoofy, bang, mohawk, pigtail, sidePony, spiky, wavy }
const fxAngry = {
  layers: {
    outline: angry,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const fxConcerned = {
  layers: {
    outline: concerned,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const fxExcited = {
  layers: {
    outline: excited,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const fxHappy = {
  layers: {
    outline: happy,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const fxNaughty = {
  layers: {
    outline: naughty,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const fxNeuitral = {
  layers: {
    outline: neuitral,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const fxPlayful = {
  layers: {
    outline: playful,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const fxSurprise = {
  layers: {
    outline: surprise,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
export const fx = { fxAngry, fxConcerned, fxExcited, fxHappy, fxNaughty, fxNeuitral, fxPlayful, fxSurprise }
const faMask = {
  layers: {
    gray: grayfa,
    color: colorfa,
    outline: outlinefa,
    highlight: highlightfa
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const faClown = {
  layers: {
    gray: grayfacl,
    color: colorfacl,
    outline: outlinefacl,
    highlight: highlightfacl
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const faGlass = {
  layers: {
    color: colorfa2,
    outline: outlinefa2,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const faSqGlass = {
  layers: {
    color: colorfa3,
    outline: outlinefa3,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const faStGlass = {
  layers: {
    color: colorfa4,
    outline: outlinefa4,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const faSwGlass = {
  layers: {
    color: colorfa5,
    outline: outlinefa5,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const htaChef = {
  layers: {
    gray: grayhta,
    color: colorhta,
    outline: outlinehta,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const htaFancy = {
  layers: {
    gray: grayhta2,
    color: colorhta2,
    outline: outlinehta2,
    highlight: highlighthta2,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const htaBase = {
  layers: {
    gray: grayhtaba,
    color: colorhtaba,
    outline: outlinehtaba,
    highlight: highlighthtaba,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const htaBean = {
  layers: {
    gray: grayhtabe,
    color: colorhtabe,
    outline: outlinehtabe,
    highlight: highlighthtabe,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const htaBeret = {
  layers: {
    gray: grayhtaber,
    color: colorhtaber,
    outline: outlinehtaber,
    // highlight: highlighthtaber,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const htaPencil = {
  layers: {
    gray: grayhtapen,
    color: colorhtapen,
    outline: outlinehtapen,
    highlight: highlighthtapen,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const none = {
  layers: {
    highlight: nonesr,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
export const fa = {
  none,
  faMask, faClown, faGlass, faSqGlass, faStGlass, faSwGlass,
  htaChef, htaFancy, htaBase, htaBean, htaBeret, htaPencil
}
const topCoat = {
  layers: {
    gray: graytop,
    color: colortop,
    outline: outlinetop,
    highlight: highlighttop,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const topVest = {
  layers: {
    gray: graytop2,
    color: colortop2,
    outline: outlinetop2,
    highlight: highlighttop2,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const topBeast = {
  layers: {
    gray: graytopb,
    color: colortopb,
    outline: outlinetopb,
    highlight: highlighttopb,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const topCol = {
  layers: {
    gray: graytopco,
    color: colortopco,
    outline: outlinetopco,
    highlight: highlighttopco,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const topHoodie = {
  layers: {
    gray: graytoph,
    color: colortoph,
    outline: outlinetoph,
    highlight: highlighttoph,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const topKnit = {
  layers: {
    gray: graytopk,
    color: colortopk,
    outline: outlinetopk,
    highlight: highlighttopk,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const topPlain = {
  layers: {
    gray: graytopp,
    color: colortopp,
    outline: outlinetopp,
    highlight: highlighttopp,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
export const top = { topCoat, topVest, topBeast, topCol, topHoodie, topKnit, topPlain }
const shBoot = {
  layers: {
    gray: graysh,
    color: colorsh,
    outline: outlinesh,
    highlight: highlightsh,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const shSkate = {
  layers: {
    gray: graysh2,
    color: colorsh2,
    outline: outlinesh2,
    highlight: highlightsh2,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const shClown = {
  layers: {
    gray: grayshcl,
    color: colorshcl,
    outline: outlineshcl,
    highlight: highlightshcl,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const shHeels = {
  layers: {
    gray: grayshhl,
    color: colorshhl,
    outline: outlineshhl,
    highlight: highlightshhl,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const shPfBoots = {
  layers: {
    gray: grayshpf,
    color: colorshpf,
    outline: outlineshpf,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const shShort = {
  layers: {
    gray: grayshsh,
    color: colorshsh,
    outline: outlineshsh,
    highlight: highlightshsh,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const shSlipper = {
  layers: {
    gray: grayshsl,
    color: colorshsl,
    outline: outlineshsl,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
const shSneaker = {
  layers: {
    gray: grayshsn,
    color: colorshsn,
    outline: outlineshsn,
    highlight: highlightshsn,
  },
  original: {
    width: 1024,
    height: 1024
  }
}
export const sh = { shBoot, shSkate, shClown, shHeels, shPfBoots, shShort, shSlipper, shSneaker }
export const tile = {
  layers: {
    color: tileColor,
    outline: tileOutline,
  },
  original: {
    width: 39,
    height: 35
  }
}

export const categories = ['head', 'hair', 'fx', 'top', 'bottom', 'sh', 'fa']
export const objects = {
  hair: hairs,
  fa,
  fx,
  head: heads,
  sh: sh,
  bottom: bottoms,
  top,
}
export const defaultCat = 'head'
export const RandomizeObj = () => {
  const keys = Object.keys(objects);
  let result = {};

  for (let i = 0; i < keys.length; i++) {
    const currentObject = objects[keys[i]];
    const currentObjectKeys = Object.keys(currentObject);
    const randomIndex = Math.floor(Math.random() * currentObjectKeys.length);
    const randomKey = currentObjectKeys[randomIndex];

    result[keys[i]] = randomKey;
  }

  console.log(result);

  return result
}
export function GetRandomCategory(categories) {
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

export const GetCurrentObj = (callback) => {
  let userid = null;
  const cookieKey = "cmg_uid";
  var unauthorizedid = "";
  if (
    typeof getCookie("cmg_uid") != "undefined"
    && getCookie("cmg_uid") != null
    && getCookie("cmg_uid") != "") {
    userid = getCookie(cookieKey)
  }
  if (localStorage.getItem("unauthorized") != null) {
   // console.log(localStorage.getItem("unauthorized"));
    unauthorizedid = localStorage.getItem("unauthorized");
  }
  if (!userid) {
    callback(null)
    return
  }
  if(unauthorizedid != ""){
    var fd = JSON.stringify({
      "unauthorizedid": unauthorizedid,
      "userid": userid
    });
    $.ajax({
      url: `https://char-tool-img.coolmathgames.com/changeuserid`,
      type: 'post',
      data: fd,
      contentType: "application/json",
      processData: false,
      headers: {
        "x-access-token": localStorage.getItem("authtoken")
      },
      success: function (response) {
        getuserid(userid);
        localStorage.removeItem("unauthorizedid");
      }, error: function (jqXHR, exception) {
        callback(null)
      }
    });
  }else{
    getuserid(userid)
  }

  function getuserid(userid){
    $.ajax({
      url: `https://char-tool-img.coolmathgames.com/charactor-body-assets/${userid}`,
      type: 'get',
      contentType: "application/json",
      processData: false,
      headers: {
        "x-access-token": localStorage.getItem("authtoken")
      },
      success: function (response) {
        const characterBodyData =  response.characterBody[0]
        const characterBodyColorData = response.characterBodyColor[0]
        const backgroundID = response.backgroundName[0]
        console.log('response backgroundid', response.backgroundName)
        console.log('current userid', userid)
        console.log('characterBodyData, characterBodyColor', characterBodyData, characterBodyColorData)
        callback(characterBodyData, characterBodyColorData, backgroundID)
      }, error: function (jqXHR, exception) {
        callback(null)
      }
    });
  }
}

// export const GetCurrentObj = (callback) => {
//   let userid = null
//   const cookieKey = "cmg_uid"

//   if (
//     typeof getCookie("cmg_uid") != "undefined"
//     && getCookie("cmg_uid") != null
//     && getCookie("cmg_uid") != "") {

//     userid = getCookie(cookieKey)
//   }

//   console.log('1111')

//   if (!userid) {
//     callback(null)
//     return
//   }

//   // userid = 4436413

//   // console.log('2222')
//   // console.log('userid', userid)

//   $.ajax({
//     url: `https://char-tool-img.coolmathgames.com/charactor-body-assets/${userid}`,
//     type: 'get',
//     contentType: "application/json",
//     processData: false,
//     headers: {
//       "x-access-token": localStorage.getItem("authtoken")
//     },
//     success: function (response) {
//       const characterBodyData =  response.characterBody[0]
//       const characterBodyColorData = response.characterBodyColor[0]
//       const backgroundID = response.backgroundName[0]

//       console.log('response backgroundid', response.backgroundName)
//       console.log('current userid', userid)
//       console.log('characterBodyData, characterBodyColor', characterBodyData, characterBodyColorData)

//       callback(characterBodyData, characterBodyColorData, backgroundID)
//     }, error: function (jqXHR, exception) {
//       callback(null)
//     }
//   });
// }