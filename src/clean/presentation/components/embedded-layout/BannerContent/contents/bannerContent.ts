import { IBannerCallToAction, IBanner } from '@clean/presentation/components/common/interfaces/banner.interfaces';

export const studentContent: IBannerCallToAction = {
  contentWrapperStyle: 'studentContent',
  mainInfoStyle: 'bannerInfo',
  buttonStyle: 'secondary',
  mainTitle: 'Todo lo que necesitas en un solo lugar',
  bannerDescription:
    'Aprende a tu ritmo, a cualquier hora del día y donde te encuentres con las clases en vivo, cursos, banco de tareas y exámenes que ofrece Trilce\
  a través de su comunidad.',
  buttonText: 'Comienza a aprender',
  backgroundImage: 'url(' + '/img/student.jpg' + ')'
};

export const instructorContent: IBannerCallToAction = {
  contentWrapperStyle: 'instructorContent',
  mainInfoStyle: 'bannerInfo',
  buttonStyle: 'secondary',
  mainTitle: 'Enseña en línea a miles de estudiantes universitarios',
  bannerDescription: 'Llega a más alumnos, comparte tu conocimientos y gana dinero.',
  buttonText: 'Comienza a enseñar',
  backgroundImage: 'url(' + '/img/instructor.jpg' + ')'
};

export const instructorWelcomeContent: IBanner = {
  backgroundImage: 'url(' + '/img/success.png' + ')',
  mainTitle: '¡Has finalizado el proceso para registrarte como instructor!',
  bannerDescription:
    'En breve, te estaremos enviando un correo para agendar una reunión con el equipo de Aula Remota X.'
};

export const emptyContent: IBannerCallToAction = {
  contentWrapperStyle: '',
  mainInfoStyle: '',
  buttonStyle: 'primary',
  mainTitle: '',
  bannerDescription: '',
  buttonText: '',
  backgroundImage: 'url(' + '/img/student.jpg' + ')'
};

export const mainContent: IBannerCallToAction = {
  contentWrapperStyle: 'studentContent',
  mainInfoStyle: 'bannerInfo',
  buttonStyle: 'secondary',
  mainTitle: 'Realiza una consulta',
  bannerDescription:
    'Resuelve de forma rápida las dudas que tengas respecto a algún examen, trabajo, tarea u otro tipo de documento o evento.'
    + 'Ingresa en la caja de búsqueda palabras clave como:'
    + "<span class='hightlight'> tarea, examen, trabajo, nombre del curso.</span>"
    + 'Nuestro motor de búsqueda te redirigirá a foros de preguntas y respuestas',
  buttonText: 'Comienza a aprender',
  backgroundImage: 'url(' + '/img/student.jpg' + ')'
};
