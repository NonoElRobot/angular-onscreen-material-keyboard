import { IKeyboardIcons } from '../interfaces/keyboard-icons.interface';
import { KeyboardClassKey } from '../enums/keyboard-class-key.enum';

export const KEYBOARD_ICONS: IKeyboardIcons = {
  [KeyboardClassKey.Bksp]: { name: 'keyboard_backspace'},
  [KeyboardClassKey.Caps]: { name: 'keyboard_capslock' },
  [KeyboardClassKey.Enter]: { name: 'keyboard_return' },
  [KeyboardClassKey.Shift]: { name: 'keyboard_arrow_up' },
  [KeyboardClassKey.Space]: { name: ' ' },
  [KeyboardClassKey.Tab]: { name: 'keyboard_tab' },
  [KeyboardClassKey.CloseKeyboard]: { name: 'arrow_downward' }
};
