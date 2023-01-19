import { SettingsService } from './../../../../core/services/settings.service';
import { Component, OnInit, OnChanges } from '@angular/core';

import { tsParticles, Engine, ClickMode, ParticlesOptions, Container, InteractivityDetect} from 'tsparticles-engine';
import { loadFull } from "tsparticles";


import { EasingType, HoverMode, MoveDirection, OutMode } from 'tsparticles-engine';


@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit, OnChanges {

  opt?;

  particlesColor?:string = '#020202';

  ngOnChanges(): void {
  }

  constructor(private settings:SettingsService) { 
    // this.snow =  {
    //   fullScreen: {
    //     enable: false
    //   },
    //   particles: {
    //     number: {
    //       value: 40,
    //       density: {
    //         enable: false,
    //         value_area: 1972.8691040806818
    //       }
    //     },
    //     color: {
    //       value: "#ffffff"
    //     },
    //     shape: {
    //       type: "circle",
    //       stroke: {
    //         width: 0,
    //         color: "#000000"
    //       },
    //       polygon: {
    //         nb_sides: 5
    //       }
    //     },
    //     opacity: {
    //       value: 0.43292125643369117,
    //       random: false,
    //       anim: {
    //         enable: false,
    //         speed: 1,
    //         opacity_min: 0.1,
    //         sync: false
    //       }
    //     },
    //     size: {
    //       value: 11.565905665290902,
    //       random: true,
    //       anim: {
    //         enable: false,
    //         speed: 40,
    //         size_min: 0.1,
    //         sync: false
    //       }
    //     },
    //     line_linked: {
    //       enable: false,
    //       distance: 561.194221302933,
    //       color: "#ffffff",
    //       opacity: 0.4,
    //       width: 1
    //     },
    //     move: {
    //       enable: true,
    //       speed: 3,
    //       direction: 'bottom' as keyof typeof MoveDirection,
    //       out_mode: 'out' as keyof typeof OutMode ,
    //       random: false,
    //       straight: false,
    //       bounce: false,
    //       attract: {
    //         enable: false,
    //         rotateX: 1282.7296486924183,
    //         rotateY: 1362.9002517356944
    //       }
    //     }
    //   },
    //   interactivity: {
    //     events: {
    //       onhover: {
    //         enable: false,
    //         mode: "bubble"
    //       },
    //       onclick: {
    //         enable: false,
    //         mode: "bubble"
    //       },
    //       resize: true
    //     },
    //     modes: {
    //       grab: {
    //         distance: 400,
    //         line_linked: {
    //           opacity: 1
    //         }
    //       },
    //       bubble: {
    //         distance: 400,
    //         size: 40,
    //         duration: 2,
    //         opacity: 8,
    //         speed: 3
    //       },
    //       repulse: {
    //         distance: 200,
    //         duration: 0.4
    //       },
    //       push: {
    //         particles_nb: 4
    //       },
    //       remove: {
    //         particles_nb: 2
    //       }
    //     }
    //   },
    //   retina_detect: true
    // }
    this.opt = {
      fullScreen: {
        enable: false
      },
      themes: [
        {
          name: "light",
          default: {
            value: true,
          },
          options: {
            particles: {
              color: {
                value: ["#000000", "#0000ff"]
              }
            }
          }
        },
        {
          name: "dark",
          default: {
            value: false
          },
          options: {
            // background: {
            //   color: "#000000"
            // },
            particles: {
              color: {
                value: ["#ffffff", "#ff0000"]
              }
            }
          }
        }
      ],
      fpsLimit: 120,
      interactivity: {
        detectsOn: "canvas" as  keyof typeof InteractivityDetect,
        events: {
          onHover: {
            enable: true,
            mode: HoverMode.attract
          },
          resize: true
        },
        modes: {
          attract: {
            distance: 200,
            duration: 0.4,
            easing: EasingType.easeOutQuad,
            factor: 1,
            maxSpeed: 50,
            speed: 1
          },
          push: {
            particles_nb: 4
          }
        }
      },
      particles: {
        collisions: {
          enable: true
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: MoveDirection.none,
          random: true,
          straight: false,
          outMode: OutMode.out,
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        },
        number: {
          value: 150,
          density: {
            enable: true,
            valueArea: 789.1476416322727
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: true,
            speed: 0.6,
            opacityMin: 0,
            sync: false
          }
        },
        shape: {
          image: {
            width: 100,
            height: 100
          },
          polygon: {
            nbSides: 5
          },
          stroke: {
            width: 0,
            color: "#000000"
          },
          type: "circle"
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 5,
            sizeMin: 0,
            sync: false
          }
        }
      },
      detectRetina: true
    }
  }


  ngOnInit(): void {

    let themeContainerAux:any;
    tsParticles.load('parti123', this.opt)
    .then((container) => {
      themeContainerAux = container;
      themeContainerAux?.canvas.initBackground();
      console.log(themeContainerAux?.actualOptions);
    });


    this.settings.getDarkModeObservable().subscribe((darkMode) => {
      if (darkMode) {
        themeContainerAux?.loadTheme('dark');
        console.log('darkmodee');
      } else {
        themeContainerAux?.loadTheme('light');
      }
      // this.particlesColor = darkMode ? '#ffffff' : '#000000';
      // // this.opt!.particles.color.value = this.particlesColor;
      // tsParticles.refresh();
      // console.log('cambio');
    });
  }

  particlesLoaded(container:Container){
    console.log(container)
  }

  async particlesInit(engine:Engine):Promise<void> {
    // await loadSlim(engine);
    await loadFull(engine);
  }

}
