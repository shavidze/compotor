import {
  Component,
  OnInit,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  elApp: any;
  elPlay: any;

  machine = {
    initial: 'small',
    states: {
      small: { on: { click: 'medium' } },
      medium: { on: { click: 'small', play: 'large' } },
      large: { on: { click: 'small', play: 'small' } },
    },
  };

  isPlaying: boolean = false;

  @ViewChild('videoPlayer', { static: false }) vieoPlayer: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.elApp = document.querySelector('#app');
    this.elPlay = document.querySelector('.play');

    this.listenApp();
  }

  listenApp() {
    this.elApp.addEventListener('click', (e) => {
      console.log('clicked - ', e.target.className);
      if (e.target.className === 'play') {
        return this.listenPlay();
      }
      this.isPlaying = false;
      this.vieoPlayer.nativeElement.load();
      return this.activate(this.transition(this.elApp.dataset.state, e.type));
    });
  }

  listenPlay(): void {
    const state = this.elApp.dataset.state;
    this.activate(this.transition(state, 'play'));
    this.vieoPlayer.nativeElement.play();
    this.isPlaying = true;
  }

  activate(state) {
    this.elApp.dataset.state = state;
  }

  transition(state, event) {
    return this.machine.states[state].on[event] || state;
  }
}
