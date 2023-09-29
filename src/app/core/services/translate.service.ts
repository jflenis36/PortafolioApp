import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private currentMode: string = 'english'; 
  private texComponentSubject: Subject<any> = new Subject<any>();
  texComponent$ = this.texComponentSubject.asObservable();

  language: any = {
    "english": {
      "navbar": {
        "logo": "Juan",
        "options": {
          "pc": [ "About me", "Skills", "Projects" ],
          "mobile": [ "prueba 1", "prueba 1", "prueba 1", "prueba 1" ]
        }
      },
      "home": {
        "section_1": {
          "title_1": "About me.",
          "fixed_text": "FullStack Developer.",
          "hidden_text": "I am deeply passionate about coding and solving complex challenges. I love continuing to grow as a professional. I am always ready to take on challenging projects and learn from every experience. \n\n My goal is to provide innovative and efficient solutions through software development. My passion for programming drives me to seek new ways to enhance user experience and contribute to the success of the projects I am involved in.",
          "continue": "Show content.",
          "hide": "Hide content.",
          "group_dates": {
            "personal_dates": {
              "title": "Informatión",
              "info": [
                { "name": "Birthday", "value": "June 24", "class": "" },
                { "name": "Ubication", "value": "Buga - Colombia", "class": "" },
                { "name": "Personal exp", "value": "2 years", "class": "" },
                { "name": "Work exp", "value": "1 year", "class": "bg" }
              ]
            },
            "interestin": {
              "title": "Interests",
              "cards": [
                { "icon": "fa-solid fa-gamepad", "text": "Games" },
                { "icon": "fa-brands fa-windows", "text": "Windows" },
                { "icon": "fas fa-football-ball", "text": "Sport" },
                { "icon": "fas fa-music", "text": "Music" },
                { "icon": "fas fa-photo-video", "text": "Video" },
                { "icon": "fas fa-motorcycle", "text": "Motorcycle" },
                { "icon": "fas fa-plane-departure", "text": "Travel" },
                { "icon": "fas fa-utensils", "text": "Eat" }
              ]
            }
          }
        },
        "section_2": {
          "title": "Skills",
          "cards": [
            {"icon": "fab fa-html5", "text": "Html"},
            {"icon": "fab fa-css3-alt", "text": "Css"},
            {"icon": "fab fa-sass", "text": "Scss"},
            {"icon": "fab fa-js-square", "text": "Javascript"},
            {"icon": "fab fa-angular", "text": "Angular"},
            {"icon": "fab fa-git-alt", "text": "Git"},
            {"icon": "fab fa-php", "text": "Php"},
            {"icon": "fab fa-laravel", "text": "Laravel"}
          ]
        },
        "section_3": {
          "title": "Projects",
          "projects": [
            {"id":1, "type": "work", "text": "Alcaldia de Palmira", "img": "../../../assets/img/prueba.jpg", "description": "Esta es la descripcion previa dell proyecto", "link": "http://34.66.99.180/app" },
            {"id":2, "type": "work", "text": "DevLab", "img": "../../../assets/img/prueba.jpg", "description": "Esta es la descripcion previa dell proyecto", "link": "" },
            {"id":3, "type": "mine", "text": "Management platform", "img": "../../../assets/img/prueba.jpg", "description": "Esta es la descripcion previa dell proyecto", "link": "/marketplace" }
            // { "type": "mine", "text": "Cuarta card", "img": "../../../assets/img/prueba.jpg", "description": "Esta es la descripcion previa dell proyecto", "link": "" },
            // { "type": "mine", "text": "Quinta card", "img": "../../../assets/img/prueba.jpg", "description": "Esta es la descripcion previa dell proyecto", "link": "" },
            // { "type": "mine", "text": "Sexta card", "img": "../../../assets/img/prueba.jpg", "description": "Esta es la descripcion previa dell proyecto", "link": "" }
          ],
          "button": {"text": "see more projects", "link": "project-links"}
        },
        "section_4": {
          "title": "Juan Felipe",
          "text": "©2023, Juan Felipe. All rights reserved."
        }
      },
      "footer": {
        "title": "Juan Felipe",
        "text": "©2023, Juan Felipe. All rights reserved."
      }
    },
    "spanish": {
      "navbar": {
        "logo": "Juan",
        "options": {
          "pc":  [ "Acerca de mi", "Habilidades", "Proyectos" ],
          "mobile": [ "prueba 1", "prueba 1", "prueba 1", "prueba 1" ]
        }
      },
      "home": {
        "section_1": {
          "title_1": "Acerca de mi.",
          "fixed_text": "Desarrollador FullStack.",
          "hidden_text": "Me apasiona profundamente la creación de código y la solución de retos complejos. Me encanta seguir creciendo como profesional. Siempre estoy listo para asumir proyectos desafiantes y aprender de cada experiencia.\n\n Mi objetivo es ofrecer soluciones innovadoras y eficientes a través del desarrollo de software. Mi pasión por la programación me impulsa a buscar nuevas formas de mejorar la experiencia del usuario y contribuir al éxito de los proyectos en los que participo.",
          "continue": "Seguir leyendo.",
          "hide": "Ocultar texto.",
          "group_dates": {
            "personal_dates": {
              "title": "Información",
              "info": [
                { "name": "Cumple", "value": "Junio 24", "class": "" },
                { "name": "Ubicación", "value": "Buga - Colombia", "class": "" },
                { "name": "Exp propia", "value": "2 años", "class": "" },
                { "name": "Exp laboral", "value": "1 año", "class": "bg" }
              ]
            },
            "interestin": {
              "title": "Intereses",
              "cards": [
                { "icon": "fa-solid fa-gamepad", "text": "Juegos" },
                { "icon": "fa-brands fa-windows", "text": "Windows" },
                { "icon": "fas fa-football-ball", "text": "Deporte" },
                { "icon": "fas fa-music", "text": "Musica" },
                { "icon": "fas fa-photo-video", "text": "Video" },
                { "icon": "fas fa-motorcycle", "text": "Moto" },
                { "icon": "fas fa-plane-departure", "text": "Viajar" },
                { "icon": "fas fa-utensils", "text": "Comer" }
              ]
            }
          }
        },
        "section_2": {
          "title": "Habilidades",
          "cards": [
            {"icon": "fab fa-html5", "text": "Html"},
            {"icon": "fab fa-css3-alt", "text": "Css"},
            {"icon": "fab fa-sass", "text": "Scss"},
            {"icon": "fab fa-js-square", "text": "Javascript"},
            {"icon": "fab fa-angular", "text": "Angular"},
            {"icon": "fab fa-git-alt", "text": "Git"},
            {"icon": "fab fa-php", "text": "Php"},
            {"icon": "fab fa-laravel", "text": "Laravel"}
          ]
        },
        "section_3": {
          "title": "Proyectos",
          "projects": [
            {"id":1, "type": "work", "text": "Alcaldia de palmira", "img": "../../../assets/img/prueba.jpg", "description": "Esta es la descripcion previa dell proyecto" },
            {"id":2, "type": "work", "text": "DevLab", "img": "../../../assets/img/prueba.jpg", "description": "Esta es la descripcion previa dell proyecto" },
            {"id":3, "type": "mine", "text": "Plataforma de gestión", "img": "../../../assets/img/prueba.jpg", "description": "Esta es la descripcion previa dell proyecto", "link": "project-links/3" }
            // { "text": "Cuarta card", "img": "../../../assets/img/prueba.jpg", "description": "Esta es la descripcion previa dell proyecto" },
            // { "text": "Quinta card", "img": "../../../assets/img/prueba.jpg", "description": "Esta es la descripcion previa dell proyecto" },
            // { "text": "Sexta card", "img": "../../../assets/img/prueba.jpg", "description": "Esta es la descripcion previa dell proyecto" }
          ],
          "button": {"text": "Ver más proyectos", "link": "project-links"}
        },
        "section_4": {
          "title": "Juan Felipe",
          "text": "©2023, Juan Felipe. Todos los derechos reservados."
        }
      },
      "footer": {
        "title": "Juan Felipe",
        "text": "©2023, Juan Felipe. Todos los derechos reservados."
      }
    }
  }
  constructor() {}

  changeMode(language: string): void {
    this.currentMode = language;
    this.texComponentSubject.next(this.language[this.currentMode]);
  }

  texComponent(component: string) {
    this.texComponentSubject.next(this.language[this.currentMode][component]);
  }

  firstTextComponent(component: string) {
    return this.language[this.currentMode][component]
  }
}
