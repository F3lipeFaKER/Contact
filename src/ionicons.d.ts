// jsx.d.ts
import 'react';


declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // adicionando 'ion-icon' como uma propriedade válida
    'ion-icon'?: any;
  }
}
