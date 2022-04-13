import { IBannerCallToAction } from '@clean/presentation/components/common/interfaces/banner.interfaces';
import { HookDescription, HowItWorks, UploadAbout } from '../../interfaces/landing-pages.interfaces';

export const hookDescription: HookDescription[] = [
  {
    image: 'clasestodoslosdias.jpg',
    heading: 'Clases todos los días',
    content: 'Conéctate a cualquier hora del día para asistir a las clases en línea.'
  },
  {
    image: 'bancodetareas.png',
    heading: 'Banco de tareas y exámenes',
    content: 'Comparte y descarga gratis exámenes o tareas subidas por estudiantes de todas las universidades.'
  },
  {
    image: 'subject-icon-5.jpg',
    heading: 'Prepárate para tus exámenes',
    content: 'para cada exámen que tengas, siempre habrán clases a las que asistir. Nunca perderás tu oportunidad.'
  }
];

export const howItWorks: HowItWorks[] = [
  {
    heading: '1. Regístrate en la aplicación',
    content:
      'Crea tu cuenta de estudiante ingresando la universidad a la que perteneces, así como también el ciclo académico en el que comenzaste a estudiar.'
  },
  {
    heading: '2. Canjea tokens',
    content:
      'Compra monedas monedas virtuales (tokens) que te permitirán acceder a una clase en vivo y prepararte para tus exámenes.'
  },
  {
    heading: '3. Ingresa a una clase',
    content:
      'Una vez que obtengas tus tokens, ingresa a una clase en vivo, realiza preguntas, recibe respuestas y empieza a aprender.'
  }
];

export const uploadAbout: UploadAbout = {
  sectionTitle: 'Sube exámenes pasados, trabajos, tareas y todo tipo de documentos',
  image: '/img/upload.png',
  content:
    'Al subir archivos a Trilce acumulas  tokens con los que podrás asistir a una mayor cantidad de clases sin invertir más dinero.'
};

export const footerAd: IBannerCallToAction = {
  backgroundImage: 'url(' + '/img/instructor.jpg' + ')',
  mainTitle: '¿Tienes habilidades para la docencia?',
  bannerDescription:
    'Enseña a miles de estudiantes universitarios. llega a más estudiantes en Trilce y comparte tu conocimiento',
  buttonText: 'Comienza a enseñar',
  href: ''
};
