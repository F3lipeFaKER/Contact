import { IonIcon } from '@ionic/react';

type IconsProps = {
    text?: string;
};

export function IconsSocial(props: IconsProps) {
    return (
        <div>
          <IonIcon name={props.text}></IonIcon>
        </div>
      );
      
}
