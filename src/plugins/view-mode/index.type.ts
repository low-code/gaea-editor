import { StoreProps } from '../../stores';

export class Props extends StoreProps<void, void> {}

export class State {
  public showModel = false;

  public currentIndex = 0;
}
