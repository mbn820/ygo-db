import TRAP from '../assets/trap.png';
import SPELL from '../assets/spell.png';
import LIGHT from '../assets/light.png';
import DARK from '../assets/dark.png';
import WATER from '../assets/water.png';
import FIRE from '../assets/fire.png';
import EARTH from '../assets/earth.png';
import WIND from '../assets/wind.png';
import DIVINE from '../assets/divine.png';
import level from '../assets/level.png';
import rank from '../assets/rank.png';
import Continuous from '../assets/continuous.png';
import Counter from '../assets/counter.png';
import Equip from '../assets/equip.png';
import Field from '../assets/field.png';
import QuickPlay from '../assets/quick-play.png';
import Ritual from '../assets/ritual.png';
import Aqua from '../assets/aqua.png';
import Beast from '../assets/beast.png';
import BeastWarrior from '../assets/beast.png';
import Dinosaur from '../assets/dinosaur.png';
import DivineBeast from '../assets/divine-beast.png';
import Dragon from '../assets/dragon.png';
import Fairy from '../assets/fairy.png';
import Fiend from '../assets/fiend.png';
import Fish from '../assets/fish.png';
import Insect from '../assets/insect.png';
import Machine from '../assets/machine.png';
import Plant from '../assets/plant.png';
import Psychic from '../assets/psychic.png';
import Pyro from '../assets/pyro.png';
import Reptile from '../assets/reptile.png';
import Rock from '../assets/rock.png';
import SeaSerpent from '../assets/sea-serpent.png';
import Spellcaster from '../assets/spellcaster.png';
import Thunder from '../assets/thunder.png';
import Warrior from '../assets/warrior.png';
import WingedBeast from '../assets/winged-beast.png';
import Zombie from '../assets/zombie.png';

const Icons = {
  attributeIcons: {
    TRAP, SPELL, LIGHT, DARK, WATER, FIRE, EARTH, WIND, DIVINE
  },
  levels: {
    level, rank
  },
  spellOrTrapTypes: {
    Continuous, Counter, Equip, Field, 'Quick-Play': QuickPlay, Ritual
  },
  monsterTypes: {
    Aqua, Beast, 'Beast-Warrior': BeastWarrior, Dinosaur, 'Divine-Beast': DivineBeast, Dragon, Fairy, Fiend, 
    Fish, Insect, Machine, Plant, Psychic, Pyro, Reptile, Rock, 'Sea-Serpent': SeaSerpent,
    Spellcaster, Thunder, Warrior, 'Winged Beast': WingedBeast, Zombie
  }
};

export default Icons;