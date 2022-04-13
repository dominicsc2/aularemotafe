import { IBannerCallToAction, IBanner } from '@clean/presentation/components/common/interfaces/banner.interfaces';
import { HookDescription, HowItWorks, UploadAbout } from '../../interfaces/landing-pages.interfaces';

export const hookDescription: HookDescription[] = [
  {
    image: 'clasestodoslosdias.jpg',
    heading: 'Enseña los cursos que dominas',
    content:
      'Elije qué cursos deseas enseñar. Aparece en las secciones del curso que dominas y comparte tu conocimiento.'
  },
  {
    image: 'bancodetareas.png',
    heading: 'Gana dinero',
    content:
      'Cada vez que un estudiante acceda a tu canal de Trilce, recibirás tokens que podrás canjear\
     por dinero y cobrar por Paypal u otro medio de tu agrado.'
  },
  {
    image: 'subject-icon-5.jpg',
    heading: 'Hazte conocido',
    content:
      'Personaliza tu cuenta, prepara bien tus clases para obtener las mejores calificaciones\
     y críticas, destaca entre los instructores de Trilce y date a conocer.'
  }
];

export const howItWorks: HowItWorks[] = [
  {
    heading: '1. Regístrate en la aplicación',
    content:
      'Crea tu cuenta de instructor ingresando la universidad a la que perteneces (en caso seas\
       estudiante o profesor universitario) y asocia tu correo universitario para visitar tus datos,\
        en todo caso, ingresa tu correo personal y sé parte de la plana docente de Trilce.'
  },
  {
    heading: '2. Personaliza tu cuenta',
    content:
      'Ingresa los cursos que dominas, tu biografía y resalta tus logros para resaltar tu perfil\
     y tener un mejor posicionamiento entre los instructores de Trilce.'
  },
  {
    heading: '3. Agenda tus clases',
    content:
      'Una vez creada tu cuenta, podrás registrar tus horarios de clase, los cuales podrán ser\
     visualizados en tu perfil. Trata de que sean flexibles para llegar a una mayor cantidad de alumnos.'
  },
  {
    heading: '4. Prepara tus clases',
    content:
      'Sigue las recomendaciones de Trilce para preparar tus clases y utilizar las herramientas de la plataforma.'
  },
  {
    heading: '5. Accede a una sala asignada a tu cuenta y empieza a impartir conocimiento',
    content:
      'Accede a una sala reservada a tu cuenta. Empieza a dictar clases en vivo. Recibe dinero por cada\
     alumno que ingresa a tu clase. Responde preguntas. Resuelve las dudas de tus alumnos. Además, haz de Trilce tu plataforma de trabajo.'
  }
];

export const uploadAbout: UploadAbout = {
  sectionTitle:
    'Comparte los apuntes, resúmenes, el solucionario de un examen o tarea resuelta durante clase con tus alumnos',
  image: '/img/upload.png',
  content:
    'Para garantizar la satisfacción de tus alumnos, envía, de forma privada, los apuntes, resúmenes\
     de tu clase o los solucionarios de los ejercicios resueltos. Recuerda que nadie está exento a problemas de conexión.'
};

export const footerAd: IBannerCallToAction = {
  backgroundImage: 'url(' + '/img/instructor.jpg' + ')',
  mainTitle: '¿Deseas saber más de Trilce?',
  bannerDescription:
    'Trilce es una plataforma virtual en donde no solo podrás enseñar a diversos estudiantes los temas\
     que domines, sino también mejorar profesionalmente con reuniones y asambleas metodológicas que te permitirán\
      capacitarte para mejorar la calidad de tus clases.',
  buttonText: ' > Conócenos'
};

export const additionalContent: IBanner = {
  backgroundImage: 'url(' + '/img/help.jpg' + ')',
  mainTitle: 'Siempre disponible para ayudarte',
  bannerDescription:
    'El equipo de ayuda para instructores estará disponible las 24 horas del día para resolver todas tus dudas\
     y guiarte en el proceso para convertirte en un instructor exitoso de Trilce.'
};
