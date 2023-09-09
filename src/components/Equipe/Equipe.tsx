import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { DiogoIcon } from './DiogoIcon.js';
import { DubasIcon } from './DubasIcon.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import classes from './Equipe.module.css';
import { HelpCircleOutlineIcon } from './HelpCircleOutlineIcon.js';
import { HenriqueIcon } from './HenriqueIcon.js';
import { MapMarkerIcon } from './MapMarkerIcon.js';
import { PedroIcon } from './PedroIcon.js';
import { PhoneIcon } from './PhoneIcon.js';
import { RafaelIcon } from './RafaelIcon.js';
import { VectorIcon } from './VectorIcon.js';
import { WhatsappIcon } from './WhatsappIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 9:197 */
export const Equipe: FC<Props> = memo(function Equipe(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.lofoFiap1}></div>
      <div className={classes.entrar}>Entrar</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon3} />
      </div>
      <div className={classes.aEquipe}>A equipe</div>
      <div className={classes.usuario}>Usuario</div>
      <div className={classes.chatBot}>
        <div className={classes.textBlock}>ChatBot</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.rectangle3}></div>
      <div className={classes.helpCircleOutline}>
        <HelpCircleOutlineIcon className={classes.icon4} />
      </div>
      <div className={classes.whatsapp}>
        <WhatsappIcon className={classes.icon5} />
      </div>
      <div className={classes.phone}>
        <PhoneIcon className={classes.icon6} />
      </div>
      <div className={classes.mapMarker}>
        <MapMarkerIcon className={classes.icon7} />
      </div>
      <div className={classes.whatsApp}>WhatsApp</div>
      <div className={classes.enderecos}>Endereços</div>
      <div className={classes.peruntasFrequentes}>Peruntas frequentes</div>
      <div className={classes.sACETelefones}>SAC e Telefones</div>
      <div className={classes.portoLogo1}></div>
      <div className={classes.pngegg1}></div>
      <div className={classes.rafael}></div>
      <div className={classes.rafael2}>
        <RafaelIcon className={classes.icon8} />
      </div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled
      </div>
      <div className={classes.rafaelRm}>Rafael Rm 99791</div>
      <div className={classes.henrique}></div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled
      </div>
      <div className={classes.henriqueRm}>Henrique Rm98402</div>
      <div className={classes.henrique2}>
        <HenriqueIcon className={classes.icon9} />
      </div>
      <div className={classes.diogo}></div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT3}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled
      </div>
      <div className={classes.diodoRm}>Diogo Rm98605</div>
      <div className={classes.diogo2}>
        <DiogoIcon className={classes.icon10} />
      </div>
      <div className={classes.pedro}></div>
      <div className={classes.pedro2}>
        <PedroIcon className={classes.icon11} />
      </div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT4}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled
      </div>
      <div className={classes.pedroRm}>Pedro Rm550450</div>
      <div className={classes.dubas}></div>
      <div className={classes.dubas2}>
        <DubasIcon className={classes.icon12} />
      </div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT5}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled
      </div>
      <div className={classes.dubasRm76173}>
        <div className={classes.textBlock3}>Dubas Rm76173</div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
      </div>
    </div>
  );
});
